import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import useNeedLogin from "./common/hook/useNeedLogin";
import { Link } from "react-router-dom";

const { Header, Content, Footer } = Layout;

export default function Home() {
  useNeedLogin();

  return (
    <>
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal">
            <Menu.Item key="1">
              회원수정<Link to="/memberUpdate"></Link>
            </Menu.Item>
            <Menu.Item key="2">회원삭제</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-content">Content</div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </>
  );
}
