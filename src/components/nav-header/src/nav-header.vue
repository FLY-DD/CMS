<template>
  <div class="nav-header flex">
    <div class="left flex">
      <i
        :class="isFold ? 'el-icon-s-unfold' : 'el-icon-s-fold'"
        class="fold"
        @click="foldChange"
      ></i>
      <breadcrumb :breadcrumbData="setBreadcrumbVal" />
    </div>
    <div class="right"></div>
    <nav-info />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import NavInfo from './nav-info.vue'
import Breadcrumb from '@/base-ui/breadcrumb'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { getBreadcrumbData } from '@/utils/mapMenuToRoutes'
export default defineComponent({
  emits: ['foldchange'],
  name: 'nav-header',
  components: {
    NavInfo,
    Breadcrumb
  },
  setup(props, { emit }) {
    const store = useStore()
    const isFold = ref(false)
    const setBreadcrumbVal = computed(() => {
      const userMenu = store.state.login.userMenu
      const route = useRoute()
      const path = route.path
      return getBreadcrumbData(userMenu, path)
    })
    function foldChange() {
      isFold.value = !isFold.value
      emit('foldchange', isFold.value)
    }

    return {
      foldChange,
      isFold,
      setBreadcrumbVal
    }
  }
})
</script>
<style lang="less">
.nav-header {
  height: 100%;
  justify-content: space-between;

  .left {
    height: 100%;
    .fold {
      font-size: 26px;
      margin-right: 5px;
    }
  }
}

.flex {
  display: flex;
  align-items: center;
}
</style>
