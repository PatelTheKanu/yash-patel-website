import React from 'react';
import { Box, Typography, useTheme, alpha } from '@mui/material';
import { styled } from '@mui/material/styles';

const SectionHeader = styled(Box)(({ theme }) => ({
  position: 'sticky',
  top: 0,
  zIndex: 2,
  padding: theme.spacing(2),
  backdropFilter: 'blur(8px)',
  borderBottom: `1px solid ${theme.palette.divider}`,
  transition: 'all 0.3s ease',
  '&.scrolled': {
    padding: theme.spacing(1, 2),
    boxShadow: theme.shadows[2],
  },
}));

const Section = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  padding: theme.spacing(2),
  '&:last-child': {
    paddingBottom: theme.spacing(10),
  },
}));

interface InfiniteScrollLayoutProps {
  professionalContent: React.ReactNode;
  personalContent: React.ReactNode;
}

const InfiniteScrollLayout: React.FC<InfiniteScrollLayoutProps> = ({
  professionalContent,
  personalContent,
}) => {
  const theme = useTheme();
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Box>
      {/* Professional Section */}
      <Section>
        <SectionHeader className={scrolled ? 'scrolled' : ''}>
          <Typography variant="h4" color="primary" fontWeight="bold">
            Professional
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            My work experience and projects
          </Typography>
        </SectionHeader>
        {professionalContent}
      </Section>

      {/* Personal Section */}
      <Section>
        <SectionHeader className={scrolled ? 'scrolled' : ''}>
          <Typography variant="h4" color="primary" fontWeight="bold">
            Personal
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Hobbies, interests, and side projects
          </Typography>
        </SectionHeader>
        {personalContent}
      </Section>
    </Box>
  );
};

export default InfiniteScrollLayout;
