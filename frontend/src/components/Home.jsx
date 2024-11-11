import React, { useEffect } from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllUsers } from "../redux/slices/userSlice";
const Home = () => {
  const dipatch = useDispatch();
  useEffect(() => {
    dipatch(getAllUsers());
  }, []);
  const { users } = useSelector((state) => state.users.users);

  const navigate = useNavigate();
  const handleAddUser = () => {
    navigate("/register");
  };
  return (
    <div className="container flex  items-center justify-content-center">
      <div>
        <h2
          className="text-center text-white p-2 m-2"
          style={{ backgroundColor: "blueviolet" }}
        >
          User Managment System
        </h2>
      </div>

      <div>
        <button className="btn btn-primary m-2" onClick={handleAddUser}>
          <i className="fa fa-home" /> Add Users
        </button>
      </div>
      <div>
        <Table striped="columns">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>City</th>
              <th>Profile</th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((user) => {
                return (
                  <tr>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.gender}</td>
                    <td>{user.city}</td>
                    <td>
                      <img
                        src={`http://localhost:3000/${user.profile}`}
                        alt="null"
                        className="img img-rounded"
                        height="100px"
                        width="100px"
                      />
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Home;
