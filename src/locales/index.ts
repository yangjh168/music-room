import { useAppStore } from '@/store/app'
import { nextTick } from 'vue'
import { createI18n } from 'vue-i18n'
import { LocaleType } from './types'

export const SUPPORT_LOCALES = ['en', 'zh']

export let i18n: any

export async function createI18nOptions() {
  const appStore = useAppStore()
  let locale = appStore.lang as LocaleType
  if (!SUPPORT_LOCALES.includes(locale)) {
    locale = 'en'
  }
  const defaultLocal = await import(`./lang/${locale}.ts`)
  const messages = defaultLocal.default ?? {}
  return {
    legacy: false, // 使用 Composition API 模式，则需要将其设置为false
    locale: locale, // 默认zh-CN翻译
    sync: true, //是否将根级别语言环境与组件本地化语言环境同步。
    messages: { [locale]: messages },
    fallbackLocale: 'en', // 预设的语言环境 - 没有对应翻译时为英文
    globalInjection: true, //全局生效$t
  }
}

export async function setupI18n() {
  const I18nOptions = await createI18nOptions()
  i18n = createI18n(I18nOptions)
  setI18nLanguage(i18n, I18nOptions.locale)
  return i18n
}

export function setI18nLanguage(i18n: any, locale: LocaleType) {
  if (i18n.mode === 'legacy') {
    i18n.global.locale = locale
  } else {
    i18n.global.locale.value = locale
  }
  /**
   * 注意:
   * 如果你需要指定头文件的语言设置，比如' fetch ' API，在这里设置。
   * 下面是axios的示例。
   * axios.defaults.headers.common['Accept-Language'] = locale
   */
  // setGlobelHeader('Accept-Language', locale || 'zh')
  document.querySelector('html')?.setAttribute('lang', locale)
}

export async function loadLocaleMessages(i18n: any, locale: LocaleType) {
  // 使用动态导入加载区域设置消息
  const defaultLocal = await import(`./lang/${locale}.ts`)
  const messages = defaultLocal.default ?? {}
  // 设置locale和locale消息
  i18n.global.setLocaleMessage(locale, messages.default)
  return nextTick()
}

// 切换语言
export async function changeLocale(locale: LocaleType) {
  if (!SUPPORT_LOCALES.includes(locale)) return
  // 加载语言环境消息
  if (!i18n.global.availableLocales.includes(locale)) {
    await loadLocaleMessages(i18n, locale)
  }
  // 设置i18n语言
  setI18nLanguage(i18n, locale)
  return true
}
