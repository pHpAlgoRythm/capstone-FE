import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";

const AccountsTable = ({ users, name, email, ApprovalID, approve, decline }) => {
  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ width: "25%" }}>Fullname</TableCell>
              <TableCell style={{ width: "25%" }}>Email</TableCell>
              <TableCell style={{ width: "25%" }}>Approval Photo Id</TableCell>
              <TableCell style={{ width: "25%" }}>Approval Status</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {
              users.map((user) => {
                return (
                  <TableRow key={user.id}>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.approval_status}</TableCell>
                    <TableCell>
                      <Button variant="contained">{approve} </Button>{" "}
                      <Button variant="outlined">{decline}</Button>{" "}
                    </TableCell>
                  </TableRow>
                )
              })
            }
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default AccountsTable;
