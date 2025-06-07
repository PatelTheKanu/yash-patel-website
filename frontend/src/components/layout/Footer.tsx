import { ReactNode } from 'react';
import { StyledIcon } from '../icons/StyledIcon';
import YoutubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GithubIcon from '@mui/icons-material/GitHub';
import Link from '@mui/icons-material/Link';
import Button from '@mui/material/Button';

interface FooterItem {
  label: string;
  icon: ReactNode;
  href: string;
}

const footerItems: FooterItem[] = [
  {
    label: 'LinkedInIcon',
    icon: (
      <StyledIcon>
        <LinkedInIcon />
      </StyledIcon>
    ),
    href: 'https://www.linkedin.com/in/the-yash-patel/',
  },
  {
    label: 'GithubIcon',
    icon: (
      <StyledIcon>
        <GithubIcon />
      </StyledIcon>
    ),
    href: 'https://github.com/PatelTheKanu',
  },
  {
    label: 'YoutubeIcon',
    icon: (
      <StyledIcon>
        <YoutubeIcon />
      </StyledIcon>
    ),
    href: 'https://www.youtube.com/channel/UCy35Do-lN1mVnFx3CwqlICw?view_as=subscriber',
  },
];

export const Footer: React.FC = () => {
  return (
    <footer style={{ display: 'flex', justifyContent: 'space-between' }}>
      {footerItems.map((item) => (
        <Button key={item.label} href={item.href}>
          {item.icon}
        </Button>
      ))}
    </footer>
  );
};
