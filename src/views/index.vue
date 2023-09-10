<template>
  <div class="hua-layout-container flex justify-between">
    <div class="hua-layout__left">
      <Aside />
    </div>
    <div class="hua-layout__right flex-1">
      <router-view></router-view>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import Aside from '@/components/layout/Aside/Index.vue'
</script>
<style lang="less" scoped>
  .hua-layout-container {
    height: 100%;
    // .hua-layout__left {
    // }
    // .hua-layout__right {
    // }
  }
</style>
