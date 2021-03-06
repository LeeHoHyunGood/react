import React from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { loginActions } from "../state";
import { Link } from "react-router-dom";
import AuthLayout from "../../insert/component/AuthLayout";
import useBlockLoginMember from "../../../common/hook/useBlockLoginMember";
import { useHistory } from "react-router-dom";

export default function Login() {
  useBlockLoginMember();
  const dispatch = useDispatch();
  const history = useHistory();
  function onFinish({ memberId, pwd }) {
    dispatch(loginActions.fetchLogin(memberId, pwd, history));
  }
  return (
    <AuthLayout onFinish={onFinish}>
      <Form.Item
        name="memberId"
        rules={[{ required: true, message: "Please input your Username!" }]}
      >
        <Input autoFocus prefix={<UserOutlined />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="pwd"
        rules={[{ required: true, message: "Please input your Password!" }]}
      >
        <Input
          prefix={<LockOutlined />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
          로그인
        </Button>
        Or <Link to="/signup">회원가입</Link>
      </Form.Item>
    </AuthLayout>
  );
}
