import React from 'react';
import { styled } from '@mui/material/styles';
import { SvgIcon, SvgIconProps } from '@mui/material';

const StyledSvgIcon = styled(SvgIcon)(({ theme }) => ({
  '& .queen-base': {
    fill: 'currentColor',
  },
  '& .queen-details': {
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '1.5',
  },
}));

const ChessQueenIcon: React.FC<SvgIconProps> = (props) => {
  return (
    <StyledSvgIcon viewBox="0 0 24 24" {...props}>
      {/* Crown top */}
      <path
        className="queen-base"
        d="M12 3c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1zM7 7c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1zM17 7c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1z"
      />
      {/* Body */}
      <path className="queen-details" d="M12 5L7 9l-2-4 2 8h10l2-8-2 4-5-4z" />
      {/* Base */}
      <path className="queen-base" d="M8 17h8c.6 0 1 .4 1 1s-.4 1-1 1H8c-.6 0-1-.4-1-1s.4-1 1-1z" />
      {/* Decorative lines */}
      <path className="queen-details" d="M12 5v4M7 9l5-4M17 9l-5-4" />
    </StyledSvgIcon>
  );
};

export default ChessQueenIcon;
