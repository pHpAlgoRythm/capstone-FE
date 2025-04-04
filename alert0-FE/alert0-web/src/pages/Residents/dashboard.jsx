import { AppProvider, DashboardLayout, PageContainer } from "@toolpad/core";
import * as React from "react"
import { Sidebar } from "../../components/residents/contentNavigation";
import { DemoTheme } from "../../utils/Theme";

import MediaCard from "../../components/residents/cards/emergencyCards";

const useDemoRouter = (initialPath) => {
    const [pathname,setPathname] = React.useState(initialPath);
    const router = React.useMemo(() => {
        return {
            pathname,
            navigate: (path) => setPathname(String(path)),
        }
    }, [pathname])

    return router;
}

const renderContent= (section) => {

    switch(section){

        case 'request': 
        return (
            <MediaCard/>
        )
        case 'accountSettings':
            return <h1>Account page</h1>
    }
};


 export default  function ResidentDashboard(){
    const router = useDemoRouter('/request')

    return (
        <AppProvider

        navigation={Sidebar}
        router={router}
        theme={DemoTheme}
        branding={{
            logo: <img src="/images/KCERA.png" alt="KCERA logo" />,
            title: 'KCERA',
            homeUrl: '/request',
          }}
        >
            <DashboardLayout>


                <PageContainer>
                {renderContent(
                    router.pathname.slice(1),
                )}
                </PageContainer>
            </DashboardLayout>



        </AppProvider>
    )
}


