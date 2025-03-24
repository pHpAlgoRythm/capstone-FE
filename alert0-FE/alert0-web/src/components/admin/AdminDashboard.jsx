import * as React from 'react';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';
import { NAVIGATION } from './ContentNavigation';
import { DemoTheme } from '../../utils/Theme';
import AccountsTable from '../admin/Tables'

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

const renderContent = (section) => {
  switch(section){
    case 'dashboard': 
    return <AccountsTable />;
    case 'accounts/pendingAccounts':
      return <AccountsTable name='John Doe' email='JhonDoe@gmail.com' ApprovalID='N/A' approve='Approve' decline='Decline' />;
    case 'accounts/residents':
      return <AccountsTable/>
};
}

export default function DashboardLayoutBasic() {

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
        {renderContent(router.pathname.slice(1))}
        </PageContainer>
      </DashboardLayout>
    </AppProvider>
  );
}
