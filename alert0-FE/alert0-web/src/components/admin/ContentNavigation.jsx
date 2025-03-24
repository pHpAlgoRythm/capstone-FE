
import DashboardIcon from '@mui/icons-material/Dashboard';
import { Person } from '@mui/icons-material';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';

export const NAVIGATION = [
  {
    kind: 'header',
    title: 'Main',
  },
  {
    segment: 'dashboard',
    title: 'Emergency Request',
    icon: <DashboardIcon />,
  },

  {
    segment: 'accounts',
    title: 'Accounts',
    icon: <Person />,
    children: [
      {
        segment: 'pendingAccounts',
        title: 'Pending Accounts',
        icon: <Person />,
      },
      {
        segment: 'residents',
        title: 'Residents',
        icon: <Person />,
      },
      {
        segment: 'responders',
        title: 'Responders',
        icon: <Person />,
      },
      {
        segment: 'drivers',
        title: 'Drivers',
        icon: <Person />,
      }
    ],
  },
  {
    kind: 'divider',
  },
  {
    kind: 'header',
    title: 'Analytics',
  },
  {
    segment: 'reports',
    title: 'Reports',
    icon: <BarChartIcon />,

  },
  {
    segment: 'integrations',
    title: 'Integrations',
    icon: <LayersIcon />,
  },
];