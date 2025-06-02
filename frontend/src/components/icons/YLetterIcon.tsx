import React from 'react';
import { styled } from '@mui/material/styles';
import { SvgIcon, SvgIconProps } from '@mui/material';

const StyledSvgIcon = styled(SvgIcon)(({ theme }) => ({
  '& .y-letter': {
    fill: 'currentColor',
    strokeWidth: '0.5',
    stroke: 'currentColor',
  },
}));

const YLetterIcon: React.FC<SvgIconProps> = (props) => {
  return (
    <StyledSvgIcon viewBox="0 0 24 24" {...props}>
      <path
        className="y-letter"
        d="M6 4l6 8.5L18 4h-2.5L12 9.5 8.5 4H6zm5 8.5h2v5h-2z M11 17.5h2l-1 2.5z"
      />
    </StyledSvgIcon>
  );
};

export default YLetterIcon;
