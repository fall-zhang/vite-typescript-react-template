import React, { LazyExoticComponent, ComponentType } from 'react'
// 路由meta
export interface RouteMeta {
  title: string
  hidden?: boolean
  auth?: string
}
// 单条路由
export interface RouteParam {
  exact?: boolean
  path: string
  component: LazyExoticComponent<ComponentType<unknown>>|React.FC
  meta: RouteMeta
  children?:RouteParam[]
}