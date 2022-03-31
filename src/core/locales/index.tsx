
import React from "react";
import type { IntlShape } from "react-intl";
import { createIntl, IntlProvider } from "react-intl";
import ConfigProvider from "antd/lib/config-provider";
import { Locale } from "antd/es/locale-provider";
// 项目中的语言信息
import antdZhCN from "antd/lib/locale/zh_CN";
import antdEnUS from "antd/lib/locale/en_US";
import en_US from "./lang/en_US.json";
import zh_CN from "./lang/zh_CN.json";

let gIntl: IntlShape
// 默认语言
const defaultLanguage = "zh-cn";
// 当前使用的语言
const currentLocalName = localStorage.getItem("current__locale") || defaultLanguage;

// 本地未存储语言配置，默认添加一个
if (!localStorage.getItem("current__locale")) {
  localStorage.setItem("current__locale", defaultLanguage);
}

/**
 * 本地默认的语言配置
 */
type SupportLanguage = 'en-US' | 'zh-CN'
type SingleLanguageSetting = {
  locale: SupportLanguage,
  messages: any,
  antd: Locale,
  momentLocale: string,
}
const localeInfo: Record<SupportLanguage, SingleLanguageSetting> = {
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

/**
 * 包裹了默认 locale 的 Provider
 * LocaleProvider 需要在App.tx使用，包装整个项目
 * @param props
 * @returns
 */
const LocaleProvider: React.FC = (props) => {
  return (
    <IntlProvider locale={getLocale()}>
      <ConfigProvider locale={localeInfo[getLocale()]?.antd}>
        {props.children}
      </ConfigProvider>
    </IntlProvider>
  );
}

/**
 * 获取当前的 intl 对象，可以在 node 中使用
 * @param locale 需要切换的语言类型
 * @param changeIntl 是否不使用 g_intl
 * @returns IntlShape
 */
const getIntl = (locale?: string, changeIntl?: boolean) => {
  // 如果全局的 g_intl 存在，且不是 setIntl 调用
  if (gIntl && !changeIntl && !locale) {
    return gIntl;
  }
  // 如果存在于 localeInfo 中
  if (locale && localeInfo[locale]) {
    return createIntl(localeInfo[locale]);
  }
  if (localeInfo[defaultLanguage])
    return createIntl(localeInfo[defaultLanguage]);
  if (localeInfo["zh-CN"]) return createIntl(localeInfo["zh-CN"]);
  // 抛错
  if (!locale || !!localeInfo[locale]) {
    throw new Error(
      "The current popular language does not exist, please check the locales folder!"
    );
  }
  // 如果还没有，返回一个空的
  return createIntl({
    locale: "zh-cn",
    messages: {},
  });
};

/**
 * 切换全局的 intl 的设置
 * @param locale 语言的 key
 */
const setIntl = (locale: string) => {
  gIntl = getIntl(locale, true);
};

/**
 * 获取当前选择的语言
 */
function getLocale(): string {
  return currentLocalName;
}

/**
 * 切换语言
 * @param lang 语言的 key
 * @returns string
 */
const setLocale = (lang: string) => {
  if (typeof window.localStorage !== "undefined") {
    window.localStorage.setItem("current__locale", lang || "");
  }
  window.location.reload();
};

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
) => {
  if (!gIntl) {
    setIntl(getLocale());
  }
  return gIntl.formatMessage(descriptor, values);
};

/**
 * 获取当前使用的语言信息
 * @returns
 */
const getLocaleInfo = () => {
  return localeInfo[defaultLanguage];
};

export { getLocaleInfo, setLocale, formatMessage };
