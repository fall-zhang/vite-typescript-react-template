import React from 'react'

const title = {
  require: false,
  type: String,
  default: ''
}
const icon = {
  require: false,
  type: String,
  default: ''
}

export const FlexCard = () => {
  return <div className="content-layout">
    <div className="title">
      <i className={['', icon]}></i>
      <section style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingLeft: '0px', width: '100%' }}>
        <slot name="title">
          <div className="title-text">{{ title }}</div>
        </slot>
        <slot name="header-right">
        </slot>
      </section>
    </div>
    <slot></slot>
  </div>
}
