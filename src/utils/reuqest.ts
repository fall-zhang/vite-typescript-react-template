/**
 * request 网络请求工具
 * 更详细的 api 文档: https://github.com/umijs/umi-request
 */
import  { extend, RequestResponse } from "umi-request"
import { urlPrefix } from "../config"

// 使用前缀，配合本地代理
export const $http:RequestResponse = extend({
  prefix: `${urlPrefix}`,
})
