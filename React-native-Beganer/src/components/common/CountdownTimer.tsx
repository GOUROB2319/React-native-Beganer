import React, { useState, useEffect } from 'react';
import { Stack, Typography, Box } from '@mui/material';
import { CountdownTimer as CountdownTimerType } from '../../types';
import { formatCountdown } from '../../utils/formatters';

interface CountdownTimerProps {
  initialTime: CountdownTimerType;
  variant?: 'default' | 'music';
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ 
  initialTime, 
  variant = 'default' 
}) => {
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prevTime => {
        let { days = 0, hours, minutes, seconds } = prevTime;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeUnit = ({ label, value }: { label: string; value: number }) => (
    <Stack spacing={0.5} alignItems="center">
      <Typography 
        variant="body2" 
        sx={{ 
          fontSize: variant === 'music' ? '11px' : '12px',
          fontWeight: 500,
          color: variant === 'music' ? '#ffffff' : 'text.primary'
        }}
      >
        {label}
      </Typography>
      <Typography 
        variant="h3"
        sx={{ 
          fontSize: variant === 'music' ? '32px' : '32px',
          fontWeight: 700,
          letterSpacing: '1.28px',
          lineHeight: '30px',
          fontFamily: 'Inter',
          color: variant === 'music' ? '#ffffff' : 'text.primary'
        }}
      >
        {formatCountdown(value)}
      </Typography>
    </Stack>
  );

  const Separator = () => (
    <Box sx={{ 
      width: 4, 
      height: 16, 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'space-between',
      alignItems: 'center',
      mt: 3
    }}>
      <Box sx={{ 
        width: 4, 
        height: 4, 
        borderRadius: '50%', 
        backgroundColor: variant === 'music' ? '#ffffff' : 'primary.main' 
      }} />
      <Box sx={{ 
        width: 4, 
        height: 4, 
        borderRadius: '50%', 
        backgroundColor: variant === 'music' ? '#ffffff' : 'primary.main' 
      }} />
    </Box>
  );

  return (
    <Stack direction="row" spacing={variant === 'music' ? 3 : 2} alignItems="flex-start">
      {time.days !== undefined && (
        <>
          <TimeUnit label="Days" value={time.days} />
          <Separator />
        </>
      )}
      <TimeUnit label="Hours" value={time.hours} />
      <Separator />
      <TimeUnit label="Minutes" value={time.minutes} />
      <Separator />
      <TimeUnit label="Seconds" value={time.seconds} />
    </Stack>
  );
};

export default CountdownTimer;