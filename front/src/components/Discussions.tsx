import { Col, Row } from "antd";
import React from "react";
import { useMessagesWithQuery } from "../generated/graphql";
import { Composer } from "./Composer";

import styles from "./Discussions.module.css";

export const Discussions: React.FC<{ id: string }> = ({ id }) => {
  const { loading, error, data, refetch } = useMessagesWithQuery({
    variables: { id },
    fetchPolicy: "cache-and-network",
  });

  if (loading) return <div>loading...</div>;
  if (error) return <div>Error : {error.message}</div>;

  return (
    <div>
      <Row gutter={[5, 5]}>
        {data?.messagesWith?.nodes
          .slice(0)
          .reverse()
          .map((message) => {
            if (message) {
              if (message.sender === id) {
                return (
                  <Col span={20} key={message.createdAt}>
                    <span className={styles.fromMyFriend}>
                      {message.content}
                    </span>
                  </Col>
                );
              } else {
                return (
                  <Col span={20} offset={4} key={message.createdAt}>
                    <span className={styles.fromMe}>{message.content}</span>
                  </Col>
                );
              }
            }
          })}
      </Row>
      <Composer
        recipient={id}
        afterSend={() => {
          refetch();
        }}
      />
    </div>
  );
};
