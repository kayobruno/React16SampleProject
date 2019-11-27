import React from 'react'
import { Layout } from 'antd'

const { Content } = Layout

const Container = ({ children }) => (
  <Layout>
    <Content style={{ margin: '24px 16px', overflow: 'initial' }}>
      <div style={{ padding: 24, background: '#fff' }}>
        { children }
      </div>
    </Content>
  </Layout>
)

export default Container
