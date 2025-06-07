import React from 'react';
import { Box } from '@mui/material';
import { keyframes, styled } from '@mui/material/styles';

const moveGradient = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const BackgroundContainer = styled(Box)(({ theme }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: -1,
  background: `linear-gradient(
    -33deg,
    ${theme.palette.background.default},
    ${theme.palette.primary.light},
    ${theme.palette.background.paper},
    ${theme.palette.primary.main}
  )`,
  backgroundSize: '400% 400%',
  animation: `${moveGradient} 15s ease infinite`,
  opacity: 0.7,
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `${theme.palette.background.default}`,
    opacity: 0.8,
  },
}));

export const GradientBackground: React.FC = () => {
  return <BackgroundContainer />;
};
