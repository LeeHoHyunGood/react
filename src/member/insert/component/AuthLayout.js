import React from "react";
import { Col, Row, Typography, Form } from "antd";

/**
 * @param {object} param
 * @param {() => void} param.onFinish
 * @param {import('react').ReactNode} param.children
 */
export default function AuthLayout({ children, onFinish }) {
  return (
    <>
      <Row justify="center" style={{ marginTop: 100 }}>
        <Col>
          <Typography.Title style={{ fontFamily: "Caligrahhy" }}>
            리액트 - 회원 관리 hhlee
          </Typography.Title>
        </Col>
      </Row>
      <Row justify="center">
        <Col>
          <Form
            style={{ width: 300, marginTop: 50 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            {children}
          </Form>
        </Col>
      </Row>
    </>
  );
}
