import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
const AccountsTable = ({
  Name,
  Email,
  Address,
  Gender,
  Phone,
  VerficationID,
}) => {
  return (
    <div className="w-full">
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Phone</TableCell>
              {VerficationID && <TableCell>Verification</TableCell>}
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>{Name}</TableCell>
              <TableCell>{Email}</TableCell>
              <TableCell>{Address}</TableCell>
              <TableCell>{Gender}</TableCell>
              <TableCell>{Phone}</TableCell>
              {VerficationID && <TableCell>{VerficationID}</TableCell>}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default AccountsTable;
