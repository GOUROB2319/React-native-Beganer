import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import CountdownTimer from './common/CountdownTimer';
import { CountdownTimer as CountdownTimerType } from '../types';

const BannerContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.secondary.contrastText,
  minHeight: 500,
  backgroundImage: 'url(/images/music-banner.svg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 4),
  position: 'relative'
}));

const BannerContent = styled(Stack)(({ theme }) => ({
  maxWidth: 500,
  zIndex: 2
}));

const CategoryLabel = styled(Typography)(({ theme }) => ({
  color: '#00ff66',
  fontSize: '16px',
  fontWeight: 600,
  fontFamily: 'Poppins',
  marginBottom: theme.spacing(2)
}));

const BuyButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#00ff66',
  color: theme.palette.secondary.main,
  fontSize: '16px',
  fontWeight: 500,
  fontFamily: 'Poppins',
  textTransform: 'none',
  padding: theme.spacing(1.5, 4),
  borderRadius: theme.shape.borderRadius,
  '&:hover': {
    backgroundColor: '#00cc52'
  }
}));

interface MusicExperienceBannerProps {
  title: string;
  countdown: CountdownTimerType;
  buttonText: string;
  image: string;
  onButtonClick?: () => void;
}

const MusicExperienceBanner: React.FC<MusicExperienceBannerProps> = ({
  title,
  countdown,
  buttonText,
  onButtonClick
}) => {
  return (
    <BannerContainer sx={{ my: 8 }}>
      <BannerContent spacing={4}>
        <CategoryLabel>Categories</CategoryLabel>
        
        <Typography 
          variant="h1" 
          sx={{ 
            fontSize: '48px',
            fontWeight: 600,
            lineHeight: '60px',
            fontFamily: 'Inter',
            color: 'white',
            maxWidth: 400
          }}
        >
          {title}
        </Typography>
        
        <CountdownTimer initialTime={countdown} variant="music" />
        
        <BuyButton onClick={onButtonClick}>
          {buttonText}
        </BuyButton>
      </BannerContent>
    </BannerContainer>
  );
};

export default MusicExperienceBanner;