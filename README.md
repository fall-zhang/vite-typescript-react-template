# Vite + React + TypeScript Template

## 启动项目

- 依赖安装：`yarn` or `npm i`
- 本地启动项目：`yarn` dev or `npm dev`
- 登录务必运行：`yarn mock`

## 技术栈

- 模版：使用的是 vite 的官方模版 react 17+ typescript 4+
- css: 项目中使用 less，并且 less 文件的命名都要以 module.less 结尾，以确保样式不会影响到其它组件
- git 代码提交校验使用 husky（正在施工中）
- eslint 分别约束 `.ts` 约束代码风格。
- stylelint 约束 `css` 的样式的书写顺序，避免在样式编写中出现的一些错误。

- gitHooks Git Hooks 就是在 Git 执行特定事件（如 commit、push、receive 等）时触发运行的脚本，类似于“钩子函数”，没有设置可执行的钩子将被忽略。
  在项目的 .git/hooks 目录中，有一些 .sample 结尾的钩子示例脚本，如果想启用对应的钩子，只需手动删除后缀，即可。（删除某一个 hook 的后缀 .sample 即可启用该 hook 脚本，默认是不启用的。）
- 在代码提交之前，进行代码规则检查能够确保进入 git 库的代码都是符合代码规则的。但是整个项目上运行 lint 速度会很慢，lint-staged 能够让 lint 只检测暂存区的文件

## 项目目录划分

- asset 资源目录，会存放 icon、svg、image 等资源。
- components 指的是组件，复用性较强，比如说是表单生成、图片上传等
- core 一些核心内容，包括 i18n 进行国际化、用户登录、主题切换，因为该文件夹中的内容会作用于全局，所以使用 core
- hooks 自定义 hooks
- layout 是布局所在的文件夹，目前包括三个地方的布局：headers、footers、container，引入不同的布局进行组合
- pages 页面，主要编写的内容
- router 路由，界面路由的实现
- service 定义接口
- utils 工具类，不会掺杂任何逻辑，只是为了方便调用的工具文件
- App.tsx 是用来向已经代理的端口上，添加合适的内容

## 跨域

- 处理跨域的配置
  ```
  server: {
  port: 3001,
  proxy: {
   "/XXX": {
     target: "https://XXX",
     changeOrigin: true,
     cookieDomainRewrite: "",
     secure: false,
     },
   },
  },
  ```

## json-server mock 数据

- 然后运行命令 yarn mock 就可以在控制台成功访问到我们在 db.json 中配置的接口数据了

## 请求封装

注意事项：process.env 要替换成 import.meta.env

- 全局的公共配置文件都会放在根目录下的 config.ts 文件中，目前项目刚开始只有少量配置信息

```ts
/**
 * 当前环境变量
 */
// process.env 在vite中不能用
// export const whyEnv = import.meta.env.VITE_REACT_URL || "";
/**
 * 接口地址
 * @description env 可为主要环境或自定义地址
 */
export const apiAddress = "http://localhost:3008/";

/**
 * 开发代理前缀
 */
export const proxyApi = "/api";

/**
 * 接口前缀
 * 判断环境，是否需要使用前缀
 * 生产环境不需要代理，同时本地配置的代理在生产环境也是不能用的
 */
export const urlPrefix = process.env.NODE_ENV === "development" ? proxyApi : "";
```

- 项目中用的 umi-request 这个库，目前我给配置的很少的东西，错误处理，中间件处理等等我的给删减了，刚开始不搞这么复杂

```tsx
// utils/request.ts

/**
 * request 网络请求工具
 * 更详细的 api 文档: https://github.com/umijs/umi-request
 */
import umiRequest, { extend } from "umi-request";
import { urlPrefix } from "../config";

// 使用前缀，配合本地代理
export const whyRequest = extend({
  prefix: `${urlPrefix}`,
});

export default umiRequest;
```

- 定义接口:要提前和后段沟通好入参数，出参数的格式，结合 ts 的类型提示，在其他地方调用的时候就可以直接看到接口定义的属性了，非常方便

