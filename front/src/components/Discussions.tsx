import { useQuery } from "@apollo/client";
import { Button, Col, Row } from "antd";
import gql from "graphql-tag";
import React from "react";

import styles from "./Discussions.module.css";

export const Discussions: React.FC<{ id: string }> = ({ id }) => {
  const GET_MESSAGES = gql`
    query messagesWith($id: UUID) {
      messagesWith(friendId: $id) {
        nodes {
          sender
          title
          content
          createdAt
        }
      }
    }
  `;

  const { loading, error, data, refetch } = useQuery(GET_MESSAGES, {
    variables: { id },
    fetchPolicy: "cache-and-network",
  });

  if (loading) return <div>loading...</div>;
  if (error) return <div>Error : {error.message}</div>;

  return (
    <div>
      <Row gutter={[5, 5]}>
        {data.messagesWith.nodes
          .slice(0)
          .reverse()
          .map(
            (message: {
              content: string;
              sender: string;
              createdAt: string;
            }) => {
              if (message.sender === id) {
                return (
                  <Col
                    span={20}
                    key={message.createdAt}
                    className={styles.fromMyFriend}
                  >
                    {message.content}
                  </Col>
                );
              } else {
                return (
                  <Col
                    span={20}
                    offset={4}
                    key={message.createdAt}
                    className={styles.fromMe}
                  >
                    {message.content}
                  </Col>
                );
              }
            }
          )}
      </Row>
      {/* <Button onClick={() => refetch()}>Refetch!</Button> */}
    </div>
  );
};
