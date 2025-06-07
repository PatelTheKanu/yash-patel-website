import React from 'react';
import { Typography, Paper, Box, Link } from '@mui/material';
import InfiniteScrollLayout from '../../components/layout/InfiniteScrollLayout';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import ChessQueenIcon from '../../components/icons/ChessQueenIcon';
import Button from '@mui/material/Button';

const ProfessionalContent: React.FC = () => (
  <Box id="professional" sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
    {/* Introduction */}
    <Paper id="about" elevation={2} sx={{ p: 4, scrollMarginTop: '2rem' }}>
      <Typography variant="h5" gutterBottom color="primary">
        About Me
      </Typography>
      <Typography variant="body1" paragraph>
        My name is Yash Patel and I&apos;m a software engineer. My industries of interest are clean
        meat, alternative protein, biotechnology, transportation, and AI. I&apos;m currently working
        at Myriad Genetics.
      </Typography>
    </Paper>

    {/* Experience */}
    <Paper id="experience" elevation={2} sx={{ p: 4, scrollMarginTop: '2rem' }}>
      <Typography variant="h5" gutterBottom color="primary">
        Professional Experience
      </Typography>
      <Typography variant="body1" paragraph>
        I have worked full time at United Health Group, Rally Health, and Myriad Genetics.
      </Typography>
      <Typography variant="body1">
        My professional experience is in Python, Django, TypeScript, React, Scala, and Play.
      </Typography>
    </Paper>

    {/* Background */}
    <Paper id="background" elevation={2} sx={{ p: 4, scrollMarginTop: '2rem' }}>
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
        I got my bachelor&apos;s from University of Minnesota in Computer Science. My biggest hurdle
        since then has been deciding exactly which areas of tech to dive deep into. I have an
        interest in many areas, which is what has led me to stick with full stack web development.
      </Typography>
    </Paper>
  </Box>
);

const PersonalContent: React.FC = () => (
  <Box id="personal" sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
    {/* Hobbies Overview */}
    <Paper id="personal" elevation={2} sx={{ p: 4, scrollMarginTop: '2rem' }}>
      <Typography variant="h5" gutterBottom color="primary">
        Hobbies & Interests
      </Typography>
      <Typography variant="body1">
        Beyond coding, I have various interests that keep me inspired and energized. These
        activities help me maintain a balanced life and often inspire creative solutions in my work.
      </Typography>
    </Paper>

    {/* Gaming */}
    <Paper id="gaming" elevation={2} sx={{ p: 4, scrollMarginTop: '2rem' }}>
      <Typography variant="h5" gutterBottom color="primary">
        Gaming
      </Typography>
      <Typography variant="body1" paragraph>
        Games of all kind (table top to video) have always been a passion of mine, combining
        storytelling, problem-solving, and entertainment in unique ways.
      </Typography>
      <Typography variant="body1">
        I enjoy both competitive and story-driven games, particularly those that challenge
        conventional thinking or offer unique mechanical innovations. Some of my favorite genres
        include strategy games, RPGs, and innovative indie titles. That said nowadays I mostly play
        chess; challenge me on{' '}
        {
          <Button href="https://www.chess.com/member/mangster29" endIcon={<ChessQueenIcon />}>
            Chess.com
          </Button>
        }
      </Typography>
    </Paper>

    {/* Reading */}
    <Paper id="reading" elevation={2} sx={{ p: 4, scrollMarginTop: '2rem' }}>
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

    {/* Fitness */}
    <Paper id="fitness" elevation={2} sx={{ p: 4, scrollMarginTop: '2rem' }}>
      <Typography variant="h5" gutterBottom color="primary">
        Fitness
      </Typography>
      <Typography variant="body1" paragraph>
        My Aunt&apos;s catch phrase is &quot;Health is wealth&quot;, and I couldn&aspos;t have said
        it better myself. Maintaining physical health is crucial for mental clarity and overall
        well-being.
      </Typography>
      <Typography variant="body1">
        My favorite ways to stay fit are running, hiking, rock climbing, lifting, and yoga.
      </Typography>
    </Paper>
  </Box>
);

const HomePageContent: React.FC = () => {
  useIntersectionObserver();

  return (
    <InfiniteScrollLayout
      professionalContent={<ProfessionalContent />}
      personalContent={<PersonalContent />}
    />
  );
};

const HomePage: React.FC = () => {
  return <HomePageContent />;
};

export default HomePage;
