import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Button,
    Paper,
  } from "@mui/material";


  const RespondersTable = ({ responders}) => {
    console.log(responders)
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
            {responders.map((responders) => (
              <TableRow key={responders.id}>
                <TableCell>{responders.name}</TableCell>
                <TableCell>{responders.email}</TableCell>
                <TableCell>{responders.approval_status}</TableCell>
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
  
  export default RespondersTable;