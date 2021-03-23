import React from 'react'
import { Layout, Menu} from 'antd';
import { Categories } from './Categories';
import {Distrito } from './Distrito';

import {
  AppstoreOutlined,
  BankOutlined,
  PieChartOutlined,
  EnvironmentOutlined,
  BarChartOutlined,
  GlobalOutlined,
} from '@ant-design/icons';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";

export const RouterPages = () => {

    const { Sider, Content } = Layout;
    return (

       <Router>
            <Layout style={{height:'100vh'}}>
            <Sider /* trigger={null}  collapsible collapsed={this.state.collapsed}*/ >
            <div className="logoSideBar">
                  <GlobalOutlined/>
                  <span> Iformes</span>
            </div>

                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>

                    <Menu.Item key="1" icon={ <AppstoreOutlined />}>
                         <Link to="/categorias"> Categorías</Link>
                    </Menu.Item>

                    <Menu.Item key="2" icon={<BankOutlined />}>
                         <Link to="/distrito"> Por distrito</Link>
                    </Menu.Item>

                    <Menu.Item key="3" icon={<PieChartOutlined />}>
                         <Link to="/"> Punto 3</Link>
                    </Menu.Item>


                    <Menu.Item key="4" icon={<EnvironmentOutlined />}>
                         <Link to="/"> Punto 4</Link>
                    </Menu.Item>

                    <Menu.Item key="5" icon={<BarChartOutlined />}>
                         <Link to="/"> Punto 5</Link>
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
                    }}
                >
                    <Switch>

                        <Route path="/categorias" component={ Categories }></Route>
                        <Route path="/distrito" component={ Distrito }></Route>

                        <Redirect to="/categorias"/>

                    </Switch>
                </Content>

            </Layout>
        </Layout>
       </Router>

    )
}
