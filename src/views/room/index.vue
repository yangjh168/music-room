<template>
  <div class="room-layout__container flex justify-between">
    <div class="room-layout__left">
      <RoomList />
    </div>
    <div class="room-layout__right flex-1">
      <router-view></router-view>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import RoomList from '@/components/room/RoomList.vue'
</script>
<style lang="less" scoped>
  .room-layout__container {
    height: 100%;
    .room-layout__left {
      width: 250px;
    }
    .room-layout__right {
      background-color: var(--x-bg-color-2);
    }
  }
</style>
