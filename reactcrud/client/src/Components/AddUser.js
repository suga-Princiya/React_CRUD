import React, { useState } from "react";
import axios from "axios";
import "../Components/UpdateUser.css";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const navigate = useNavigate();
  const [newUser, setNewUser] = useState({
    name: "",
    role: "",
    mobile: "",
    payment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const addUser = async (e) => {
    e.preventDefault();
    console.log(newUser);
    try {
      const response = await axios.post(
        "http://localhost:5000/api/users",
        newUser
      );

      console.log(response.data);

      setNewUser({
        name: "",
        role: "",
        mobile: "",
        payment: "",
      });
      navigate("/");
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  return (
    <div className="container">
      <div className="form-wrapper">
        <form onSubmit={addUser}>
          {" "}
          <h2>Add User</h2>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              className="form-control"
              name="name"
              value={newUser.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Role</label>
            <input
              type="text"
              placeholder="Enter Role"
              className="form-control"
              name="role"
              value={newUser.role}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Mobile</label>
            <input
              type="text"
              placeholder="Enter Mobile"
              className="form-control"
              name="mobile"
              value={newUser.mobile}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Payment</label>
            <input
              type="text"
              placeholder="Enter Payment"
              className="form-control"
              name="payment"
              value={newUser.payment}
              onChange={handleChange}
            />
          </div>
          <div>
            <button type="submit" className="btn btn-success" onClick={addUser}>
              Add User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;