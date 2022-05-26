<template>
  <div class="login">
    <login-panel />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import LoginPanel from './cpns/login-panel.vue'
export default defineComponent({
  name: 'loginView',
  components: {
    LoginPanel
  }
})
</script>
<style lang="less">
.login {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url('@/assets/img/background.jpg') center center no-repeat;
  background-size: 100%;
}
</style>
