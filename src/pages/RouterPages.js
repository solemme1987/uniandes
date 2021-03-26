import React from 'react'
import { Layout, Menu} from 'antd';
import { Categories } from './Categories';
import {Distrito } from './Distrito';
import { Charts } from './Charts';

import {
  AppstoreOutlined,
  BankOutlined,
  PieChartOutlined,
  EnvironmentOutlined,
  BarChartOutlined,
  GlobalOutlined,
  RadarChartOutlined,
  PhoneOutlined,
} from '@ant-design/icons';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";

import { ChartsByYear } from './ChartsByYear';
import { ChartsByDay } from './ChartsByDay';
import { CallReport } from './CallReport';

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
                         <Link to="/categorias">1. Tabla/Categorías</Link>
                    </Menu.Item>

                    <Menu.Item key="2" icon={<BankOutlined />}>
                         <Link to="/distrito">2. Tabla/Distrito</Link>
                    </Menu.Item>

                    <Menu.Item key="3" icon={<PieChartOutlined />}>
                         <Link to="/charts">3. Gráfica/Distrito</Link>
                    </Menu.Item>


                    <Menu.Item key="4" icon={<EnvironmentOutlined />}>
                         <Link to="/">4. Mapa de Calor</Link>
                    </Menu.Item>

                    <Menu.Item key="5" icon={<BarChartOutlined />}>
                         <Link to="/chartsbyyear">5. Gráfica/Año</Link>
                    </Menu.Item>

                    <Menu.Item key="6" icon={<PhoneOutlined />}>
                         <Link to="/callreport">6. Call/Report</Link>
                    </Menu.Item>

                    <Menu.Item key="7" icon={<RadarChartOutlined />}>
                         <Link to="/chartsbyday">7. Gráfica/Día</Link>
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
                        <Route path="/charts" component={ Charts }></Route>
                        <Route path="/chartsbyyear" component={ ChartsByYear }></Route>
                        <Route path="/chartsbyday" component={ ChartsByDay }></Route>
                        <Route path="/callreport" component={ CallReport }></Route>

                        <Redirect to="/categorias"/>

                    </Switch>
                </Content>

            </Layout>
        </Layout>
       </Router>

    )
}
