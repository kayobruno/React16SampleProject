import React from 'react'
import { Spin } from 'antd'

const Loading = ({
  loading,
  children,
  className = null,
  tip = null,
}) => (
  <Spin wrapperClassName={className} spinning={loading} tip={tip}>
    { children }
  </Spin>
)

export default Loading
