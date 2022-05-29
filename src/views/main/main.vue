<template>
  <div class="main">
    <el-container class="container">
      <el-aside :width="isCollapse ? '60px' : '210px'" class="menu">
        <nav-menu :collapse="isCollapse" />
      </el-aside>
      <el-container class="content">
        <el-header class="content-header">
          <NavHeader @foldchange="handleFoldChange" />
        </el-header>
        <el-main class="content-main">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import NavMenu from '@/components/nav-menu'
import NavHeader from '@/components/nav-header'
export default defineComponent({
  name: 'mainView',
  components: {
    NavMenu,
    NavHeader
  },
  setup() {
    const isCollapse = ref(false)
    const handleFoldChange = (val: boolean) => {
      isCollapse.value = val
    }
    return {
      handleFoldChange,
      isCollapse
    }
  }
})
</script>
<style lang="less">
.main {
  height: 100%;
  .container {
    height: 100%;
    .menu {
      height: 100%;
      background-color: blue;
    }
    .content-header {
      background-color: red;
    }
    .content-main {
      background-color: yellow;
    }
  }
}
.el-aside {
  overflow-x: hidden;
  overflow-y: auto;
  text-align: left;
  cursor: pointer;
  background-color: #001529;
  transition: width 0.3s linear;
  scrollbar-width: none; /* firefox */
  -ms-overflow-style: none; /* IE 10+ */

  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
