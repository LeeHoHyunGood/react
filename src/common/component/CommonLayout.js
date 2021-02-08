import React from "react";
import { Layout, Breadcrumb } from "antd";
import MenuLayout from "./MenuLayout";

const { Header, Content, Footer } = Layout;

/**
 * @param {object} param
 * @param {() => void} param.onLogout
 * @param {string} param.menuKey
 * @param {() => void} param.menuListOnClick
 * @param {() => object} param.ContentBody
 */
export default function CommonLayout({
  onLogout,
  menuKey,
  menuListOnClick,
  ContentBody,
}) {
  return (
    <>
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <MenuLayout
            onLogout={onLogout}
            menuKey={menuKey}
            menuListOnClick={menuListOnClick}
          />
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-content">{ContentBody}</div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </>
  );
}
