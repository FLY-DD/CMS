<template>
  <div class="new-form">
    <!--
    1 搭好结构
    2 调整传入属性
    3 传入公共样式
    4 调整传递的值
     -->
    <div>
      <slot name="header"></slot>
    </div>
    <el-form :label-width="labelWidth" :model="formData">
      <el-row>
        <template v-for="(item, index) in formItemMsg" :key="index">
          <el-col :span="8" :style="paddingStyle" v-bind="colLayout">
            <el-form-item
              v-if="item.type === 'input' || item.type === 'password'"
              :label="item.label"
              :rules="item.rule"
            >
              <el-input
                v-bind="item.otherOptions"
                v-model="formData[item.val]"
              />
            </el-form-item>
            <el-form-item
              v-else-if="item.type === 'select'"
              :label="item.label"
            >
              <el-select
                style="width: 100%"
                v-bind="item.otherOptions"
                v-model="formData[item.val]"
                ><el-option
                  v-for="opt in item.options"
                  :key="opt.label"
                  :value="opt.value"
                  >{{ opt.label }}</el-option
                ></el-select
              >
            </el-form-item>
            <el-form-item
              v-else-if="item.type === 'datapicker'"
              :label="item.label"
            >
              <el-date-picker
                v-bind="item.otherOptions"
                style="width: 100%"
                v-model="formData[item.val]"
              />
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <div>
      <slot name="bottom"></slot>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, ref, watch } from 'vue'
import type { iFormOption } from '../type'
export default defineComponent({
  name: 'new-form',
  props: {
    formItemMsg: {
      type: Array as PropType<iFormOption[]>,
      default: () => {
        return []
      }
    },
    labelWidth: {
      type: String,
      default: '100px'
    },
    paddingStyle: {
      type: Object,
      default: () => {
        return {
          padding: '10px 40px'
        }
      }
    },
    colLayout: {
      type: Object,
      default: () => {
        return {
          xl: 6,
          lg: 8,
          md: 12,
          sm: 24,
          xs: 24
        }
      }
    },
    modelValue: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ['update:modelValue'],
  setup(prop, { emit }) {
    //监听formData的值 发生变化后修改父组件传过来的值
    const formData = ref({ ...prop.modelValue })

    watch(
      formData,
      (val) => {
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
.new-form {
  padding-top: 20px;
}
</style>
