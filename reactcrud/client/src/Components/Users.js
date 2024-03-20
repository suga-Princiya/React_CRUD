import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Components/User.css";
import axios from "axios";

function Users() {
  const [Users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/users");
        setUsers(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const onDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/users/${id}`);
      setUsers(Users.filter((user) => user._id !== id));
      console.log("User deleted successfully");
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div className="table-contain ">
      <div className="table1-contain">
        <Link to="/adduser" className="button1">
          Add user
        </Link>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Role</th>
              <th>Mobile</th>
              <th>Payment</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {Users.map((user) => {
              return (
                <tr key={user._id}>
                  <td>{user.name}</td>
                  <td>{user.role}</td>
                  <td>{user.mobile}</td>
                  <td>{user.payment}</td>
                  <td>
                    <Link to={`/update/${user._id}`} className="button1">
                      Update
                    </Link>
                    <button onClick={() => onDelete(user._id)}>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;