```
/**
* 登录请求数据类型
*/
export interface ILogin {
  userName: string;
  pwd: string;
}

/**
* 返回数据类型
* 要提前和后段定义好类型，等接口写完直接替换地址就好了
*
*/
export interface ILoginData {
code: number;
message: string;
token: string;
}

/**
* 登录接口
* @param params
  */
  export const loginApp = (params: ILogin): Promise<ILoginData> => {
  return whyRequest.get("/login", params);
  };
```

- 使用就很简单，直接调用，之后我们会配合，ahooks 中的 useRequest()使用

```
 loginApp({ userName: "why", pwd: "123" }).then((res) => {
     if (res.code === 200) {
       history.push("/home");
     } else {
       message.error("用户名或密码错误！");
     }
   });
```

## 国际化配置

- 使用 react-intl 实现国际化，同时兼容 antd

## 路由

- [react 路由看这个](https://reactrouter.com/web/example/url-params)

- react 路由系统和 vue 大有不同，没有路由导航前钩子，配置登录鉴权就要自己配置下，结合 token,
- 我们项目中路由的目的就是支持动态路由，路由权限，配置抽离，目前就是最简单的

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c3559713803e40f8bc317f2346bf5fcd~tplv-k3u1fbpfcp-watermark.image)

## 公共组件

- 组件 1：实现表单 blah blah

### 如何使用 iconfont 的字体图标

- 封装 icon，主要配合 antd createFromIconfontCN 直接引入 iconfont 中的字体图标，非常方便
- 如下图所示直接登录到 iconfont 网站生成对应 js 文件，在项目中直接用就好，很简单

- classNames 的使用 [npm 介绍](https://www.npmjs.com/package/classnames)

```
  // 简单来说
  // 这里可以根据各属性动态添加，如果属性值为true则为其添加该类名，
  // 如果值为false，则不添加。这样达到了动态添加class的目的
   <FontIcon
      className={classNames(
        {
          [styles.large]: size === "large", // 返回为true使用css .large,下方同理
          [styles.normal]: size === "normal",
          [styles.small]: size === "small",
          [styles.disabled]: disabled,
        },
        className
      )}
      {...restProps}
    />
```

### 封装 icon 公共组件

```
  // IconType继承React.HTMLAttributes的属性，然后IconType,就拥有了其可被外界访问的属性
  export interface IconType extends React.HTMLAttributes<any> {
  // type 必有属性，如果使用的时候没有静态检查是，会提示错误，类型不匹配，使用ts的好处，静态类型检查非常nice
  // 报错如下：TS2741: Property 'type' is missing in type '{}' but required in type 'IconType'.  index.tsx(7, 3): 'type' is declared here.
  type: string;
  // 图标尺寸，默认 normal
  size?: "small" | "normal" | "large" | null; // 可选属性，size后面加上？
  // 是否禁用
  disabled?: boolean;
}
// createFromIconfontCN 返回一个组件
const FontIcon = createFromIconfontCN({
  // 请给新图标一个合适的驼峰命名，并保证单词正确
  scriptUrl: "//at.alicdn.com/t/font_955172_ymhvgyhjk.js",
});

const Icon: React.FC<IconType> = ({
  className,
  size = "normal",
  disabled,
  ...restProps
}) => {
  // 我们使用classNames 这个插件动态渲染icon的状态，size,disabled等等
  return (
    <FontIcon
      className={classNames(
        {
          [styles.large]: size === "large",
          [styles.normal]: size === "normal",
          [styles.small]: size === "small",
          [styles.disabled]: disabled,
        },
        className
      )}
      {...restProps}
    />
  );
};
// 思考题：这个地方需要用，react.memo吗？
export default React.memo(Icon);

```

- 使用（截图中有 iconSelect 公共组件，此篇不做讲解）

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2791d90704854081b8428157c6f6a76d~tplv-k3u1fbpfcp-watermark.image)

## 权限的实现

### 权限的实现

- 路由权限
  - 路由权限在 `core/authorized` 中的 router，目前实现
- 组件权限
  - 组件权限通过嵌套组件实现

### 应用场景

- 角色权限
  - 暂时没有角色的不同权限，后端传入不同的权限组成的数组，前端去解析这些数组，赋予不同的权限
- 权限配置
  - 和后端对接接口，把所权限进行分组，请求权限，进行缓存，然后从缓存中读取当前人物的权限

## 参考

|作者（文章名称）|链接|
|前端要努力 |https://juejin.cn/user/1943592288395479|
