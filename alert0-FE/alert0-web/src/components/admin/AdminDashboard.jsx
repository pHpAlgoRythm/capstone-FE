import * as React from 'react';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';
import { NAVIGATION } from './ContentNavigation';
import { DemoTheme } from '../../utils/Theme';
import getPendingUsers from '../../services/API/getPendingUsers';
import PendingAccounts from './Tables/PendingAccounts';
import approvePending from '../../services/API/approvedUsers';
import declinePending from '../../services/API/declineUser';
import getApprovedUsers from '../../services/API/getApprovedUsers';
import Approveduserstable from './Tables/ApprovesUsersTable';

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

const renderContent = (section, users, approvePending, declinePending,resident) => {  
  switch (section) {
    case 'dashboard': 
      return <PendingAccounts users={[]} /> ;
    case 'accounts/pendingAccounts':
      return <PendingAccounts users={users} approvePending={approvePending} declinePending={declinePending} />;
    case 'accounts/residents':
      return (
        <>
       
        <Approveduserstable resident={resident} />
      </>
      );
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

  // 
  const [approveUsers,setApproveUsers] =React.useState([]);

  React.useEffect(() => {
    socket.on('updatedResidents',() => {
      handleApprovedUsers();
    });

   handleApprovedUsers();
  },[])


  const handleApprovedUsers = async () => {
    const UserResponse = await getApprovedUsers();
    if(UserResponse.resident){
      setApproveUsers(UserResponse.resident)
      
    }
    
  };


  const router = useDemoRouter('/dashboard');

  return (
    <AppProvider navigation={NAVIGATION} router={router} theme={DemoTheme}>
      <DashboardLayout>
      <PageContainer sx={{ border: '2px solid white', width: '100%' }}>
            {renderContent(router.pathname.slice(1), pendingUsers, (id) => approvePending(id,handleGetPendingUsers), (id) => declinePending(id,handleGetPendingUsers),approveUsers)}
      </PageContainer>
      </DashboardLayout>
    </AppProvider>
  );
}