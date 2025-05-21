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

export const HobbiesPage: React.FC = () => {
  return (
    <AnimatedContent>
      <Typography variant="h4" gutterBottom>
        Hobbies & Interests
      </Typography>
      <Typography variant="body1" paragraph>
        Beyond coding, I have various interests that keep me inspired and energized. Here&apos;s a
        glimpse into what I enjoy during my free time.
      </Typography>
      <Typography variant="body1">
        Whether it&apos;s gaming, reading, or exploring new technologies, these activities help me
        maintain a balanced life and often inspire creative solutions in my work.
      </Typography>
    </AnimatedContent>
  );
};

export const GamingPage: React.FC = () => {
  return (
    <AnimatedContent>
      <Typography variant="h4" gutterBottom>
        Gaming
      </Typography>
      <Typography variant="body1" paragraph>
        Gaming has always been a passion of mine, combining storytelling, problem-solving, and
        entertainment in unique ways.
      </Typography>
      <Typography variant="body1">
        I enjoy both competitive and story-driven games, particularly those that challenge
        conventional thinking or offer unique mechanical innovations. Some of my favorite genres
        include strategy games, RPGs, and innovative indie titles.
      </Typography>
    </AnimatedContent>
  );
};

export const ReadingPage: React.FC = () => {
  return (
    <AnimatedContent>
      <Typography variant="h4" gutterBottom>
        Reading
      </Typography>
      <Typography variant="body1" paragraph>
        Books have the power to inspire and transform. I enjoy exploring different genres and
        perspectives through reading.
      </Typography>
      <Typography variant="body1">
        My reading interests span from technical books about software development and computer
        science to science fiction and philosophy. I believe that diverse reading helps broaden
        perspectives and inspire creative problem-solving approaches.
      </Typography>
    </AnimatedContent>
  );
};
