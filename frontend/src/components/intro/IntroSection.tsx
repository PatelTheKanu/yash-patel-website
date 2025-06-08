import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const IntroContainer = styled(Box)(({ theme }) => ({
  height: '100vh',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  overflow: 'hidden',
  background: theme.palette.background.default,
  zIndex: 2,
}));

const TextContainer = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  position: 'relative',
  zIndex: 1,
  '& h1': {
    fontSize: '3.5rem',
    fontWeight: 600,
    marginBottom: theme.spacing(2),
    background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    opacity: 0,
    animation: 'fadeIn 1s ease-out forwards',
    textShadow: '0 0 30px rgba(149, 117, 205, 0.3)',
  },
  '& h2': {
    fontSize: '2rem',
    fontWeight: 400,
    color: theme.palette.text.secondary,
    opacity: 0,
    animation: 'fadeIn 1s ease-out 0.5s forwards',
  },
  '@keyframes fadeIn': {
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
  },
}));

export const IntroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <IntroContainer ref={containerRef}>
      <TextContainer>
        <Typography variant="h1" component="h1">
          Hello world, I&apos;m Yash.
        </Typography>
        <Typography variant="h2" component="h2">
          I am a software engineer.
        </Typography>
      </TextContainer>
    </IntroContainer>
  );
};
