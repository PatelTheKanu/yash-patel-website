import React, { ReactNode } from 'react';
import { Typography, Paper, Box, Link, IconButton } from '@mui/material';
import { LinkedIn } from '@mui/icons-material';
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
      <Typography variant="body1">
        My name is Yash Patel and I&apos;m a software engineer passionate about creating meaningful
        applications and solving complex problems. My industries of interest are clean meat,
        alternative protein, biotechnology, transportation, and AI.
      </Typography>
      <Typography variant="body1">
        My professional experience is in Python, Django, TypeScript, React, Scala, and Play. Learn
        more on my LinkedIn
        {
          <Link
            href="https://www.linkedin.com/in/the-yash-patel/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              ml: 0.5,
              textDecoration: 'none',
              color: 'primary.main',
              '&:hover': {
                color: 'primary.dark',
              },
            }}
          >
            <LinkedIn sx={{ fontSize: '1.2rem', mr: 0.5 }} />
          </Link>
        }
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
        My journey in software development began with a curiosity about how computers work and has
        evolved into a passion for creating elegant, user-friendly experiences that solve real-world
        problems.
      </Typography>
      <Typography variant="body1" paragraph>
        During my childhood both of my parents work in the tech industry. My dad would bring home
        lots of computers and computer parts. Naturally, this lead me to disasembling and
        reassembling computers at a young age. My interest in technology grew so I started a youtube
        channel where I shared software tutorials, technology reviews, and technology unboxing
        videos. The channel was marginally successful getting over 660k views cummulatively.
      </Typography>
      <Typography variant="body1">
        So I knew from a young age I wanted to work in tech. I got my bachelors from University of
        Minnesota in Computer Science. My biggest hurdle since then has been deciding exactly which
        areas of tech to dive deep into. Since I have a interest in many areas, which is what has
        lead to stick with full stack web development.
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
