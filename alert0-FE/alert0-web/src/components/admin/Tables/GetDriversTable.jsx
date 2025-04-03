
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

  const DriversTable = ({ drivers}) => {
    console.log(drivers)
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
            {drivers.map((drivers) => (
              <TableRow key={drivers.id}>
                <TableCell>{drivers.name}</TableCell>
                <TableCell>{drivers.email}</TableCell>
                <TableCell>{drivers.approval_status}</TableCell>
                <TableCell>
                  <Button variant="contained">Assign</Button>
                </TableCell>
                
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };

  export default DriversTable;