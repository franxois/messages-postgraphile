import React, { ReactNode, useState } from "react";
import { Button, Modal, Select } from "antd";
import { gql, useQuery } from "@apollo/client";
import { SelectValue } from "antd/lib/select";

// Unused, kept for later
const ButtonModal: React.FC<{ text: ReactNode }> = ({ children, text }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <>
      <Button
        type="primary"
        onClick={() => {
          setIsModalVisible(true);
        }}
      >
        {text}
      </Button>
      <Modal
        title="New message"
        visible={isModalVisible}
        onCancel={() => {
          setIsModalVisible(false);
        }}
      >
        {children}
      </Modal>
    </>
  );
};

export const ReceiverChooser: React.FC<{
  onChange: (value: string) => void;
}> = ({ onChange }) => {
  const GET_USERS = gql`
    query MyQuery {
      allUsers {
        nodes {
          username
          id
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return <div>loading...</div>;

  const { Option } = Select;

  return (
    <Select<string>
      disabled={error !== undefined}
      placeholder="recipient"
      onChange={onChange}
    >
      {data !== undefined &&
        data.allUsers.nodes.map((u: { id: string; username: string }) => (
          <Option key={u.id} value={u.id}>
            {u.username}
          </Option>
        ))}
    </Select>
  );
};
