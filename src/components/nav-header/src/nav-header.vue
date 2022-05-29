<template>
  <div class="nav-header">
    <div class="left">
      <i
        :class="isFold ? 'el-icon-s-unfold' : 'el-icon-s-fold'"
        class="fold"
        @click="foldChange"
      ></i>
      <span>面包屑</span>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  emits: ['foldchange'],
  name: 'nav-header',
  setup(props, { emit }) {
    const isFold = ref(false)
    function foldChange() {
      isFold.value = !isFold.value
      emit('foldchange', isFold.value)
    }
    return {
      foldChange,
      isFold
    }
  }
})
</script>
<style lang="less">
.nav-header {
  height: 100%;
  .left {
    height: 100%;
    display: flex;
    align-items: center;
    .fold {
      font-size: 26px;
      margin-right: 5px;
    }
  }
}
</style>
