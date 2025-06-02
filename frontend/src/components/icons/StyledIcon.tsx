import { styled } from '@mui/material/styles';

export const StyledIcon = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  '& > *': {
    // This will target any direct child (the icon)
    color: 'inherit',
  },
  '.active &, &:hover': {
    color: '#9575cd', // Soft purple color
  },
}));
