"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Input, Button, Typography } from "antd/lib";
import UserOutlined from "@ant-design/icons/UserOutlined";
import LockOutlined from "@ant-design/icons/LockOutlined";
import styled from "styled-components";
import { RootState } from "@/app/store";
import { login } from "@/features/auth/authSlice";
import { useRouter } from "next/navigation";

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LoginForm = styled.div`
  width: 300px;
`;

const ErrorMessage = styled.p`
  color: red;
  text-align: center;
`;

const LoginPage = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const router = useRouter();

  const [password, setPassword] = useState("");
  const error = useSelector((state: RootState) => state.auth.error);

  const handleLogin = () => {
    dispatch(login({ username, password }));
    router.replace("/");
  };

  return (
    <LoginContainer>
      <LoginForm>
        <Typography.Title level={2} style={{ textAlign: "center" }}>
          Login
        </Typography.Title>
        <Form
          name="login-form"
          initialValues={{ remember: true }}
          onFinish={handleLogin}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Item>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
              Log in
            </Button>
          </Form.Item>
        </Form>
      </LoginForm>
    </LoginContainer>
  );
};

export default LoginPage;
