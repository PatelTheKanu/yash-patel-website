import { ReactNode } from 'react';
import { StyledIcon } from '../components/icons/StyledIcon';
import HomeIcon from '@mui/icons-material/Home';
import ChessQueenIcon from '../components/icons/ChessQueenIcon';
import BookIcon from '@mui/icons-material/Book';
import YLetterIcon from '../components/icons/YLetterIcon';
import HourglassDisabledIcon from '@mui/icons-material/HourglassDisabled';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from '@mui/icons-material/Work';

export interface NavigationItem {
  label: string;
  scrollTo?: string;
  icon?: ReactNode;
  children?: NavigationItem[];
}

export const navigationItems: NavigationItem[] = [
  {
    label: 'Professional',
    scrollTo: 'professional',
    icon: (
      <StyledIcon>
        <WorkIcon />
      </StyledIcon>
    ),
    children: [
      {
        label: 'About Me',
        scrollTo: 'about',
        icon: (
          <StyledIcon>
            <PersonIcon />
          </StyledIcon>
        ),
      },
      {
        label: 'Experience',
        scrollTo: 'experience',
        icon: (
          <StyledIcon>
            <YLetterIcon />
          </StyledIcon>
        ),
      },
      {
        label: 'Background',
        scrollTo: 'background',
      },
    ],
  },
  {
    label: 'Personal',
    scrollTo: 'personal',
    icon: (
      <StyledIcon>
        <HourglassDisabledIcon />
      </StyledIcon>
    ),
    children: [
      {
        label: 'Gaming',
        scrollTo: 'gaming',
        icon: (
          <StyledIcon>
            <ChessQueenIcon />
          </StyledIcon>
        ),
      },
      {
        label: 'Reading',
        scrollTo: 'reading',
        icon: (
          <StyledIcon>
            <BookIcon />
          </StyledIcon>
        ),
      },
      {
        label: 'Fitness',
        scrollTo: 'fitness',
        icon: (
          <StyledIcon>
            <MonitorHeartIcon />
          </StyledIcon>
        ),
      },
    ],
  },
];
