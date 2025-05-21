import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box, CssBaseline } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion, AnimatePresence } from 'framer-motion';
import TreeNavigation from '../navigation/TreeNavigation';
import { navigationItems } from '../../routes/navigationConfig';

const MainContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  minHeight: '100vh',
  backgroundColor: theme.palette.background.default,
}));

const ContentContainer = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  marginLeft: 280, // Match the width of the navigation sidebar
  overflowY: 'auto',
  display: 'flex',
  flexDirection: 'column',
}));

const AnimatedContent = styled(motion.div)({
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
});

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.4, ease: 'easeInOut' },
};

const Layout: React.FC = () => {
  return (
    <MainContainer>
      <CssBaseline />

      {/* Fixed Navigation Sidebar */}
      <Box
        component="nav"
        sx={{
          width: 280,
          flexShrink: 0,
          position: 'fixed',
          height: '100vh',
          overflowY: 'auto',
          borderRight: '1px solid',
          borderColor: 'divider',
          zIndex: 1000,
        }}
      >
        <TreeNavigation items={navigationItems} />
      </Box>

      {/* Main Content */}
      <ContentContainer>
        <AnimatePresence mode="wait">
          <AnimatedContent key={window.location.pathname} {...pageTransition}>
            <Outlet />
          </AnimatedContent>
        </AnimatePresence>
      </ContentContainer>
    </MainContainer>
  );
};

export default Layout;
