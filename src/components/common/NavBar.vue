<template>
  <div :class="['x-nav-bar', { 'x-nav-bar__sticky': props.sticky }]" :style="navbarStyle">
    <div
      v-if="props.fixed && props.placeholder"
      :class="['x-nav-bar__placeholder', { 'x-safe-area-top': props.safeAreaInsetTop }]"
    ></div>
    <div
      :class="[
        'x-nav-bar__box',
        {
          'x-nav-bar__fixed': props.fixed,
          'x-safe-area-top': props.safeAreaInsetTop,
          'van-hairline--bottom': props.border,
        },
      ]"
      :style="navbarBoxStyle"
    >
      <div :class="'x-nav-bar__content'">
        <slot
          v-if="props.leftArrow || props.leftText || $slots.left || $slots.leftIcon"
          name="left"
        >
          <div class="x-nav-bar__left" @click="onClickLeft">
            <slot name="left-icon">
              <icon-left v-if="props.leftArrow" class="x-nav-bar__arrow" />
            </slot>
            <span v-if="props.leftText" class="x-nav-bar__text">{{ props.leftText }}</span>
          </div>
        </slot>
        <slot>
          <div class="x-nav-bar__title x-ellipsis-1">{{ props.title }}</div>
        </slot>
        <slot v-if="props.rightText || $slots.right || $slots.rightIcon" name="right">
          <div class="x-nav-bar__right" @click="emits('right')">
            <slot name="right-icon"></slot>
            <span v-if="props.rightText" class="x-nav-bar__text">{{ props.rightText }}</span>
          </div>
        </slot>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import { computed, CSSProperties } from 'vue'
  import { IconLeft } from '@arco-design/web-vue/es/icon'

  interface IProps {
    title?: string //标题
    leftText?: string //左侧文案
    rightText?: string //右侧文案
    leftArrow?: boolean //是否显示左侧箭头
    fixed?: boolean //是否固定在顶部
    sticky?: boolean //是否固定在顶部
    top?: number //当fixed=true时的top的值
    placeholder?: boolean //固定在顶部时，是否在标签位置生成一个等高的占位元素
    zIndex?: number //导航栏 z-index
    safeAreaInsetTop?: boolean //是否开启顶部安全区适配
    border?: boolean //是否底部边框
    height?: number //高度
  }

  const props = withDefaults(defineProps<IProps>(), {
    title: '',
    leftText: '',
    rightText: '',
    leftArrow: true,
    fixed: false,
    sticky: false,
    top: undefined,
    placeholder: false,
    zIndex: undefined,
    safeAreaInsetTop: true,
    border: false,
    height: 56, //高度
  })

  const navbarStyle = computed<CSSProperties>(() => {
    const styles: CSSProperties = {
      '--x-nav-bar-height': `${props.height}px`,
    }
    if (props.zIndex) styles['--x-nav-bar-z-index'] = props.zIndex
    return styles
  })

  const navbarBoxStyle = computed<CSSProperties>(() => {
    const styles: CSSProperties = {}
    if (props.top !== undefined && props.fixed) styles['top'] = props.top
    return styles
  })

  const emits = defineEmits(['back', 'left', 'right'])

  function onClickLeft() {
    emits('back')
    emits('left')
  }
</script>
<style lang="less" scoped>
  .x-nav-bar {
    --x-nav-bar-horizontal-padding: 14px;
    --x-nav-bar-height: 44px;
    --x-nav-bar-title-font-size: 17px;
    --x-nav-bar-title-font-bold: 500;
    --x-nav-bar-font-size: 14px;
    --x-nav-bar-arrow-size: 22px;
    --x-nav-bar-background: var(--x-bg-color-1);
    --x-nav-bar-line-height: 24px;
    --x-nav-bar-z-index: 1;
    .x-nav-bar__placeholder {
      height: var(--x-nav-bar-height);
      box-sizing: content-box;
    }
    .x-nav-bar__box {
      position: relative;
      text-align: center;
      user-select: none;
      z-index: var(--x-nav-bar-z-index);
      line-height: var(--x-nav-bar-line-height);
      background: var(--x-nav-bar-background);
    }
    .x-nav-bar__content {
      position: relative;
      display: flex;
      align-items: center;
      color: var(--x-text-color-1);
      height: var(--x-nav-bar-height);
      .x-nav-bar__title {
        max-width: 60%;
        margin: 0 auto;
        color: var(--x-nav-bar-title-text-color);
        font-weight: var(--x-nav-bar-title-font-bold);
        font-size: var(--x-nav-bar-title-font-size);
      }
      .x-nav-bar__left,
      .x-nav-bar__right {
        position: absolute;
        top: 0;
        bottom: 0;
        display: flex;
        align-items: center;
        padding: 0 var(--x-nav-bar-horizontal-padding);
        font-size: var(--x-nav-bar-font-size);
      }
      .x-nav-bar__left {
        left: 0;
        .x-nav-bar__arrow {
          font-size: var(--x-nav-bar-arrow-size);
          cursor: pointer;
        }
      }
      .x-nav-bar__right {
        right: 0;
      }
    }
    .x-nav-bar__fixed {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
    }
  }
  .x-nav-bar__sticky {
    position: sticky;
    top: 0;
  }
  .x-safe-area-top {
    padding-top: constant(safe-area-inset-top);
    padding-top: env(safe-area-inset-top);
  }
</style>
