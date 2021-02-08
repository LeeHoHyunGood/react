import React, { useEffect } from "react";
import { Layout, Menu, Breadcrumb, Table } from "antd";
import useNeedLogin from "../../../common/hook/useNeedLogin";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../state/index";

const { Header, Content, Footer } = Layout;

export default function MemberUpdate() {
  const data = useSelector((state) => state.member.data);

  const columns = [
    {
      title: "memberId",
      dataIndex: "memberId",
      sorter: {
        compare: (a, b) => a.memberId.length - b.memberId.length,
      },
    },
    {
      title: "memberName",
      dataIndex: "memberName",
      width: "15%",
      sorter: {
        compare: (a, b) => a.memberName.length - b.memberName.length,
      },
    },
    {
      title: "memberHp",
      dataIndex: "memberHp",
      width: "40%",
      sorter: {
        compare: (a, b) => a.memberHp - b.memberHp,
      },
    },
  ];

  useNeedLogin();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.setData());
  }, [dispatch]);

  function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
  }

  return (
    <>
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">회원수정</Menu.Item>
            <Menu.Item key="2">회원삭제</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-content">
            <Table dataSource={data} columns={columns} onChange={onChange} />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </>
  );
}
