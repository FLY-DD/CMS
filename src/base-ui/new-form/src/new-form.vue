<template>
  <div class="new-form">
    <!--
    1 搭好结构
    2 调整传入属性
    3 传入公共样式
    4 调整传递的值
     -->
    <el-form :label-width="labelWidth">
      <el-row>
        <template v-for="(item, index) in formItemMsg" :key="index">
          <el-col :span="8" :style="paddingStyle" v-bind="colLayout">
            <el-form-item
              v-if="item.type === 'input' || item.type === 'password'"
              :label="item.label"
              :rules="item.rule"
            >
              <el-input v-bind="item.otherOptions" />
            </el-form-item>
            <el-form-item
              v-else-if="item.type === 'select'"
              :label="item.label"
            >
              <el-select style="width: 100%" v-bind="item.otherOptions"
                ><el-option v-for="opt in item.options" :key="opt.label">{{
                  opt.label
                }}</el-option></el-select
              >
            </el-form-item>
            <el-form-item
              v-else-if="item.type === 'datapicker'"
              :label="item.label"
            >
              <el-date-picker v-bind="item.otherOptions" style="width: 100%" />
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
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
    }
  }
})
</script>
<style lang="less">
.new-form {
  padding-top: 20px;
}
</style>
