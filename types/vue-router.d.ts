export {}

declare module 'vue-router' {
  interface RouteMeta extends Record<string, unknown> {
    title?: string //document标题
    isNeedLogin?: boolean //是否需要登录
    isNeedUserInfo?: boolean //是否需要用户信息
  }
}
