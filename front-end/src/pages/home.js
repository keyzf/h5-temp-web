import React from 'react'
import { Layout, Menu, Breadcrumb } from 'antd'
// import styles from './home.module.less'

const { Header, Content, Sider } = Layout

class Home extends React.Component {
  render() {
    return (
      <Layout>
        <Header />
        <Layout>
          <Sider width={200}>
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            >
              <Menu.Item key="1">导航栏一</Menu.Item>
              <Menu.Item key="2">导航栏二</Menu.Item>
              <Menu.Item key="3">导航栏三</Menu.Item>
              <Menu.Item key="4">导航栏四</Menu.Item>
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280
              }}
            >
              Content
            </Content>
          </Layout>
        </Layout>
      </Layout>
    )
  }
}

export default Home
