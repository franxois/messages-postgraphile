import { useMutation } from "@apollo/client";
import { Row, Col, Button, Input } from "antd";
import gql from "graphql-tag";
import React, { useState } from "react";

import styles from "./Composer.module.css";

export const Composer: React.FC<{ recipient: string }> = ({ recipient }) => {
  const [content, setContent] = useState<string>("");

  const SEND_MESSAGE = gql`
    mutation SendMessage(
      $content: String!
      $recipient: UUID!
      $title: String!
    ) {
      sendMessage(
        input: { content: $content, recipient: $recipient, title: $title }
      ) {
        messages {
          createdAt
        }
      }
    }
  `;

  const [sendMessage, { loading }] = useMutation(SEND_MESSAGE);

  const { TextArea } = Input;

  return (
    <Row justify="space-around" align="middle" className={styles.main}>
      <Col span={20}>
        <TextArea
          value={content}
          onChange={({ target }) => setContent(target.value)}
          className={styles.textarea}
          placeholder="Please write your message"
        ></TextArea>
      </Col>
      <Col span={4}>
        <Button
          type="primary"
          loading={loading}
          disabled={recipient === ""}
          onClick={() => {
            sendMessage({ variables: { content, title: "", recipient } });
          }}
        >
          Send
        </Button>
      </Col>
    </Row>
  );
};
