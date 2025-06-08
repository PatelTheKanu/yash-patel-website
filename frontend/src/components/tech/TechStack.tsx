import React from 'react';
import { Box, Tooltip } from '@mui/material';
import { styled } from '@mui/material/styles';
import { TECH_ICONS, TechIcon } from '../../assets/icons';

const TechIconWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(3),
  flexWrap: 'wrap',
  alignItems: 'center',
  marginTop: theme.spacing(2),
}));

const IconContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '40px',
  height: '40px',
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'scale(1.2)',
  },
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
}));

interface TechStackProps {
  technologies: TechIcon[];
}

export const TechStack: React.FC<TechStackProps> = ({ technologies }) => {
  return (
    <TechIconWrapper>
      {technologies.map((tech) => (
        <Tooltip key={tech} title={tech.charAt(0).toUpperCase() + tech.slice(1)} arrow>
          <IconContainer>
            <img src={TECH_ICONS[tech]} alt={`${tech} icon`} />
          </IconContainer>
        </Tooltip>
      ))}
    </TechIconWrapper>
  );
};
