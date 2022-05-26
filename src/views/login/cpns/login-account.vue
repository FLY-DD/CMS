<template>
  <div class="login-account">
    <el-form label-width="60px" :model="formVal" :rules="rules" ref="formEle">
      <el-form-item label="账号" prop="name">
        <el-input v-model="formVal.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="formVal.password" show-password></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { useStore } from 'vuex'
import { ElForm } from 'element-plus'
import stroge from '@/utils/cache'
export default defineComponent({
  name: 'login-account',
  setup() {
    const store = useStore()
    const formVal = reactive({
      name: stroge.getCache('name') ?? '',
      password: stroge.getCache('password') ?? ''
    })
    const formEle = ref<InstanceType<typeof ElForm>>()
    const rules = {
      name: [
        { required: true, message: '请输入账号', trigger: 'blur' },
        {
          pattern: /^[a-z0-9]{3,}$/,
          message: '请输入3位以上字母或数字',
          trigger: 'blur'
        }
      ],
      password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        {
          pattern: /^[a-z0-9]{5,8}$/,
          message: '请输入5~8位字母或数字',
          trigger: 'blur'
        }
      ]
    }
    const loginAction = (isRememberPwd: boolean) => {
      formEle.value?.validate((valid) => {
        if (valid) {
          if (isRememberPwd) {
            stroge.setCache('name', formVal.name)
            stroge.setCache('password', formVal.password)
            store.dispatch('login/loginAction', { ...formVal })
          } else {
            stroge.deleteCache('name')
            stroge.deleteCache('password')
          }
        }
      })
    }
    return {
      formVal,
      rules,
      loginAction,
      formEle
    }
  }
})
</script>
<style lang="less"></style>
