import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/Home/HomePage';
import { HelloWorldPage, AboutPage, ExperiencePage } from './pages/HelloWorld/HelloWorld';
import { HobbiesPage, GamingPage, ReadingPage } from './pages/Hobbies/Hobbies';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import { ActiveSectionProvider } from './context/ActiveSectionContext';

// Create a theme instance with better default colors and spacing
const theme = createTheme({
  palette: {
    primary: {
      main: '#9575cd', // Updated to match your favicon color
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
  },
  typography: {
    h4: {
      fontWeight: 600,
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <ActiveSectionProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="hello-world" element={<HelloWorldPage />} />
              <Route path="hello-world/about" element={<AboutPage />} />
              <Route path="hello-world/experience" element={<ExperiencePage />} />
              <Route path="hobbies" element={<HobbiesPage />} />
              <Route path="hobbies/gaming" element={<GamingPage />} />
              <Route path="hobbies/reading" element={<ReadingPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
          </Routes>
        </ActiveSectionProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
