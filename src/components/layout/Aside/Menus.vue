<template>
  <div class="menus">
    <ul class="menu-list" role="toolbar">
      <li v-for="item in menus" :key="item.to" class="navbar-item" role="presentation">
        <router-link
          :class="['navbar-item__link', { active: $route.meta.name == item.name }]"
          role="tab"
          :aria-selected="$route.meta.name == item.name"
          :to="{ name: item.to }"
          :aria-label="item.tips"
        >
          <div class="icon">
            <svg-icon name="vite" size="24" />
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
  import SvgIcon from '@/components/common/SvgIcon.vue'
  import { computed } from 'vue'

  const menus = computed(() => {
    return [
      {
        to: 'main-room',
        tips: '主页',
        icon: '#icon-search-2',
        iconSize: '0 0 425.2 425.2',
        name: 'Search',
        enable: true,
      },
      {
        to: 'main-setting',
        tips: '设置',
        icon: '#icon-album',
        iconSize: '0 0 425.2 425.2',
        name: 'SongList',
        enable: true,
      },
    ].filter((m) => m.enable)
  })
</script>

<style lang="less" scoped>
  .menus {
    flex: 1;
    .menu-list {
      -webkit-app-region: no-drag;
      &:last-child {
        margin-bottom: 0;
      }
      .navbar-item {
        position: relative;
        &:before {
          content: '';
          display: block;
          width: 100%;
          padding-bottom: 84%;
        }
      }
    }
  }
  .navbar-item__link {
    position: absolute;
    left: 0%;
    top: 0%;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    transition: 0.4s ease;
    transition-property: background-color, opacity;
    color: var(--color-nav-font);
    cursor: pointer;
    font-size: 11.5px;
    text-align: center;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    &:before {
      display: block;
      position: absolute;
      content: '';
      left: 0;
      top: 0;
      width: 3px;
      height: 100%;
      background-color: var(--color-primary);
      border-radius: 4px;
      transform: translateX(-100%);
      transition: transform 0.4s ease;
    }
    &.active {
      background-color: var(--color-primary);
      &:before {
        transform: translateX(0);
      }
      &:hover {
        background-color: var(--color-primary);
      }
    }
    &:hover {
      color: var(--color-primary);
      &:not(.active) {
        opacity: 0.8;
        background-color: var(--color-primary-light-hover);
      }
    }
    &:active:not(.active) {
      opacity: 0.6;
      background-color: var(--color-primary-light-hover);
    }
  }
</style>
