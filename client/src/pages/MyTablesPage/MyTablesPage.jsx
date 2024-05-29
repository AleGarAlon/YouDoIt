import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import { Link } from "react-router-dom";
import "./MyTablesPage.css";

export const MyTablesPage = () => {
  const [tables, setTables] = useState([""]);
  const { user } = useContext(AuthContext);

  const myTables = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/user/myTables?userId=${user._id}`
      );
      const data = res.data;
      setTables(data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log("your tables are", tables);
  useEffect(() => {
    myTables();
  }, []);

  return (
    <div className="myTablesPage">
      <div className="MyTablesPageTitle">My Tables</div>
      {tables.length > 0 ? (
        tables.map((table) => (
          <div className="tableList" key={table._id}>
            <Link className="tableName" to={`/table/${table._id}`}>
              {table.name}
            </Link>
          </div>
        ))
      ) : (
        <div>No tables yet</div>
      )}
    </div>
  );
};
