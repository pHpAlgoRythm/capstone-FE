import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
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
             
            </TableRow>
          </TableHead>
  
          <TableBody>
            {responders.map((responders) => (
              <TableRow key={responders.id}>
                <TableCell>{responders.name}</TableCell>
                <TableCell>{responders.email}</TableCell>
                <TableCell>{responders.approval_status}</TableCell>
                
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };
  
  export default RespondersTable;