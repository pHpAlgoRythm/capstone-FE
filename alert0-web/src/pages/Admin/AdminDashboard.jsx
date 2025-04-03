import * as React from "react";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { PageContainer } from "@toolpad/core/PageContainer";
import { NAVIGATION } from "../../components/admin/ContentNavigation";
import { DemoTheme } from "../../utils/Theme";
import getPendingUsers from "../../services/API/getPendingUsers";
import PendingAccounts from "../../components/admin/Tables/PendingAccounts";
import approvePending from "../../services/API/approvedUsers";
import declinePending from "../../services/API/declineUser";
import getApprovedUsers from "../../services/API/getApprovedUsers";
import Approveduserstable from "../../components/admin/Tables/ApprovesUsersTable";

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
  resident
) => {
  switch (section) {
    case "emergencyRequests":
      return <h1>Under Development</h1>;
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
    default:
      return null;
  }
};

export default function AdminDashboard() {
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

  //
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
            approveUsers
          )}
        </PageContainer>
      </DashboardLayout>
    </AppProvider>
  );
}
