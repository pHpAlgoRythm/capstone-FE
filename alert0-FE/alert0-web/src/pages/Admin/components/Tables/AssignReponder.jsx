import React, { useState, useEffect } from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Button
  } from "@mui/material";
import GetResponders from '../../services/GetResponders';

const AssignResponders = ({onAssignResponder}) => {

    const [responder, setResponders] = useState([]);

     React.useEffect( () => {
        handleResponders();
      }, []);
    
    const handleResponders = async () => {
        const responderList = await GetResponders();
        if(responderList.responders){
            setResponders(responderList.responders);
      }
    };

    console.log(responder)
    return (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell style={{ width: "25%" }}>Fullname</TableCell>
                <TableCell style={{ width: "25%" }}>Email</TableCell>
                <TableCell style={{ width: "25%" }}>Approval Status</TableCell>
                <TableCell style={{ width: "25%" }}>Action</TableCell>
               
              </TableRow>
            </TableHead>
    
            <TableBody>
              {responder.map((responders) => (
                <TableRow key={responders.id}>
                  <TableCell>{responders.name}</TableCell>
                  <TableCell>{responders.email}</TableCell>
                  <TableCell>{responders.approval_status}</TableCell>
                  <TableCell>
                    <Button variant="contained" onClick={() => onAssignResponder(responders.id)}>Assign</Button>
                  </TableCell>
                  
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

      );
}

export default AssignResponders





  