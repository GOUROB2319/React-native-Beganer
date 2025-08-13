import React from 'react';
import { Stack, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const RedIndicator = styled(Box)(({ theme }) => ({
  width: 20,
  height: 40,
  backgroundColor: theme.palette.primary.main,
  borderRadius: theme.shape.borderRadius
}));

interface SectionHeaderProps {
  label: string;
  title: string;
  showIndicator?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  label, 
  title, 
  showIndicator = true 
}) => {
  return (
    <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 3 }}>
      {showIndicator && <RedIndicator />}
      <Stack spacing={2}>
        <Typography 
          variant="body1" 
          sx={{ 
            color: 'primary.main',
            fontWeight: 600,
            fontSize: '16px',
            lineHeight: '20px'
          }}
        >
          {label}
        </Typography>
        <Typography 
          variant="h1"
          sx={{ 
            fontSize: '36px',
            fontWeight: 600,
            letterSpacing: '1.44px',
            fontFamily: 'Inter'
          }}
        >
          {title}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default SectionHeader;