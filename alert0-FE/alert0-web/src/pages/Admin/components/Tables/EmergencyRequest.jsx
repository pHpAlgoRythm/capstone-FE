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
  import GetRequester from "../../services/GetRequester";

const EmergencyRequests = ({emergency}) => {
  console.log(emergency)

    return(
        <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ width: "25%" }}>Requester</TableCell>
              <TableCell style={{ width: "25%" }}>Type</TableCell>
              <TableCell style={{ width: "25%" }}>Emergency Info</TableCell>
              <TableCell style={{ width: "25%" }}>Action</TableCell>
             
            </TableRow>
          </TableHead>
  
          <TableBody>
            {emergency.map((emergencies) => (
              
              <TableRow key={emergencies.id}>
                <TableCell>
                  <GetRequester id={emergencies.user_id  } />
                </TableCell>
                <TableCell>{emergencies.request_type}</TableCell>
                <TableCell className="flex-col gap-[10px] items-center justify-center">
                    <Button variant="contained" className="w-[80%]">View Images</Button>
                     <Button variant="outlined" className="w-[80%] mt-4">View Location</Button>
                </TableCell>
                <TableCell>
                  <Button variant="contained">Respond</Button>
                </TableCell>
                
              </TableRow>
           
          ))}

          </TableBody>
        </Table>
      </TableContainer>
    )

}

export default EmergencyRequests;