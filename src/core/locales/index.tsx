
import React from "react"
import type { IntlShape } from "react-intl"
import { createIntl, IntlProvider } from "react-intl"
import ConfigProvider from "antd/lib/config-provider"
// 项目中的语言信息
import antdZhCN from "antd/lib/locale/zh_CN"
import antdEnUS from "antd/lib/locale/en_US"
import en_US from "./lang/en_US.json"
import zh_CN from "./lang/zh_CN.json"
import { SupportLanguage, SingleLanguageSetting } from "./language"

let globalInitLanguage: IntlShape
// 默认语言
const defaultLanguage = "zh-CN"

/**
 * 本地默认的语言信息
 */
const langSupport: Record<SupportLanguage, SingleLanguageSetting> = {
  "en-US": {
    locale: "en-US",
    messages: en_US,
    antd: antdEnUS,
    momentLocale: "",
  },
  "zh-CN": {
    locale: "zh-CN",
    messages: zh_CN,
    antd: antdZhCN,
    momentLocale: "zh-cn",
  },
}

// 本地未存储语言配置，默认添加一个
if (!localStorage.getItem("current__locale")) {
  localStorage.setItem("current__locale", defaultLanguage)
}

/**
 * 获取当前使用的语言信息
 */
const getLocaleInfo = (): SingleLanguageSetting => {
  const local = getLocale()
  return langSupport[local]
}

/**
 * 获取当前选择的语言
 */
function getLocale(): SupportLanguage {
  const result = localStorage.getItem("current__locale") || defaultLanguage
  return result as SupportLanguage
}
/**
 * 初始化当前语言
 * 通过 React 的 createIntl 初始化语言
 */

const initLanguage = () => {
  const currentLocale = getLocale()
  if (!globalInitLanguage) {
    globalInitLanguage = createIntl(langSupport[currentLocale])
  }
  return createIntl(langSupport[currentLocale])
}

/**
 * antd 的国际化，和当前项目的国际化
 */
const LocaleProvider: React.FC = (props) => {
  return (
    <IntlProvider locale={getLocale()}>
      <ConfigProvider locale={langSupport[getLocale()].antd}>
        {props.children}
      </ConfigProvider>
    </IntlProvider>
  )
}


/**
 * 切换语言
 */
const setLocale = (lang: SupportLanguage): void => {
  if (typeof window.localStorage !== "undefined") {
    window.localStorage.setItem("current__locale", lang || defaultLanguage)
  }
  window.location.reload()
}

interface MessageDescriptor {
  id?: string;
  description?: string | any;
  defaultMessage?: string;
}

/**
 * 语言转换
 * @param descriptor
 * @param values
 */
const formatMessage = (
  descriptor: MessageDescriptor,
  values?: Record<string, any>
): any => {
  if (!globalInitLanguage) {
    globalInitLanguage = initLanguage()
  }
  return globalInitLanguage.formatMessage(descriptor, values)
}

export {
  getLocaleInfo,
  setLocale,
  formatMessage,
  LocaleProvider
}
