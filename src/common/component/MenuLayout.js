import React from "react";
import { Menu, Avatar, Dropdown } from "antd";
import { Link } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";

/**
 * @param {object} param
 * @param {() => void} param.onLogout
 * @param {string} param.menuKey
 * @param {() => void} param.menuListOnClick
 */
export default function MenuLayout({ onLogout, menuKey, menuListOnClick }) {
  const menu = (
    <Menu>
      <Menu.Item onClick={onLogout}>로그아웃</Menu.Item>
    </Menu>
  );

  return (
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[menuKey]}>
      <Menu.Item key="1" onClick={menuListOnClick}>
        회원목록<Link to="/memberlist"></Link>
      </Menu.Item>
      <Menu.Item key="2">회원삭제</Menu.Item>
      <Dropdown overlay={menu} placement="bottomRight">
        <Avatar
          size="large"
          style={{ float: "right", marginTop: 10 }}
          icon={<UserOutlined />}
        ></Avatar>
      </Dropdown>
    </Menu>
  );
}
