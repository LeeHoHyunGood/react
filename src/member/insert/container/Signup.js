import React from "react";
import AuthLayout from "../component/AuthLayout";
import { Form, Input, Button } from "antd";
import { LockOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actions } from "../state/index";
import useBlockLoginMember from "../../../common/hook/useBlockLoginMember";

export default function Signup({ history }) {
  useBlockLoginMember();
  const dispatch = useDispatch();
  function onFinish({
    memberId,
    pwd,
    teamName,
    memberName,
    memberEmail,
    memberHp,
    memberIp,
  }) {
    const email = `${memberEmail}${EMAIL_SUFFIX}`;
    dispatch(
      actions.fetchSignup(
        memberId,
        pwd,
        teamName,
        memberName,
        email,
        memberHp,
        memberIp,
        history
      )
    );
  }
  return (
    <AuthLayout onFinish={onFinish}>
      <Form.Item name="memberId" label="Id" rules={[{ required: true }]}>
        <Input autoFocus placeholder="ID를 입력해주세요" />
      </Form.Item>
      <Form.Item name="pwd" label="password" rules={[{ required: true }]}>
        <Input
          prefix={<LockOutlined />}
          type="password"
          placeholder="Password를 입력해주세요"
        />
      </Form.Item>
      <Form.Item name="teamName" label="Team Name" rules={[{ required: true }]}>
        <Input placeholder="소속된 팀 이름을 입력해주세요" />
      </Form.Item>
      <Form.Item name="memberName" label="Name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="memberEmail" label="Email" rules={[{ required: true }]}>
        <Input addonAfter={EMAIL_SUFFIX} placeholder="이메일을 입력해주세요." />
      </Form.Item>
      <Form.Item name="memberHp" label="Hp" rules={[{ required: true }]}>
        <Input placeholder="전화번호를 입력해주세요" />
      </Form.Item>
      <Form.Item name="memberIp" label="Ip" rules={[{ required: true }]}>
        <Input placeholder="IP를 입력해주세요" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
          회원가입
        </Button>
        Or <Link to="/">로그인</Link>
      </Form.Item>
    </AuthLayout>
  );
}

const EMAIL_SUFFIX = "@11h11m.com";
