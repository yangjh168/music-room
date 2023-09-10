<template>
  <div :class="['aside flex flex-column', { fullscreen: isFullscreen }]">
    <div class="aside-head">
      <div class="head-logo flex justify-center items-center">头像</div>
    </div>
    <Menus />
    <Action />
  </div>
</template>

<script lang="ts" setup>
  import Menus from './Menus.vue'
  import { useAppStore } from '@/store/app'
  import { computed } from 'vue'
  import Action from './Action.vue'

  const appStore = useAppStore()
  const isFullscreen = computed(() => appStore.isFullscreen)
</script>
<style lang="less" scoped>
  .aside {
    width: 75px;
    background-color: var(--x-bg-color-2);
    height: 100%;
    transition: 0.4s ease;
    transition-property: background-color;
    -webkit-app-region: drag;
    -webkit-user-select: none;
    &.fullscreen {
      -webkit-app-region: no-drag;
      .logo {
        display: none;
      }
    }
    .aside-head {
      padding: 20px 0;
      .head-logo {
        background-color: var(--x-bg-color-1);
        width: 45px;
        height: 45px;
        border-radius: var(--x-radius);
        margin: 0 auto;
      }
    }
  }
</style>
