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
import { GetDocTitle } from "../../../../utils/hooks/useDocumentTitle";

import ApprovalPhoto from "../actions/ViewPhoto";

const PendingAccounts = ({ users, approvePending, declinePending }) => {
    console.log(users)

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
              <TableCell>
                <div className=" w-full h-full flex-col">
                  <ApprovalPhoto
                   id={user.approval_photo}
                   live={user.approval_id_photo}
                  
                  />
                 
                </div>
              </TableCell>
              <TableCell>
                <div className="w-full h-full flex-col">
                  
                    <Button variant="contained" onClick={() => approvePending(user.id)} className="w-full">Approve</Button>
                 
                    <Button variant="outlined" onClick={() => declinePending(user.id)} className="w-full">Decline</Button>
                </div>
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