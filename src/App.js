import React, { useState, useEffect } from "react";
import { Table, TableHead, TableBody } from "@mui/material";
import { TableRow, TableCell } from "@mui/material";
import UserData from "./Comonents/UserData";

const API = "https://reqres.in/api/users?page=1";

const Data = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch(API);
        const data = await res.json();
        if (data.data && data.data.length > 0) {
          setUsers(data.data);
        }
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Users List</h1>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Avator</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Last_Name</TableCell>
            <TableCell>Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <UserData users={users} />
        </TableBody>
      </Table>
    </div>
  );
};

export default Data;




// useEffect(()=>{
// fetch("url").then(res=>res.json().then(res=>res.data))
// },[])