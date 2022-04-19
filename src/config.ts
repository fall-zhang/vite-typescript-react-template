/**
 * 当前环境变量
 */
// 浏览器中使用的是 import.meta
// console.log(import.meta)
// console.log(process.env)
// export const whyEnv = process.env.NODE_ENV.VITE_REACT_URL || ''
/**
 * 接口地址
 * @description env 可为主要环境或自定义地址
 */
export const apiAddress = 'http://localhost:3030/'

/**
 * 开发环境下，代理前缀
 */
export const proxyApi = '/api'

/**
 * 接口前缀
 * 判断环境，是否需要使用前缀
 * 生产环境不需要代理，同时本地配置的代理在生产环境也是不能用的
 */
// console.log(process.env.NODE_ENV)
export const urlPrefix = process.env.NODE_ENV === 'development' ? proxyApi : ''
