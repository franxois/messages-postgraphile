import { Row, Col, Button, Input } from "antd";
import React, { useState } from "react";
import { useSendMessageMutation } from "../generated/graphql";
import { useMessagesWith } from "../hooks/hooks";
import styles from "./Composer.module.css";

export const Composer: React.FC<{
  recipient: string;
}> = ({ recipient }) => {
  const [content, setContent] = useState<string>("");
  const [sendMessage, { loading }] = useSendMessageMutation();
  const { TextArea } = Input;
  const { refetch } = useMessagesWith(recipient);

  return (
    <Row justify="space-around" align="middle" className={styles.main}>
      <Col span={20}>
        <TextArea
          autoFocus
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
          onClick={async () => {
            await sendMessage({ variables: { content, title: "", recipient } });
            setContent("");
            refetch();
          }}
        >
          Send
        </Button>
      </Col>
    </Row>
  );
};
