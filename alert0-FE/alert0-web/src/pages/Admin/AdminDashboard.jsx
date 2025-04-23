import * as React from "react";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { PageContainer } from "@toolpad/core/PageContainer";
import { DemoTheme } from "../../utils/Theme";

// api connectivity
import getPendingUsers from "./services/getPendingUsers";
import approvePending from "./services/approvedUsers";
import declinePending from "./services/declineUser";
import getApprovedUsers from "./services/getApprovedUsers";
import GetResponders from "./services/GetResponders";
import GetDrivers from "./services/GetDriver";
import GetEmergencyRequest from "./services/GetEmergencyRequest";

//navigation
import { NAVIGATION } from "./components/ContentNavigation";

//tables and pages
import PendingAccounts from "./components/Tables/PendingAccounts";
import Approveduserstable from "./components/Tables/ApprovesUsersTable";
import RespondersTable from "./components/Tables/RespondersTable";
import DriversTable from "./components/Tables/GetDriversTable";
import NewAccount from "./components/AddNewAccount";
import EmergencyRequests from "./components/Tables/EmergencyRequest";

// socket
import { io } from "socket.io-client";
// import { Emergency } from "@mui/icons-material";

function useDemoRouter(initialPath) {
  const [pathname, setPathname] = React.useState(initialPath);

  const router = React.useMemo(() => {
    return {
      pathname,
      navigate: (path) => setPathname(String(path)),
    };
  }, [pathname]);

  return router;
}

const renderContent = (
  section,
  users,
  approvePending,
  declinePending,
  resident,
  responders,
  drivers,
  EmergencyReq
) => {
  switch (section) {
    case "emergencyRequests":
      return (
          <EmergencyRequests 
            emergency={EmergencyReq}
          />
      )
    case "accounts/pendingAccounts":
      return (
        <PendingAccounts
          users={users}
          approvePending={approvePending}
          declinePending={declinePending}
        />
      );
    case "accounts":
      return (
        <PendingAccounts
          users={users}
          approvePending={approvePending}
          declinePending={declinePending}
        />
      );
    case "accounts/residents":
      return (
        <>
          <Approveduserstable resident={resident} />
        </>
      );
    case "accounts/responders":
      return (
        <>
            <RespondersTable responders={responders} />
        </>
      );

    case "accounts/drivers":

      return(
        <>
          <DriversTable drivers={drivers} />
        </>
      );

      case "accounts/addNew":
        return(
          <>  
            <NewAccount></NewAccount>
          </>
        );

    default:
      return null;
  }
};

export default function AdminDashboard() {


  // handle sang pag kwa sang list sang mga pending users
  const [pendingUsers, setPendingUsers] = React.useState([]);

  const socket = io("http://127.0.0.1:8080");

  React.useEffect(() => {
    socket.on("PendingUser", () => {
      handleGetPendingUsers();
    });

    // Fetch pending users on initial render
    handleGetPendingUsers();
  }, []);

  const handleGetPendingUsers = async () => {
    const response = await getPendingUsers();
    if (response.users) {
      setPendingUsers(response.users);
    }
  };

  //handle sa pag kwa sang mga active residents users
  const [approveUsers, setApproveUsers] = React.useState([]);

  React.useEffect(() => {
    socket.on("updatedResidents", () => {
      handleApprovedUsers();
    });

    handleApprovedUsers();
  }, []);

  const handleApprovedUsers = async () => {
    const UserResponse = await getApprovedUsers();
    if (UserResponse.resident) {
      setApproveUsers(UserResponse.resident);
    }
  };

// Shem ni

// handle sa pag kwa sang list ka responders
  const [responders, SetResponders] = React.useState([]);

  React.useEffect(() => {
    handleResponders();
  }, []);

  const handleResponders = async () => {
    const respondersList = await GetResponders();
    if(respondersList.responders){
      SetResponders(respondersList.responders);
  }
};


  // handle naman ni ya sa pag kwa sang list sang mga drivers

  const [drivers, SetDrivers] = React.useState([]);
  
  React.useEffect( () => {
    handleDrivers();
  }, []);

  const handleDrivers = async () => {
    const driversList = await GetDrivers();
    if(driversList.drivers){
      SetDrivers(driversList.drivers);
  }
};

    // handle sa pag kwa sang emergencies
  const [EmergencyReq, SetEmergency] = React.useState([]);
  // console.log(Emergency)

  React.useEffect( () => {
    socket.on("emergencyRequests", () => {
      handdleGetEmergency();
    })
    handdleGetEmergency();
  }, []);

  const handdleGetEmergency = async () => {
    const emergencies = await GetEmergencyRequest();

    if(emergencies.emergency){
      SetEmergency(emergencies.emergency);
    }
  }

  const router = useDemoRouter("/emergencyRequests");

  return (
    <AppProvider 
    navigation={NAVIGATION}
     router={router}
      theme={DemoTheme}
      branding={{
        logo: <img src="/images/KCERA.png" alt="KCERA logo" />,
        title: 'KCERA',
        homeUrl: '/emergencyRequests',
      }}>
      <DashboardLayout>
        <PageContainer>
          {renderContent(
            router.pathname.slice(1),
            pendingUsers,
            (id) => approvePending(id, handleGetPendingUsers),
            (id) => declinePending(id, handleGetPendingUsers),
            approveUsers,
            responders,
            drivers,
            EmergencyReq
          )}
        </PageContainer>
      </DashboardLayout>
    </AppProvider>
  );
}
