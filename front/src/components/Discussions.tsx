import React from "react";
import { Col, Row } from "antd";
import { useMessagesWith } from "../hooks/hooks";

import styles from "./Discussions.module.css";

const Message: React.FC<{
  createdAt: string;
  content: string;
  isMyMessage: boolean;
}> = ({ createdAt, content, isMyMessage }) => (
  <Col span={20} offset={isMyMessage ? 4 : 0} key={createdAt}>
    <span
      className={[styles.msgDate, isMyMessage ? styles.myMsg : undefined].join(
        " "
      )}
    >
      {new Date(createdAt).toLocaleString()}
    </span>
    <span
      className={[styles.msg, isMyMessage ? styles.myMsg : undefined].join(" ")}
    >
      {content}
    </span>
  </Col>
);

export const Discussions: React.FC<{ id: string }> = ({ id }) => {
  const { loading, error, data } = useMessagesWith(id);

  if (loading) return <div>loading...</div>;
  if (error) return <div>Error : {error.message}</div>;

  return (
    <Row gutter={[5, 5]}>
      {data?.messagesWith?.nodes
        .slice(0)
        .reverse()
        .map((message) => {
          if (message) {
            return (
              <Message
                createdAt={message.createdAt}
                content={message.content}
                isMyMessage={message.sender !== id}
              />
            );
          }
        })}
    </Row>
  );
};
