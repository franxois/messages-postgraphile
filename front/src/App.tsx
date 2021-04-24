import React, { useReducer, useState } from "react";
import "./App.css";
import { Layout, Menu, Avatar, Button } from "antd";
import { UserSelector } from "./components/UserSelector";
import { ReceiverChooser } from "./components/ReceiverChooser";
import { Discussions } from "./components/Discussions";
import { PenFriends } from "./components/PenFriends";
import { Footer } from "antd/lib/layout/layout";
import { Composer } from "./components/Composer";

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

  const setRecipient = (id: string) => {
    dispatch({ type: "SET_RECIPIENT", id });
  };

  return (
    <div className="App">
      <Layout style={{ minHeight: "100vh" }}>
        <Sider theme="light">
          <h1>Conversations</h1>
          <PenFriends recipient={state.recipient} setRecipient={setRecipient} />
          <ReceiverChooser onChange={setRecipient} />
        </Sider>
        <Layout>
          <Header>
            <UserSelector />
          </Header>
          {state.recipient && (
            <>
              <Content>
                <Discussions id={state.recipient} />
              </Content>
              <Footer>
                <Composer recipient={state.recipient} />
              </Footer>
            </>
          )}
        </Layout>
      </Layout>{" "}
    </div>
  );
}

export default App;
