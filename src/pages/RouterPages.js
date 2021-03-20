import React from 'react'

import { Layout, Menu } from 'antd';
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";
import { Categories } from './Categories';


export const RouterPages = () => {

    const { Sider, Content } = Layout;
    return (
       <Router>
            <Layout style={{height:'100vh'}}>
            <Sider /* trigger={null}  collapsible collapsed={this.state.collapsed}*/ >
            <div className="logo" />

                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1" icon={<UserOutlined />}>
                         <Link to="/categorias"> Categorias</Link> 
                    </Menu.Item>
                    <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                    nav 2
                    </Menu.Item>
                    <Menu.Item key="3" icon={<UploadOutlined />}>
                    nav 3
                    </Menu.Item>
                </Menu>

            </Sider>

            <Layout className="site-layout">

                <Content
                    className="site-layout-background"
                    style={{
                    margin: '24px 16px',
                    padding: 24,
                    minHeight: 280,
                    }}>
                    <Switch>

                        <Route path="/categorias" component={ Categories }></Route>
             <Redirect to="/categorias"/>
                    </Switch>
                </Content>

            </Layout>
        </Layout>
       </Router>
    )
}
