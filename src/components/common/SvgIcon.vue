<template>
  <span :title="title" :class="['icon-svg', props.className]" :style="innerStyle">
    <svg aria-hidden="true" width="1em" height="1em">
      <use :xlink:href="symbolId" :color="color" :fill="fill" />
    </svg>
  </span>
</template>

<script lang="ts" setup>
  import { computed } from 'vue'
  import { isNumeric } from '@/utils/validate'
  interface Props {
    name: string
    color?: string
    fill?: string
    title?: string
    className?: string
    size?: number | string
  }

  const props = withDefaults(defineProps<Props>(), {
    color: 'currentColor',
    fill: 'currentColor',
    title: '',
    className: undefined,
    size: undefined,
  })

  const symbolId = computed(() => '#icon-' + props.name)

  const innerStyle = computed(() => {
    if (props.size) {
      let size = props.size
      if (typeof size === 'string') size = size.replace(/px/g, '')
      return {
        fontSize: isNumeric(size) ? size + 'px' : size,
      }
    } else {
      return undefined
    }
  })
</script>
<style lang="less" scoped>
  .icon-svg {
    width: 1em;
    height: 1em;
  }
  svg:focus {
    outline: none;
  }
</style>
