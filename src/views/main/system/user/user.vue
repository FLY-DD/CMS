<template>
  <div class="user">
    <div style="min-height: 200px; background-color: #fff">
      <!-- 使用v-bind绑定多个属性时使用名称需与props内的名称相同 -->
      <page-form :formConfig="formConfig" v-model="formData"></page-form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import PageForm from '@/components/page-form/'
import { formConfig } from './config/search.config'
export default defineComponent({
  name: 'user',
  components: {
    PageForm
  },
  setup() {
    const formData = ref({
      id: '',
      password: '',
      sport: '',
      date: ''
    })
    return {
      formConfig,
      formData
    }
  }
})
</script>

<style scoped></style>
