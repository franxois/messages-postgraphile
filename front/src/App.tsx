import React, { useReducer, useState } from "react";
import "./App.css";
import { Layout, Menu, Avatar, Button } from "antd";
import { UserSelector } from "./components/UserSelector";
import { ReceiverChooser } from "./components/ReceiverChooser";
import { Composer } from "./components/Composer";
import { Discussions } from "./components/Discussions";

interface State {
  recipient: string;
}
type Action = { type: "SET_RECIPIENT"; id: string };

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "SET_RECIPIENT":
      return { ...state, recipient: action.id };
  }
};

function App() {
  const { Sider, Content, Header } = Layout;

  const [state, dispatch] = useReducer(reducer, { recipient: "" });

  return (
    <div className="App">
      <Layout style={{ minHeight: "100vh" }}>
        <Sider theme="light">
          <h1>Conversations</h1>
          <Menu>
            <Menu.Item>
              <Avatar size="small">B</Avatar> Bob
            </Menu.Item>
            <Menu.Item>
              <Avatar size="small">C</Avatar> Charlie
            </Menu.Item>
          </Menu>
          <ReceiverChooser
            onChange={(id) => {
              dispatch({ type: "SET_RECIPIENT", id });
            }}
          />
        </Sider>
        <Layout>
          <Header>
            <UserSelector />
          </Header>
          <Content>
            <Discussions />
            <Composer recipient={state.recipient} />
          </Content>
        </Layout>
      </Layout>{" "}
    </div>
  );
}

export default App;
