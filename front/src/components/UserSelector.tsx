import React, { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import { Select } from "antd";
import { useUser } from "../context/User";

const ALICE_JWT = gql`
  mutation GetJWT($username: String!) {
    authenticate(input: { username: $username }) {
      jwtToken
    }
  }
`;

const { Option, OptGroup } = Select;

export const UserSelector = () => {
  const { dispatch } = useUser();
  const [selectedUser, setSelectedUser] = useState<string>();

  const [getJWT] = useMutation(ALICE_JWT, {
    // TODO : Move this code into redux action ?
    onCompleted: (data) => {
      if (selectedUser !== undefined) {
        dispatch({
          type: "login",
          payload: { username: selectedUser, jwt: data.authenticate.jwtToken },
        });
      }
    },
  });

  return (
    <Select<string>
      placeholder="Please select user"
      value={selectedUser}
      style={{ width: 200 }}
      onChange={(value) => {
        setSelectedUser(value);
        getJWT({ variables: { username: value } });
      }}
    >
      <OptGroup label="Administrator">
        <Option value="admin">Admin</Option>
      </OptGroup>
      <OptGroup label="Users">
        <Option value="Alice-test">Alice-test</Option>
        <Option value="Bob-test">Bob-test</Option>
      </OptGroup>
    </Select>
  );
};
