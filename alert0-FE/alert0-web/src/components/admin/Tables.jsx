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
  {users.map((user) => {
    
    const approvePending = async (id) => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/approvePendingUser/${id}`, {
          method: "POST", 
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to approve user");
        }

        console.log("User approved:", id);
      } catch (error) {
        console.error(error.message);
      }
    };


    const declinePending = async (id) => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/declinePendingUser/${id}`, {
          method: "DELETE", 
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to approve user");
        }

        console.log("User declined:", id);
      } catch (error) {
        console.error(error.message);
      }
    };

    return (
      <TableRow key={user.id}>
        <TableCell>{user.name}</TableCell>
        <TableCell>{user.email}</TableCell>
        <TableCell>{user.approval_status}</TableCell>
        <TableCell>
          <Button variant="contained" onClick={() => approvePending(user.id)}>Approve</Button>{" "}
          <Button variant="outlined" onClick={() => declinePending(user.id)}>Decline</Button>{" "}
        </TableCell>
      </TableRow>
    );
  })}
</TableBody>

        </Table>
      </TableContainer>
    </>
  );
};

export default AccountsTable;
