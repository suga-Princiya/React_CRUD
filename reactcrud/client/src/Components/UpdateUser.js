import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../Components/UpdateUser.css";
import { useNavigate } from "react-router-dom";

function UpdateUser() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [updateUser, setUpdateUser] = useState({
    name: "",
    role: "",
    mobile: "",
    payment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log({ name, value });
    setUpdateUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/users/${id}`
        );
        const userData = response.data;
        setUpdateUser(userData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        `http://localhost:5000/api/users/${id}`,
        updateUser
      );
      console.log("User updated successfully");
      setUpdateUser({
        name: "",
        role: "",
        mobile: "",
        payment: "",
      });
      navigate("/");
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };
  if (!updateUser) {
    return <div>Loading...</div>;
  }
  return (
    <div className="container">
      <div className="form-wrapper">
        <form onSubmit={handleUpdate}>
          <h2>Update User</h2>
          <div className="form-group">
            <label htmlFor="">Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              className="form-control"
              value={updateUser.name}
              name="name"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Role</label>
            <input
              type="text"
              placeholder="Enter Role"
              className="form-control"
              value={updateUser.role}
              name="role"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Mobile</label>
            <input
              type="text"
              placeholder="Enter Mobile"
              className="form-control"
              value={updateUser.mobile}
              name="mobile"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Payment</label>
            <input
              type="text"
              placeholder="Enter Payment"
              className="form-control"
              value={updateUser.payment}
              name="payment"
              onChange={handleChange}
            />
          </div>
          <div>
            <button type="submit" className="btn btn-success">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateUser;