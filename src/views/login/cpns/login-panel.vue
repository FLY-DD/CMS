<template>
  <div class="login-panel">
    <h1 class="title" style="margin-bottom: 20px">后台管理系统</h1>
    <el-tabs type="border-card" class="demo-tabs" stretch v-model="whichPane">
      <el-tab-pane name="account">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><i class="el-icon-user-solid"></i></el-icon>
            <span> 账号登录</span>
          </span>
        </template>
        <login-account ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><i class="el-icon-phone"></i></el-icon>
            <span> 手机登录</span>
          </span>
        </template>
        <login-phone />
      </el-tab-pane>
    </el-tabs>
    <div class="account-control">
      <el-checkbox v-model="isRemember">记住密码</el-checkbox
      ><el-link target="_blank">忘记密码</el-link>
    </div>
    <el-button class="login-btn" type="primary" @click="userLogin"
      >登录</el-button
    >
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import LoginAccount from './login-account.vue'
import LoginPhone from './login-phone.vue'
export default defineComponent({
  name: 'login-panel',
  components: {
    LoginAccount,
    LoginPhone
  },
  setup() {
    const isRemember = ref(true)
    const whichPane = ref('account')
    const accountRef = ref<InstanceType<typeof LoginAccount>>() //使用ref时组件的类型
    const userLogin = () => {
      if (whichPane.value === 'account') {
        accountRef.value?.loginAction(isRemember.value)
      } else {
        console.log(1111111)
      }
    }
    return {
      isRemember,
      accountRef,
      userLogin,
      whichPane
    }
  }
})
</script>
<style lang="less" scoped>
.login-panel {
  width: 320px;
  margin-bottom: 150px;
  .title {
    text-align: center;
  }
  .account-control {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }
  .login-btn {
    width: 100%;
    margin-top: 10px;
  }
}
</style>
