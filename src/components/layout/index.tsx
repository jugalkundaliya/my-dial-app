import React, { useState } from "react";
import SettingFilled from "@ant-design/icons/SettingFilled";
import TeamOutlined from "@ant-design/icons/TeamOutlined";
import MessageFilled from "@ant-design/icons/MessageFilled";
import PhoneFilled from "@ant-design/icons/PhoneFilled";
import UserOutlined from "@ant-design/icons/UserOutlined";
import PhoneOutlined from "@ant-design/icons/PhoneOutlined";
import type { MenuProps } from "antd";
import { Button, Layout, Menu, Popover, theme } from "antd/lib";
import { logout } from "@/features/auth/authSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import PhoneDialPad from "../PhoneDial";

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Team", "team", <TeamOutlined />),
  getItem("Chat", "chat", <MessageFilled />),
  getItem("Call", "call", <PhoneFilled />),
  getItem("Settings", "settings", <SettingFilled />),
];

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = () => {
    dispatch(logout());
    localStorage.setItem("userLoggedIn", "false");
    router.push("/login");
  };

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgLayout, colorPrimary },
  } = theme.useToken();
  const [phoneOpen, setPhoneOpen] = useState(false);
  return (
    <Layout style={{ minHeight: "100vh" }}>
      {phoneOpen && <PhoneDialPad handleCancel={() => setPhoneOpen(false)} />}
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={["team"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            paddingRight: 16,
            background: colorBgLayout,
            marginLeft: "auto",
          }}
        >
          <PhoneOutlined
            style={{
              background: colorPrimary,
              padding: 6,
              borderRadius: "50%",
              marginRight: 16,
              cursor: "pointer",
            }}
            onClick={() => setPhoneOpen(true)}
          />
          <Popover
            content={<Button onClick={handleLogout}>Logout</Button>}
            title=""
            trigger="hover"
          >
            <UserOutlined
              style={{
                background: colorPrimary,
                padding: 6,
                borderRadius: "50%",
                cursor: "pointer",
              }}
            />
          </Popover>
        </Header>
        <Content style={{ margin: "0 16px" }}>{children}</Content>
        <Footer style={{ textAlign: "center" }}>
          Footer ©{new Date().getFullYear()}
        </Footer>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
