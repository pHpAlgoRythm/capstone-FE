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
import ViewImage from "../actions/ViewImage";
import ViewLocation from "../actions/ViewLocation";
import AssignResponder from "../actions/AssignResponder";


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
                <TableCell>
                  <div className="flex flex-col gap-[20px] items-center justify-center">
                    <div>
                        <ViewImage img={emergencies.request_photo} />
                    </div>
                    <div>
                        <ViewLocation 
                        latitude={emergencies.latitude}
                        longitude={emergencies.longitude  }
                        />
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <AssignResponder request_id={emergencies.id} />
                </TableCell>
                
              </TableRow>
           
          ))}

          </TableBody>
        </Table>
      </TableContainer>
    )

}

export default EmergencyRequests;