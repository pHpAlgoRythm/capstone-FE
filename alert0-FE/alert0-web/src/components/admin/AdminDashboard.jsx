import * as React from 'react';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';
import { NAVIGATION } from './ContentNavigation';
import { DemoTheme } from '../../utils/Theme';
import AccountsTable from '../admin/Tables'
import getPendingUsers from '../../services/API/getPendingUsers';
import { io } from 'socket.io-client';
// import { Alert } from '@mui/material';

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

const renderContent = (section, users, approvePending, declinePending) => {
  switch (section) {
    case 'dashboard': 
      return <AccountsTable users={[]} />;
    case 'accounts/pendingAccounts':
      return <AccountsTable users={users} approvePending={approvePending} declinePending={declinePending} />;
    case 'accounts/residents':
      return <AccountsTable users={[]} />;
    default:
      return null;
  }
};


export default function DashboardLayoutBasic() {
  const [pendingUsers, setPendingUsers] = React.useState([]);
  const socket = io('http://127.0.0.1:8080');

  React.useEffect(() => {
    socket.on('PendingUser', () => {
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

  
  const approvePending = async (id) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/approvePendingUser/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) throw new Error("Failed to approve user");

      console.log("User approved:", id);
      handleGetPendingUsers(); 
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

      if (!response.ok) throw new Error("Failed to decline user");

      console.log("User declined:", id);
      handleGetPendingUsers(); // Refresh pending users after decline
    } catch (error) {
      console.error(error.message);
    }
  };

  const router = useDemoRouter('/dashboard');

  return (
    <AppProvider navigation={NAVIGATION} router={router} theme={DemoTheme}>
      <DashboardLayout>
      <PageContainer sx={{ border: '2px solid white', width: '100%' }}>
            {renderContent(router.pathname.slice(1), pendingUsers, approvePending, declinePending)}
      </PageContainer>
      </DashboardLayout>
    </AppProvider>
  );
}

