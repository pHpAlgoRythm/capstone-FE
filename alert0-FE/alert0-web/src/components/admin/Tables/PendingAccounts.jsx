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
import { GetDocTitle } from "../../../utils/hooks/useDocumentTitle";

import ApprovalId from "../actions/ViewId";

const PendingAccounts = ({ users, approvePending, declinePending }) => {
  
  return (
   <>
   <GetDocTitle title='KCERA: Pending Accounts' /> 
    
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell style={{ width: "25%" }}>Fullname</TableCell>
            <TableCell style={{ width: "25%" }}>Email</TableCell>
            <TableCell style={{ width: "25%" }}>Approval Status</TableCell>
            <TableCell style={{width: "25%"}}>Approval Actions</TableCell>
            <TableCell style={{ width: "25%" }}>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.approval_status}</TableCell>
              <TableCell className="flex">
                  <Button variant="contained" className="w-[50%]" onClick={() => ApprovalId(user.approval_id_photo)}>View ID</Button>
                  <Button variant="outlined"  className="w-{50%]">View Photo</Button>
              </TableCell>
              <TableCell>
                <Button variant="contained" onClick={() => approvePending(user.id)}>Approve</Button>{" "}
                <Button variant="outlined" onClick={() => declinePending(user.id)}>Decline</Button>{" "}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
   
   </>
  );
};

export default PendingAccounts;