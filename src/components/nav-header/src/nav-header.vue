<template>
  <div class="nav-header flex">
    <div class="left flex">
      <i
        :class="isFold ? 'el-icon-s-unfold' : 'el-icon-s-fold'"
        class="fold"
        @click="foldChange"
      ></i>
      <span>面包屑</span>
    </div>
    <div class="right">
      <el-dropdown>
        <div class="user flex">
          <el-avatar
            size="small"
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
            style="margin-right: 10px"
          /><span>User</span>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item icon="el-icon-circle-plus-outline"
              >退出登录</el-dropdown-item
            >
            <el-dropdown-item>Action 2</el-dropdown-item>
            <el-dropdown-item>Action 3</el-dropdown-item>
            <el-dropdown-item>Action 4</el-dropdown-item>
            <el-dropdown-item>Action 5</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  emits: ['foldchange'],
  name: 'nav-header',
  setup(props, { emit }) {
    const isFold = ref(false)
    function foldChange() {
      isFold.value = !isFold.value
      emit('foldchange', isFold.value)
    }
    return {
      foldChange,
      isFold
    }
  }
})
</script>
<style lang="less">
.nav-header {
  height: 100%;
  justify-content: space-between;

  .left {
    height: 100%;
    .fold {
      font-size: 26px;
      margin-right: 5px;
    }
  }
}

.flex {
  display: flex;
  align-items: center;
}
</style>
