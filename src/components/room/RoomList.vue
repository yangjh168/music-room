<template>
  <div class="room-list">
    <div
      v-for="item in roomList"
      :key="item.id"
      class="list-item flex items-center cursor-pointer"
      @click="handleClick"
    >
      <div class="list-item__left">
        <div class="room-avatar"></div>
      </div>
      <div class="list-item__right flex-1">
        <div>房间{{ item.id }}</div>
        <div>这家伙很赖，什么都没留下~</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'

  const router = useRouter()
  const roomList = ref([
    {
      name: '房间1',
      id: '1',
    },
    {
      name: '房间2',
      id: '2',
    },
    {
      name: '房间3',
      id: '3',
    },
    {
      name: '房间4',
      id: '4',
    },
    {
      name: '房间5',
      id: '5',
    },
  ])

  function handleClick(item: any) {
    router.push({
      name: 'main-room-detail',
      params: {
        id: item.id,
      },
    })
  }
</script>
<style lang="less" scoped>
  .room-list {
    padding: 20px;
  }
  .list-item {
    padding: 10px 0;
    .list-item__left {
      padding-right: 10px;
      .room-avatar {
        width: 45px;
        height: 45px;
        border-radius: 50%;
        background-color: var(--color-bg-2);
      }
    }
    .list-item__right {
      flex: 1;
      overflow: hidden;
    }
  }
</style>
