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

const renderContent = (section, users) => {
  switch(section){
    case 'dashboard': 
    return <AccountsTable users={[]} />;
    case 'accounts/pendingAccounts':
      return <AccountsTable users={users} approve='Approve' decline='Decline' />;
    case 'accounts/residents':
      return <AccountsTable users={[]} />
  };
}

export default function DashboardLayoutBasic() {
  const [pendingUsers, setPendingUsers] = React.useState([]);
  // const [hasNewuser, setHasNewUser] = React.useState(false);
  const socket = io('http://127.0.0.1:8080');

  React.useEffect(() => {
    socket.on('PendingUser', () => {
      // fetch live data
      handleGetPendingUsers();
    });

    // initial render sang component
    handleGetPendingUsers();
  }, []);

  const handleGetPendingUsers = async () => {
    // // show new user alert
    // setHasNewUser(true);
    const response = await getPendingUsers();
    setPendingUsers(response.users);
    // hide user alert after 3 seconds
    // const newUserTimeOut = setTimeout(() => {
    //   setHasNewUser(false);
    //   clearTimeout(newUserTimeOut);
    // }, 3000);
  }

  const router = useDemoRouter('/dashboard');

  return (
    <AppProvider
      navigation={NAVIGATION}
      router={router}
      theme={DemoTheme}
    >
      <DashboardLayout >
        <PageContainer sx={{border: '2px solid white',
          width: '100%'
        }}>
        {/* { hasNewuser && <Alert severity="success">New user.</Alert>} */}
        {renderContent(router.pathname.slice(1), pendingUsers)}
        </PageContainer>
      </DashboardLayout>
    </AppProvider>
  );
}
