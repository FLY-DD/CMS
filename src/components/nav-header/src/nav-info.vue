<template>
  <div class="nav-info">
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
          <el-dropdown-item divided>用户管理</el-dropdown-item>
          <el-dropdown-item>系统设置</el-dropdown-item>
          <el-dropdown-item>修改信息</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'nav-info'
})
</script>
<style lang="less"></style>
