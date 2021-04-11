import React from "react";
import { Menu, Avatar } from "antd";
import { useAllPenFriendsQuery } from "../generated/graphql";

export const PenFriends: React.FC<{
  recipient: string;
  setRecipient: (friend_id: string) => void;
}> = ({ recipient, setRecipient }) => {
  const { loading, error, data } = useAllPenFriendsQuery();

  if (loading || error) return null;

  return (
    <Menu>
      {data?.allPenFriends?.nodes.map((friend) => {
        if (friend?.userByFriendId) {
          const { id, username } = friend.userByFriendId;
          return (
            <Menu.Item
              isSelected={recipient === id}
              key={id}
              onClick={() => setRecipient(id)}
            >
              <Avatar size="small">{username[0].toUpperCase()}</Avatar>{" "}
              {username}
            </Menu.Item>
          );
        }
      })}
    </Menu>
  );
};
