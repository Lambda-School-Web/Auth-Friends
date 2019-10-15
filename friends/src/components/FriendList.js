import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import AddFriend from "./AddFriend";

const FriendList = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/api/friends")
      .then(res => setFriends(res.data))
      .catch(err => console.error(err));
  }, [friends]);

  const renderFriends = () => {
    return friends.map(friend => {
      return (
        <div key={friend.id}>
          <p>Name: {friend.name}</p>
          <p>Age: {friend.age}</p>
          <p>Email: {friend.email}</p>
        </div>
      );
    });
  };

  return (
    <div>
      <AddFriend />
      Friendlist: {renderFriends()}
    </div>
  );
};

export default FriendList;
