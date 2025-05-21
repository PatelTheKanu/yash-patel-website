import { ReactNode } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

export interface NavigationItem {
  label: string;
  path: string;
  icon?: ReactNode;
  children?: NavigationItem[];
}

// Create icon elements outside the configuration
const homeIcon = <HomeIcon />;
const gamesIcon = <SportsEsportsIcon />;

export const navigationItems: NavigationItem[] = [
  {
    label: 'Hello World',
    path: '/hello-world',
    icon: homeIcon,
    children: [
      {
        label: 'About Me',
        path: '/hello-world/about',
      },
      {
        label: 'Experience',
        path: '/hello-world/experience',
      },
    ],
  },
  {
    label: 'Hobbies',
    path: '/hobbies',
    icon: gamesIcon,
    children: [
      {
        label: 'Gaming',
        path: '/hobbies/gaming',
      },
      {
        label: 'Reading',
        path: '/hobbies/reading',
      },
    ],
  },
];
