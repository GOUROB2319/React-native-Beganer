import React from 'react';
import { Stack, Box, Typography, Button, Card } from '@mui/material';
import { styled } from '@mui/material/styles';
import SectionHeader from './common/SectionHeader';
import { NewArrival } from '../types';

const NewArrivalCard = styled(Card)<{ size: 'large' | 'medium' | 'small' }>(({ theme, size }) => ({
  position: 'relative',
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.secondary.contrastText,
  borderRadius: theme.shape.borderRadius,
  overflow: 'hidden',
  cursor: 'pointer',
  height: size === 'large' ? 600 : size === 'medium' ? 284 : 284,
  minWidth: size === 'large' ? 570 : 270,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  display: 'flex',
  alignItems: 'flex-end',
  padding: theme.spacing(4),
  '&:hover': {
    '& .arrival-button': {
      backgroundColor: 'rgba(255, 255, 255, 0.2)'
    }
  }
}));

const ArrivalContent = styled(Stack)(({ theme }) => ({
  zIndex: 2,
  maxWidth: 400
}));

const ArrivalButton = styled(Button)(({ theme }) => ({
  color: theme.palette.common.white,
  textDecoration: 'underline',
  fontSize: '16px',
  fontWeight: 500,
  fontFamily: 'Poppins',
  textTransform: 'none',
  padding: theme.spacing(0.5, 0),
  minWidth: 'auto',
  justifyContent: 'flex-start',
  '&:hover': {
    backgroundColor: 'transparent',
    textDecoration: 'underline'
  }
}));

interface NewArrivalsSectionProps {
  arrivals: NewArrival[];
  onArrivalClick?: (arrivalId: string) => void;
}

const NewArrivalsSection: React.FC<NewArrivalsSectionProps> = ({
  arrivals,
  onArrivalClick
}) => {
  const largeArrival = arrivals.find(arrival => arrival.size === 'large');
  const mediumArrival = arrivals.find(arrival => arrival.size === 'medium');
  const smallArrivals = arrivals.filter(arrival => arrival.size === 'small');

  return (
    <Stack spacing={4} sx={{ py: 5 }}>
      {/* Section Header */}
      <SectionHeader label="Featured" title="New Arrival" />

      {/* New Arrivals Layout */}
      <Stack direction="row" spacing={4} sx={{ height: 600 }}>
        {/* Large PlayStation Card */}
        {largeArrival && (
          <NewArrivalCard 
            size="large"
            sx={{ backgroundImage: `url(${largeArrival.image})` }}
            onClick={() => onArrivalClick?.(largeArrival.id)}
          >
            <ArrivalContent spacing={2}>
              <Typography 
                variant="h2" 
                sx={{ 
                  fontSize: '24px',
                  fontWeight: 600,
                  letterSpacing: '0.72px',
                  lineHeight: '24px',
                  fontFamily: 'Inter'
                }}
              >
                {largeArrival.title}
              </Typography>
              <Typography 
                variant="body2" 
                sx={{ 
                  fontSize: '14px',
                  fontWeight: 400,
                  lineHeight: '21px',
                  fontFamily: 'Poppins'
                }}
              >
                {largeArrival.description}
              </Typography>
              <ArrivalButton className="arrival-button">
                {largeArrival.buttonText}
              </ArrivalButton>
            </ArrivalContent>
          </NewArrivalCard>
        )}

        {/* Right Column */}
        <Stack spacing={4}>
          {/* Women's Collections */}
          {mediumArrival && (
            <NewArrivalCard 
              size="medium"
              sx={{ backgroundImage: `url(${mediumArrival.image})` }}
              onClick={() => onArrivalClick?.(mediumArrival.id)}
            >
              <ArrivalContent spacing={2}>
                <Typography 
                  variant="h2" 
                  sx={{ 
                    fontSize: '24px',
                    fontWeight: 600,
                    letterSpacing: '0.72px',
                    lineHeight: '24px',
                    fontFamily: 'Inter'
                  }}
                >
                  {mediumArrival.title}
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    fontSize: '14px',
                    fontWeight: 400,
                    lineHeight: '21px',
                    fontFamily: 'Poppins'
                  }}
                >
                  {mediumArrival.description}
                </Typography>
                <ArrivalButton className="arrival-button">
                  {mediumArrival.buttonText}
                </ArrivalButton>
              </ArrivalContent>
            </NewArrivalCard>
          )}

          {/* Bottom Row - Speakers and Perfume */}
          <Stack direction="row" spacing={4}>
            {smallArrivals.map((arrival) => (
              <NewArrivalCard 
                key={arrival.id}
                size="small"
                sx={{ backgroundImage: `url(${arrival.image})` }}
                onClick={() => onArrivalClick?.(arrival.id)}
              >
                <ArrivalContent spacing={2}>
                  <Typography 
                    variant="h2" 
                    sx={{ 
                      fontSize: '24px',
                      fontWeight: 600,
                      letterSpacing: '0.72px',
                      lineHeight: '24px',
                      fontFamily: 'Inter'
                    }}
                  >
                    {arrival.title}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      fontSize: '14px',
                      fontWeight: 400,
                      lineHeight: '21px',
                      fontFamily: 'Poppins'
                    }}
                  >
                    {arrival.description}
                  </Typography>
                  <ArrivalButton className="arrival-button">
                    {arrival.buttonText}
                  </ArrivalButton>
                </ArrivalContent>
              </NewArrivalCard>
            ))}
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default NewArrivalsSection;