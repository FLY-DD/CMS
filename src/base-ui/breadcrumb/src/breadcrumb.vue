<template>
  <div class="breadcrumb">
    <el-breadcrumb separator="/">
      <template v-for="item in breadcrumbData" :key="item.name"
        ><el-breadcrumb-item :to="{ path: '/' }">{{
          item.name
        }}</el-breadcrumb-item></template
      >
    </el-breadcrumb>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
import type { iBreadcrumbData } from './types/'
//为何逻辑不在此文件中书写  为了保持公共组件的纯净
export default defineComponent({
  name: 'breadcrumb',
  props: {
    breadcrumbData: {
      type: Array as PropType<iBreadcrumbData[]>,
      default: () => []
    }
  },
  setup() {}
})
</script>
<style lang="less"></style>
