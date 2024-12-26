import React from "react";
import { TableRow, TableCell, Avatar } from "@mui/material";

const UserData = ({ users }) => {
  return (
    <>
      {users.map((curUser, index) => (
        <TableRow key={index}>
          <TableCell>{curUser.id}</TableCell>
          <TableCell>
            <Avatar src={curUser.avatar} alt={`Avatar of ${curUser.first_name}`} />
          </TableCell>
          <TableCell>{curUser.first_name}</TableCell>
          <TableCell>{curUser.last_name}</TableCell>
          <TableCell>{curUser.email}</TableCell>
        </TableRow>
      ))}
    </>
  );
};

export default UserData;
