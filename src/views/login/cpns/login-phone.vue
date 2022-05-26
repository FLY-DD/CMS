<template>
  <div class="login-account">
    <el-form label-width="67px" :model="formVal" :rules="rules">
      <el-form-item label="手机号" prop="phoneNumber">
        <el-input v-model="formVal.phoneNumber" :maxlength="4"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <div style="display: flex">
          <el-input v-model="formVal.code" maxlength="4"></el-input>
          <el-button type="primary" style="flex: 1; margin-left: 10px"
            >获取验证码</el-button
          >
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue'
export default defineComponent({
  name: 'login-account',
  setup() {
    const formVal = reactive({
      phoneNumber: '',
      code: ''
    })
    const rules = {
      phoneNumber: [
        { required: true, message: '请输入手机号', trigger: 'blur' },
        {
          pattern: /^[0-9]{11}$/,
          message: '请输入11位正确的手机号~',
          trigger: 'blur'
        }
      ],
      code: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        {
          pattern: /^[0-9]{4}$/,
          message: '请输入4位正确的验证码',
          trigger: 'blur'
        }
      ]
    }
    return {
      formVal,
      rules
    }
  }
})
</script>
<style lang="less"></style>
