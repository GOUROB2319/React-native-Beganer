import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Stack,
  TextField,
  InputAdornment,
  IconButton,
  Box,
  Button
} from '@mui/material';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const TopBanner = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.secondary.contrastText,
  padding: '12px 0',
  textAlign: 'center'
}));

const MainHeader = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  boxShadow: 'none',
  borderBottom: `1px solid ${theme.palette.grey[200]}`
}));

const Logo = styled(Typography)(({ theme }) => ({
  fontFamily: 'Inter',
  fontSize: '24px',
  fontWeight: 700,
  letterSpacing: '0.72px',
  lineHeight: '24px',
  color: theme.palette.text.primary
}));

const NavButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  textTransform: 'none',
  fontSize: '16px',
  fontWeight: 400,
  padding: '8px 16px',
  '&.active': {
    borderBottom: `2px solid ${theme.palette.text.primary}`
  }
}));

const SearchField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    backgroundColor: theme.palette.grey[100],
    borderRadius: theme.shape.borderRadius,
    '& fieldset': {
      border: 'none'
    }
  },
  '& .MuiInputBase-input': {
    padding: '12px 14px',
    fontSize: '12px',
    fontWeight: 400,
    opacity: 0.5
  }
}));

interface HeaderProps {
  onSearch?: (query: string) => void;
  onWishlistClick?: () => void;
  onCartClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({
  onSearch,
  onWishlistClick,
  onCartClick
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeNav, setActiveNav] = useState('Home');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);
    onSearch?.(query);
  };

  const handleNavClick = (navItem: string) => {
    setActiveNav(navItem);
  };

  return (
    <>
      {/* Top Banner */}
      <TopBanner>
        <Stack 
          direction="row" 
          justifyContent="space-between" 
          alignItems="center"
          sx={{ maxWidth: 1200, mx: 'auto', px: 3 }}
        >
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography variant="body2" sx={{ fontSize: '14px', fontWeight: 400 }}>
              Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            </Typography>
            <Button 
              variant="text" 
              sx={{ 
                color: 'inherit', 
                textDecoration: 'underline',
                fontSize: '14px',
                fontWeight: 600,
                textTransform: 'none',
                p: 0,
                minWidth: 'auto'
              }}
            >
              ShopNow
            </Button>
          </Stack>
          <Stack direction="row" spacing={0.5} alignItems="center">
            <Typography variant="body2" sx={{ fontSize: '14px' }}>
              English
            </Typography>
            <KeyboardArrowDownIcon sx={{ fontSize: 16 }} />
          </Stack>
        </Stack>
      </TopBanner>

      {/* Main Header */}
      <MainHeader position="static">
        <Toolbar sx={{ maxWidth: 1200, width: '100%', mx: 'auto', px: 3 }}>
          <Stack 
            direction="row" 
            justifyContent="space-between" 
            alignItems="center"
            sx={{ width: '100%' }}
          >
            {/* Logo and Navigation */}
            <Stack direction="row" spacing={12} alignItems="center">
              <Logo>Exclusive</Logo>
              <Stack direction="row" spacing={6}>
                {['Home', 'Contact', 'About', 'Sign Up'].map((item) => (
                  <NavButton
                    key={item}
                    className={activeNav === item ? 'active' : ''}
                    onClick={() => handleNavClick(item)}
                  >
                    {item}
                  </NavButton>
                ))}
              </Stack>
            </Stack>

            {/* Search and Actions */}
            <Stack direction="row" spacing={3} alignItems="center">
              <SearchField
                placeholder="What are you looking for?"
                value={searchQuery}
                onChange={handleSearchChange}
                size="small"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <SearchIcon sx={{ color: 'text.primary' }} />
                    </InputAdornment>
                  )
                }}
                sx={{ width: 243 }}
              />
              <Stack direction="row" spacing={2}>
                <IconButton onClick={onWishlistClick}>
                  <FavoriteBorderIcon />
                </IconButton>
                <IconButton onClick={onCartClick}>
                  <ShoppingCartIcon />
                </IconButton>
              </Stack>
            </Stack>
          </Stack>
        </Toolbar>
      </MainHeader>
    </>
  );
};

export default Header;