import React from "react";

const UserList = ({ users, onDelete }) => {
  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            <div>Name: {user.name}</div>
            <div>Role: {user.role}</div>
            <div>Mobile: {user.mobile}</div>
            <div>Payment: ${user.payment}</div>
            <button onClick={() => onDelete(user._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
