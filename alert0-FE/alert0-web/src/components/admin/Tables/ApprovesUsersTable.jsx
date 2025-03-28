import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
  } from "@mui/material";


  const Approveduserstable = ({ resident}) => {
    console.log(resident)
    return (
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ width: "25%" }}>Fullname</TableCell>
              <TableCell style={{ width: "25%" }}>Email</TableCell>
              <TableCell style={{ width: "25%" }}>Approval Status</TableCell>
              {/* <TableCell style={{ width: "25%" }}>Actions</TableCell> */}
            </TableRow>
          </TableHead>
  
          <TableBody>
            {resident.map((resident) => (
              <TableRow key={resident.id}>
                <TableCell>{resident.name}</TableCell>
                <TableCell>{resident.email}</TableCell>
                <TableCell>{resident.approval_status}</TableCell>
                {/* <TableCell>
                  <Button variant="contained" onClick={() => approvePending(user.id)}>Approve</Button>{" "}
                  <Button variant="outlined" onClick={() => declinePending(user.id)}>Decline</Button>{" "}
                </TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };
  
  export default Approveduserstable;