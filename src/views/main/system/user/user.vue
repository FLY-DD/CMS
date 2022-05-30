<template>
  <div class="user">
    <div style="min-height: 200px; background-color: #fff">
      <!-- 使用v-bind绑定多个属性时使用名称需与props内的名称相同 -->
      <new-form v-bind="formConfig" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NewForm from '@/base-ui/new-form'
import { formConfig } from './config/search.config'
export default defineComponent({
  name: 'user',
  components: {
    NewForm
  },
  setup() {
    return {
      formConfig
    }
  }
})
</script>

<style scoped></style>
