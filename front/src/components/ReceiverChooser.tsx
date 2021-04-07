import React, { ReactNode, useState } from "react";
import { Button, Modal, Select } from "antd";
import { useAllUsersQuery } from "../generated/graphql";

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
  const { loading, error, data } = useAllUsersQuery();

  if (loading) return <div>loading...</div>;

  const { Option } = Select;

  return (
    <Select<string>
      disabled={error !== undefined}
      placeholder="recipient"
      onChange={onChange}
    >
      {data !== undefined &&
        data.allUsers?.nodes.map((u) => {
          if (u) {
            return (
              <Option key={u.id} value={u.id}>
                {u.username}
              </Option>
            );
          }
        })}
    </Select>
  );
};
