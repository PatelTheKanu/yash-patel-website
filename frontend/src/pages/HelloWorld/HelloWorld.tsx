import React, { ReactNode } from 'react';
import { Typography, Paper, Box } from '@mui/material';
import { motion } from 'framer-motion';

const AnimatedBox = motion(Box);

const contentAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

interface AnimatedContentProps {
  children: ReactNode;
}

const AnimatedContent: React.FC<AnimatedContentProps> = ({ children }) => (
  <AnimatedBox
    sx={{
      '& .MuiPaper-root': {
        p: 4,
        height: '100%',
      },
    }}
    variants={contentAnimation}
    initial="initial"
    animate="animate"
  >
    <Paper elevation={2}>{children}</Paper>
  </AnimatedBox>
);

export const HelloWorldPage: React.FC = () => {
  return (
    <AnimatedContent>
      <Typography variant="h4" gutterBottom>
        Hello World
      </Typography>
      <Typography variant="body1" paragraph>
        Welcome to my personal website! I&apos;m a software developer passionate about creating
        meaningful applications and solving complex problems.
      </Typography>
      <Typography variant="body1">
        This site is built with React, TypeScript, and Material UI, with a Django backend. Feel free
        to explore the different sections to learn more about me and my work.
      </Typography>
    </AnimatedContent>
  );
};

export const AboutPage: React.FC = () => {
  return (
    <AnimatedContent>
      <Typography variant="h4" gutterBottom>
        About Me
      </Typography>
      <Typography variant="body1" paragraph>
        I&apos;m a full-stack developer with experience in React, TypeScript, and Django. I love
        learning new technologies and building innovative solutions.
      </Typography>
      <Typography variant="body1">
        My journey in software development began with a curiosity about how applications work and
        has evolved into a passion for creating elegant, user-friendly experiences that solve
        real-world problems.
      </Typography>
    </AnimatedContent>
  );
};

export const ExperiencePage: React.FC = () => {
  return (
    <AnimatedContent>
      <Typography variant="h4" gutterBottom>
        Experience
      </Typography>
      <Typography variant="body1" paragraph>
        Here&apos;s where I&apos;ll share my professional journey and key projects I&apos;ve worked
        on.
      </Typography>
      <Typography variant="body1">
        My experience spans front-end and back-end development, with a focus on creating responsive,
        accessible, and performant web applications. I&apos;m particularly interested in user
        experience design and building systems that scale.
      </Typography>
    </AnimatedContent>
  );
};
