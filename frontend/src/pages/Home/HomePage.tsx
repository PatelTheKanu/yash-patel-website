import React from 'react';
import { Typography, Paper, Box, Link, IconButton } from '@mui/material';
import { LinkedIn } from '@mui/icons-material';
import { motion } from 'framer-motion';
import InfiniteScrollLayout from '../../components/layout/InfiniteScrollLayout';

const ProfessionalContent: React.FC = () => (
  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
    {/* Introduction */}
    <Paper elevation={2} sx={{ p: 4 }}>
      <Typography variant="h5" gutterBottom color="primary">
        About Me
      </Typography>
      <Typography variant="body1" paragraph>
        My name is Yash Patel and I'm a software engineer passionate about creating meaningful
        applications and solving complex problems. My industries of interest are clean meat,
        alternative protein, biotechnology, transportation, and AI.
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Typography variant="body1">Connect with me on</Typography>
        <Link
          href="https://www.linkedin.com/in/the-yash-patel/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            textDecoration: 'none',
            color: 'primary.main',
            '&:hover': { color: 'primary.dark' },
          }}
        >
          <LinkedIn sx={{ fontSize: '1.2rem', mr: 0.5 }} />
          LinkedIn
        </Link>
      </Box>
    </Paper>

    {/* Experience */}
    <Paper elevation={2} sx={{ p: 4 }}>
      <Typography variant="h5" gutterBottom color="primary">
        Professional Experience
      </Typography>
      <Typography variant="body1" paragraph>
        My experience spans front-end and back-end development, with a focus on creating responsive,
        accessible, and performant web applications. I'm particularly interested in user experience
        design and building systems that scale.
      </Typography>
      <Typography variant="body1">
        My professional experience is in Python, Django, TypeScript, React, Scala, and Play.
      </Typography>
    </Paper>

    {/* Background */}
    <Paper elevation={2} sx={{ p: 4 }}>
      <Typography variant="h5" gutterBottom color="primary">
        Background
      </Typography>
      <Typography variant="body1" paragraph>
        During my childhood both of my parents worked in the tech industry. My dad would bring home
        lots of computers and computer parts. Naturally, this led me to disassembling and
        reassembling computers at a young age. My interest in technology grew so I started a YouTube
        channel where I shared software tutorials, technology reviews, and technology unboxing
        videos. The channel was marginally successful getting over 660k views cumulatively.
      </Typography>
      <Typography variant="body1">
        I got my bachelor's from University of Minnesota in Computer Science. My biggest hurdle
        since then has been deciding exactly which areas of tech to dive deep into. Since I have an
        interest in many areas, which is what has led me to stick with full stack web development.
      </Typography>
    </Paper>
  </Box>
);

const PersonalContent: React.FC = () => (
  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
    {/* Hobbies Overview */}
    <Paper elevation={2} sx={{ p: 4 }}>
      <Typography variant="h5" gutterBottom color="primary">
        Hobbies & Interests
      </Typography>
      <Typography variant="body1">
        Beyond coding, I have various interests that keep me inspired and energized. These
        activities help me maintain a balanced life and often inspire creative solutions in my work.
      </Typography>
    </Paper>

    {/* Gaming */}
    <Paper elevation={2} sx={{ p: 4 }}>
      <Typography variant="h5" gutterBottom color="primary">
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
    </Paper>

    {/* Reading */}
    <Paper elevation={2} sx={{ p: 4 }}>
      <Typography variant="h5" gutterBottom color="primary">
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
    </Paper>
  </Box>
);

const HomePage: React.FC = () => {
  return (
    <InfiniteScrollLayout
      professionalContent={<ProfessionalContent />}
      personalContent={<PersonalContent />}
    />
  );
};

export default HomePage;
