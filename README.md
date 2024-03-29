# Vite + React + TypeScript Template

> 完美不在于无以附加，而在于无可删减

## 启动项目

请确保 node 版本至少为 18，Vite 或者一些其它的依赖对 node 版本有要求

- 依赖安装：`yarn` or `npm i` or `pnpm i`
- 本地启动项目：`yarn dev` or `npm dev`

## 采用技术

- 模版：使用的是 vite 的官方模版
- React 18+、typescript 5+、react-router 6+
- css: 项目中使用 less，并且如果是组件的 less 文件，的命名以 `module.less` 结尾，确保样式不会影响到其它组件
- eslint 分别约束 `.ts` 约束代码风格。
- stylelint 约束 `css` 的样式的书写顺序，避免在样式编写中出现的一些错误。
- husky: git 代码提交校验。
- Git Hooks 就是在 Git 执行特定事件（如 commit、push、receive 等）时触发运行的脚本，类似于“钩子函数”，没有设置可执行的钩子将被忽略。
  在项目的 `.git/hooks` 目录中，有一些 `.sample` 结尾的钩子示例脚本，如果想启用对应的钩子，只需手动删除后缀，即可。（删除某一个 hook 的后缀 `.sample` 即可启用该 hook 脚本，默认是不启用的。）
- 在代码提交之前，进行代码规则检查能够确保进入 git 库的代码都是符合代码规则的。但是整个项目上运行 lint 速度会很慢，lint-staged 能够让 lint 只检测暂存区的文件
- 可以在 lint-stage 中添加 `"*.less": "stylelint --fix less"` 以修复和检查 less 文件

## 项目目录划分

- asset 资源目录，会存放 icon、svg、image 等资源。
- components 组件目录，复用性较强，比如说是定制表单、图片上传、对工具的集成。
- core 一些核心内容，包括 i18n 进行国际化、用户登录、主题切换，因为该文件夹中的内容会作用于全局，所以使用 core
- hooks 自定义 hooks
- layout 是布局所在的文件夹，目前包括三个地方的布局：headers、footers、container，引入不同的布局进行组合
- pages 页面，路由主要控制的内容，也是开发最常用的目录
- router 路由，界面路由的实现
- utils 工具类，不会掺杂任何逻辑，只是为了方便调用的工具文件

## 便捷特性

- 将目录层级作为单个路由（注：现在路由可以采用 vite 中的 `import.meta.glob` 进行自动生成）
- axios 假数据
- 实现项目的懒加载，打包内容优化
- 把路由切换为 JSON 配置路由
- 把路由内容设置为动态导入导出

## 开发进度

- [ ] 实现加载完成页面之后，注册 `service worker` 从服务端拉取数据
- [ ] 自定义表单组件编写
- [ ] 登录界面太丑了，换一个好看的
- [ ] 添加新的路由执行方式

### 应用场景

- 角色权限
  - 暂时没有角色的不同权限，后端传入不同的权限组成的数组，前端去解析这些数组，赋予不同的权限
- 权限配置
  - 和后端对接接口，把所权限进行分组，请求权限，进行缓存，然后从缓存中读取当前人物的权限

## 参考

| 作者       | 文章名称                                                                  |
| ---------- | ------------------------------------------------------------------------- |
| 前端要努力 | [vite + react + ts 手摸手做项目](https://juejin.cn/user/1943592288395479) |
