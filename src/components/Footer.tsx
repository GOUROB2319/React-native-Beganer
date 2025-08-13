import React, { useState } from 'react';
import {
  Box,
  Stack,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
  Divider,
  Link
} from '@mui/material';
import { styled } from '@mui/material/styles';
import SendIcon from '@mui/icons-material/Send';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CopyrightIcon from '@mui/icons-material/Copyright';

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.secondary.contrastText,
  padding: theme.spacing(8, 0, 3, 0)
}));

const FooterContent = styled(Stack)(({ theme }) => ({
  maxWidth: 1200,
  margin: '0 auto',
  padding: theme.spacing(0, 3)
}));

const FooterSection = styled(Stack)(({ theme }) => ({
  spacing: 2
}));

const FooterTitle = styled(Typography)(({ theme }) => ({
  fontSize: '20px',
  fontWeight: 500,
  lineHeight: '28px',
  fontFamily: 'Poppins',
  marginBottom: theme.spacing(3)
}));

const FooterLink = styled(Link)(({ theme }) => ({
  color: theme.palette.secondary.contrastText,
  textDecoration: 'none',
  fontSize: '16px',
  fontWeight: 400,
  fontFamily: 'Poppins',
  cursor: 'pointer',
  '&:hover': {
    textDecoration: 'underline'
  }
}));

const SubscriptionField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderColor: theme.palette.secondary.contrastText,
    color: theme.palette.secondary.contrastText,
    '& fieldset': {
      borderColor: theme.palette.secondary.contrastText
    },
    '&:hover fieldset': {
      borderColor: theme.palette.secondary.contrastText
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.secondary.contrastText
    }
  },
  '& .MuiInputBase-input': {
    color: theme.palette.secondary.contrastText,
    '&::placeholder': {
      color: theme.palette.secondary.contrastText,
      opacity: 0.4
    }
  }
}));

const AppDownloadImage = styled('img')(({ theme }) => ({
  height: 40,
  cursor: 'pointer',
  '&:hover': {
    opacity: 0.8
  }
}));

interface FooterProps {
  onSubscribe?: (email: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onSubscribe }) => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setEmail(value);
    if (emailError && validateEmail(value)) {
      setEmailError('');
    }
  };

  const handleSubscribe = () => {
    if (!email) {
      setEmailError('Email is required');
      return;
    }
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email');
      return;
    }
    onSubscribe?.(email);
    setEmail('');
    setEmailError('');
  };

  return (
    <FooterContainer>
      <FooterContent spacing={6}>
        {/* Main Footer Content */}
        <Stack direction="row" spacing={11} justifyContent="space-between">
          {/* Exclusive Section */}
          <FooterSection spacing={3}>
            <Stack spacing={2}>
              <Typography 
                variant="h2" 
                sx={{ 
                  fontSize: '24px',
                  fontWeight: 700,
                  letterSpacing: '0.72px',
                  lineHeight: '24px',
                  fontFamily: 'Inter'
                }}
              >
                Exclusive
              </Typography>
              <FooterTitle>Subscribe</FooterTitle>
            </Stack>
            <Typography 
              variant="body1" 
              sx={{ 
                fontSize: '16px',
                fontWeight: 400,
                fontFamily: 'Poppins',
                mb: 2
              }}
            >
              Get 10% off your first order
            </Typography>
            <SubscriptionField
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
              error={!!emailError}
              helperText={emailError}
              size="small"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton 
                      onClick={handleSubscribe}
                      sx={{ color: 'white' }}
                    >
                      <SendIcon />
                    </IconButton>
                  </InputAdornment>
                )
              }}
              sx={{ maxWidth: 217 }}
            />
          </FooterSection>

          {/* Support Section */}
          <FooterSection spacing={3}>
            <FooterTitle>Support</FooterTitle>
            <Stack spacing={2}>
              <Typography 
                variant="body1" 
                sx={{ 
                  fontSize: '16px',
                  fontWeight: 400,
                  lineHeight: '24px',
                  fontFamily: 'Poppins',
                  maxWidth: 175
                }}
              >
                111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
              </Typography>
              <FooterLink>exclusive@gmail.com</FooterLink>
              <FooterLink>+88015-88888-9999</FooterLink>
            </Stack>
          </FooterSection>

          {/* Account Section */}
          <FooterSection spacing={3}>
            <FooterTitle>Account</FooterTitle>
            <Stack spacing={2}>
              <FooterLink>My Account</FooterLink>
              <FooterLink>Login / Register</FooterLink>
              <FooterLink>Cart</FooterLink>
              <FooterLink>Wishlist</FooterLink>
              <FooterLink>Shop</FooterLink>
            </Stack>
          </FooterSection>

          {/* Quick Link Section */}
          <FooterSection spacing={3}>
            <FooterTitle>Quick Link</FooterTitle>
            <Stack spacing={2}>
              <FooterLink>Privacy Policy</FooterLink>
              <FooterLink>Terms Of Use</FooterLink>
              <FooterLink>FAQ</FooterLink>
              <FooterLink>Contact</FooterLink>
            </Stack>
          </FooterSection>

          {/* Download App Section */}
          <FooterSection spacing={3}>
            <FooterTitle>Download App</FooterTitle>
            <Stack spacing={3}>
              <Typography 
                variant="body2" 
                sx={{ 
                  fontSize: '12px',
                  fontWeight: 500,
                  fontFamily: 'Poppins',
                  opacity: 0.7
                }}
              >
                Save $3 with App New User Only
              </Typography>
              <Stack direction="row" spacing={1} alignItems="center">
                <Box 
                  component="img"
                  src="/images/qr-code.jpg"
                  alt="QR Code"
                  sx={{ 
                    width: 80, 
                    height: 80,
                    border: '2.5px solid white'
                  }}
                />
                <Stack spacing={1}>
                  <AppDownloadImage 
                    src="/images/google-play.svg" 
                    alt="Google Play"
                  />
                  <AppDownloadImage 
                    src="/images/app-store.png" 
                    alt="App Store"
                  />
                </Stack>
              </Stack>
            </Stack>
            <Stack direction="row" spacing={3} sx={{ mt: 3 }}>
              <IconButton sx={{ color: 'white' }}>
                <FacebookIcon />
              </IconButton>
              <IconButton sx={{ color: 'white' }}>
                <TwitterIcon />
              </IconButton>
              <IconButton sx={{ color: 'white' }}>
                <InstagramIcon />
              </IconButton>
              <IconButton sx={{ color: 'white' }}>
                <LinkedInIcon />
              </IconButton>
            </Stack>
          </FooterSection>
        </Stack>

        {/* Footer Bottom */}
        <Stack spacing={2}>
          <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.2)' }} />
          <Stack 
            direction="row" 
            spacing={0.75} 
            alignItems="center" 
            justifyContent="center"
          >
            <CopyrightIcon sx={{ fontSize: 16 }} />
            <Typography 
              variant="body1" 
              sx={{ 
                fontSize: '16px',
                fontWeight: 400,
                fontFamily: 'Poppins',
                color: 'rgba(255, 255, 255, 0.4)'
              }}
            >
              Copyright Rimel 2022. All right reserved
            </Typography>
          </Stack>
        </Stack>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;