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
  import GetDrivers from '../../services/GetDriver';

  const AssignDriver = ({ onAssignDriver }) => {
    const [drivers, setDrivers] = useState([]);
  
    useEffect(() => {
      handleDrivers();
    }, []);
  
    const handleDrivers = async () => {
      const driversList = await GetDrivers();
      if (driversList.drivers) {
        setDrivers(driversList.drivers);
      }
    };
  
    return (
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Fullname</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Approval Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
  
          <TableBody>
            {drivers.map((driver) => (
              <TableRow key={driver.id}>
                <TableCell>{driver.name}</TableCell>
                <TableCell>{driver.email}</TableCell>
                <TableCell>{driver.approval_status}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    onClick={() => onAssignDriver(driver.id)}
                  >
                    Assign
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };
  
  export default AssignDriver;
  





  