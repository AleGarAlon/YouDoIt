import React, { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../context/auth.context";

export const NewTablePage = () => {
  const [tableName, setTableName] = useState("");
  const { user } = useContext(AuthContext);
  const [message, setMessage] = useState("");
  console.log(user._id);

  const handleTableNameChange = (e) => {
    setTableName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestBody = { name: tableName, user: user._id };
    console.log(requestBody);

    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/table/newTable`, requestBody)
      .then((response) => {
        setMessage("Table created successfully!");
        setTableName("");
      })
      .catch((error) => {
        setMessage("Error creating table: " + error.response.data.message);
      });
  };

  return (
    <>
      <div>New Table Page</div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="tableName">Table Name:</label>
        <input
          type="text"
          id="tableName"
          name="tableName"
          value={tableName}
          onChange={handleTableNameChange}
          required
        />
        <button type="submit">Create Table</button>
      </form>
      {message && <p>{message}</p>}
    </>
  );
};
