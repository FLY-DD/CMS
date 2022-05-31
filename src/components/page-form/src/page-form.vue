<template>
  <div class="page-form">
    <new-form v-bind="formConfig" v-model="formData">
      <!-- 头部固定 -->
      <template #header>
        <h1 class="title text-center">高级检索</h1>
      </template>
      <!-- 底部固定 -->
      <template #bottom>
        <div class="btn-group">
          <el-button type="primary" class="el-icon-refresh">重置</el-button>
          <el-button type="primary" class="el-icon-search">确定</el-button>
        </div>
      </template>
    </new-form>
  </div>
</template>
<script lang="ts">
import NewForm from '@/base-ui/new-form/src/new-form.vue'
import { defineComponent, ref, watch } from 'vue'
export default defineComponent({
  name: 'page-form',
  components: {
    NewForm
  },
  props: {
    formConfig: {
      type: Object,
      require: true
    },
    modelValue: {
      type: Object,
      require: true
    }
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const formData = ref({
      ...props.modelValue
    })
    watch(
      formData,
      () => {
        emit('update:modelValue', formData.value)
      },
      { deep: true }
    )
    return {
      formData
    }
  }
})
</script>
<style lang="less">
.title {
  color: red;
  text-align: center;
  margin-bottom: 20px;
}
.btn-group {
  text-align: right;
  padding: 0 50px 20px 0;
}
</style>
