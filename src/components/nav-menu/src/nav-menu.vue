<template>
  <div class="nav-menu">
    <div class="logo">
      <img src="~@/assets/img/logo.svg" alt="" />
      <span class="title" v-if="!collapse">VUE3+TS</span>
    </div>
    <el-menu
      active-text-color="#0a60bd"
      background-color="#0c2135"
      class="el-menu-vertical-demo"
      :default-active="menuId"
      text-color="#b7bdc3"
      :collapse="collapse"
    >
      <template v-for="item in userMenu">
        <el-submenu v-if="item.type === 1" :key="item.id" :index="item.id + ''">
          <template #title>
            <el-icon :class="item.icon"></el-icon>
            <span style="magin: 0 10px">{{ item.name }}</span>
          </template>
          <el-menu-item
            v-for="item in item.children"
            :key="item.id"
            :index="item.id + ''"
            @click="handleClick(item.url)"
          >
            <i :class="item.icon"></i>
            <span style="magin: 0 10px">{{ item.name }}</span>
          </el-menu-item>
        </el-submenu>
        <el-menu-item v-else :key="item.id" :index="item.id + ''">
          <i class="item.icon"></i>
          <span style="magin: 0 10px">{{ item.name }}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'
import { getMenuItem } from '@/utils/mapMenuToRoutes'
export default defineComponent({
  name: 'nav-menu',
  props: {
    collapse: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const store = useStore()
    const router = useRouter()
    const route = useRoute()
    const userMenu = computed(() => store.state.login.userMenu) //computed 获取到的是一个ref对象
    //执行的作用根据路由路径判断当前所要展开的nav-menu菜单
    const chooseMenuItem = getMenuItem(userMenu.value, route.path)

    const menuId = ref(chooseMenuItem.id + '')
    //保持刷新后选中菜单选项
    const handleClick = (url: string) => {
      router.push({
        path: url ?? '/not-found'
      })
    }
    return {
      userMenu,
      handleClick,
      menuId
    }
  }
})
</script>
<style lang="less">
.nav-menu {
  height: 100%;
  background-color: #001529;
  .logo {
    //添加样式的必要性 因为会有动画 所以造成字体隐藏，所以字体不能对其他部分有影响 因该时单独的
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    .title {
      line-height: 28px;
      color: #fff;
    }
    img {
      height: 100%;
      margin: 0 10px;
    }
  }
}
.el-menu {
  width: 100%;
  border: none;
}
.el-submenu__title * {
  vertical-align: baseline;
  margin-left: 10px;
}
</style>
