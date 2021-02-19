import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Layout, Menu, Button, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

function App() {
  const [count, setCount] = useState(0);

  const { Sider } = Layout;

  return (
    <div className="App">
      <Layout style={{ minHeight: "100vh" }}>
        <Sider theme="light">
          <h1>Liste des threads</h1>
          <Menu>
            <Menu.Item>
              <Avatar size="small">B</Avatar> Bob
            </Menu.Item>
            <Menu.Item>
              <Avatar size="small">C</Avatar> Charlie
            </Menu.Item>
          </Menu>
          <Button type="primary">Nouveau</Button>
        </Sider>
        <Layout>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>Hello Vite + React!</p>
            <p>
              <Button
                type="primary"
                onClick={() => setCount((count) => count + 1)}
              >
                count is: {count}
              </Button>
            </p>
            <p>
              Edit <code>App.tsx</code> and save to test HMR updates.
            </p>
            <p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
              {" | "}
              <a
                className="App-link"
                href="https://vitejs.dev/guide/features.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Vite Docs
              </a>
            </p>
          </header>
        </Layout>
      </Layout>{" "}
    </div>
  );
}

export default App;
