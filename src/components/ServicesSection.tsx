import React from 'react';
import { Stack, Box, Typography, Icon } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Service } from '../types';

const ServiceCard = styled(Stack)(({ theme }) => ({
  alignItems: 'center',
  textAlign: 'center',
  spacing: 3,
  padding: theme.spacing(4, 2)
}));

const ServiceIcon = styled(Box)(({ theme }) => ({
  width: 80,
  height: 80,
  borderRadius: '50%',
  backgroundColor: theme.palette.grey[300],
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    width: 58,
    height: 58,
    borderRadius: '50%',
    backgroundColor: theme.palette.secondary.main
  }
}));

interface ServicesSectionProps {
  services: Service[];
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ services }) => {
  return (
    <Stack 
      direction="row" 
      spacing={11} 
      justifyContent="center" 
      sx={{ py: 8 }}
    >
      {services.map((service) => (
        <ServiceCard key={service.id} spacing={3}>
          <ServiceIcon>
            <Icon 
              sx={{ 
                fontSize: 40, 
                color: 'white', 
                zIndex: 1 
              }}
            >
              {service.icon}
            </Icon>
          </ServiceIcon>
          <Stack spacing={2} alignItems="center">
            <Typography 
              variant="h3" 
              sx={{ 
                fontSize: '20px',
                fontWeight: 600,
                lineHeight: '28px',
                fontFamily: 'Poppins'
              }}
            >
              {service.title}
            </Typography>
            <Typography 
              variant="body2" 
              sx={{ 
                fontSize: '14px',
                fontWeight: 400,
                fontFamily: 'Poppins',
                maxWidth: 250
              }}
            >
              {service.description}
            </Typography>
          </Stack>
        </ServiceCard>
      ))}
    </Stack>
  );
};

export default ServicesSection;