import React from 'react';
import { Layout, layout } from 'antd';

const { Header, Contest, Sider } = Layout;

function App() {
  return (
    <Layout>
      <Header>
        {'Header'}
      </Header>
      <Layout>
        <Sider width={300} className="site-layout-background">
          {'Slider'}
        </Sider>
        <Layout style={{ padding: '24px' }}>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              height: 800,
              overflow: "auto"
            }}
          >
            {'Home'}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default App;