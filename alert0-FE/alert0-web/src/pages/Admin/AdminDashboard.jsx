import * as React from "react";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { PageContainer } from "@toolpad/core/PageContainer";
import { DemoTheme } from "../../utils/Theme";

// api connectivity
import getPendingUsers from "../../services/API/getPendingUsers";
import approvePending from "../../services/API/approvedUsers";
import declinePending from "../../services/API/declineUser";
import getApprovedUsers from "../../services/API/getApprovedUsers";
import GetResponders from "../../services/API/GetResponders";
import GetDrivers from "../../services/API/GetDriver";

//navigation
import { NAVIGATION } from "../../components/admin/ContentNavigation";

//tables and pages
import PendingAccounts from "../../components/admin/Tables/PendingAccounts";
import Approveduserstable from "../../components/admin/Tables/ApprovesUsersTable";
import RespondersTable from "../../components/admin/Tables/RespondersTable";
import DriversTable from "../../components/admin/Tables/GetDriversTable";
import NewAccount from "../../components/admin/AddNewAccount";
import EmergencyRequests from "../../components/admin/Tables/EmergencyRequest";

// socket
import { io } from "socket.io-client";

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
  drivers
) => {
  switch (section) {
    case "emergencyRequests":
      return (
          <EmergencyRequests/>
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
            drivers
          )}
        </PageContainer>
      </DashboardLayout>
    </AppProvider>
  );
}
