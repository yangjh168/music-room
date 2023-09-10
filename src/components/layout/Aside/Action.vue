<template>
  <div class="aside-actions flex flex-column">
    <div class="action-item flex flex-center">
      <icon-question-circle class="cursor-pointer" :size="24" />
    </div>
    <div class="action-item flex flex-center">
      <icon-export class="cursor-pointer" :size="24" />
    </div>
  </div>
</template>
<script lang="ts" setup>
  import { IconQuestionCircle, IconExport } from '@arco-design/web-vue/es/icon'
</script>
<style lang="less" scoped>
  .aside-actions {
    padding: 20px 0;
    .action-item {
      font-size: 14px;
      color: var(--x-text-color-2);
      & + .action-item {
        margin-top: 20px;
      }
    }
  }
</style>
