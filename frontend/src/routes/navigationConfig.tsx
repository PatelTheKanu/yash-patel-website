import { ReactNode } from 'react';
import { StyledIcon } from '../components/icons/StyledIcon';
import HomeIcon from '@mui/icons-material/Home';
import ChessQueenIcon from '../components/icons/ChessQueenIcon';
import BookIcon from '@mui/icons-material/Book';
import YLetterIcon from '../components/icons/YLetterIcon';
import HourglassDisabledIcon from '@mui/icons-material/HourglassDisabled';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';

export interface NavigationItem {
  label: string;
  path: string;
  icon?: ReactNode;
  children?: NavigationItem[];
}

export const navigationItems: NavigationItem[] = [
  {
    label: 'Hello World',
    path: '/hello-world',
    icon: (
      <StyledIcon>
        <HomeIcon />
      </StyledIcon>
    ),
    children: [
      {
        label: 'Background',
        path: '/hello-world/about',
        icon: (
          <StyledIcon>
            <YLetterIcon />
          </StyledIcon>
        ),
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
    icon: (
      <StyledIcon>
        <HourglassDisabledIcon />
      </StyledIcon>
    ),
    children: [
      {
        label: 'Gaming',
        path: '/hobbies/gaming',
        icon: (
          <StyledIcon>
            <ChessQueenIcon />
          </StyledIcon>
        ),
      },
      {
        label: 'Reading',
        path: '/hobbies/reading',
        icon: (
          <StyledIcon>
            <BookIcon />
          </StyledIcon>
        ),
      },
      {
        label: 'Fitness',
        path: '/hobbies/fitness',
        icon: (
          <StyledIcon>
            <MonitorHeartIcon />
          </StyledIcon>
        ),
      },
    ],
  },
];
