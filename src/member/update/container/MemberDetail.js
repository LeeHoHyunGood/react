import React from "react";
import useNeedLogin from "../../../common/hook/useNeedLogin";
import { Col, Row, Form, Input, Button } from "antd";
import { useDispatch } from "react-redux";
import { actions } from "../state/index";
import { useSelector } from "react-redux";
import { storageHelper } from "../../../common/util/storageHelper";
import { loginActions } from "../../login/state/index";
import { RoleGroup } from "../../../common/constant";
import CommonLayout from "../../../common/component/CommonLayout";

export default function MemberDetail({ history }) {
  useNeedLogin();

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
    dispatch(
      actions.fetchUpdate(
        memberId,
        pwd,
        teamName,
        memberName,
        memberEmail,
        memberHp,
        memberIp,
        history
      )
    );
  }

  function onLogout() {
    dispatch(loginActions.setMember("", RoleGroup.ROLE_ANONYMOUS));
    storageHelper.set("token", "");
  }

  const member = useSelector((state) => state.member);
  if (member === "") history.replace("/memberlist");

  return (
    <CommonLayout
      onLogout={onLogout}
      menuKey={"1"}
      ContentBody={
        <Row justify="center">
          <Col>
            <Form style={{ width: 300, marginTop: 50 }} onFinish={onFinish}>
              <Form.Item label="Member Id" initialValue={member.memberId}>
                <span className="ant-form-text">{member.memberId}</span>
              </Form.Item>
              <Form.Item
                name="memberId"
                initialValue={member.memberId}
                hidden={true}
              >
                <Input hidden={true} />
              </Form.Item>
              <Form.Item
                name="teamName"
                label="Team Name"
                rules={[{ required: true }]}
                initialValue={member.memberId}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="memberName"
                label="Name"
                rules={[{ required: true }]}
                initialValue={member.memberName}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="memberEmail"
                label="Email"
                rules={[{ required: true }]}
                initialValue={member.memberEmail}
              >
                <Input placeholder="이메일을 입력해주세요." />
              </Form.Item>
              <Form.Item
                name="memberHp"
                label="Hp"
                rules={[{ required: true }]}
                initialValue={member.memberHp}
              >
                <Input placeholder="전화번호를 입력해주세요" />
              </Form.Item>
              <Form.Item
                name="memberIp"
                label="Ip"
                rules={[{ required: true }]}
                initialValue={member.memberIp}
              >
                <Input placeholder="IP를 입력해주세요" />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ width: "100%" }}
                >
                  수정
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      }
    />
  );
}
