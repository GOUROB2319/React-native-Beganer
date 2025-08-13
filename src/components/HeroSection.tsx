import React from 'react';
import {
  Box,
  Stack,
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
  Paper
} from '@mui/material';
import { styled } from '@mui/material/styles';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { HeroSlide, Category } from '../types';

const HeroContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  minHeight: 384,
  display: 'flex'
}));

const Sidebar = styled(Paper)(({ theme }) => ({
  width: 217,
  backgroundColor: 'transparent',
  boxShadow: 'none',
  borderRight: `1px solid ${theme.palette.grey[300]}`,
  padding: theme.spacing(2, 0)
}));

const SidebarItem = styled(ListItem)(({ theme }) => ({
  padding: theme.spacing(1, 2),
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: theme.palette.grey[50]
  }
}));

const HeroBanner = styled(Box)(({ theme }) => ({
  flex: 1,
  backgroundImage: 'url(/images/hero-iphone.svg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 4),
  position: 'relative'
}));

const HeroContent = styled(Stack)(({ theme }) => ({
  color: theme.palette.common.white,
  maxWidth: 400,
  zIndex: 2
}));

const CarouselIndicators = styled(Stack)(({ theme }) => ({
  position: 'absolute',
  bottom: 16,
  left: '50%',
  transform: 'translateX(-50%)',
  direction: 'row',
  spacing: 1
}));

const Indicator = styled(Box)<{ active?: boolean }>(({ theme, active }) => ({
  width: 12,
  height: 12,
  borderRadius: '50%',
  backgroundColor: active ? theme.palette.common.white : 'rgba(255, 255, 255, 0.5)',
  cursor: 'pointer'
}));

interface HeroSectionProps {
  heroSlides: HeroSlide[];
  sidebarCategories: Category[];
  onCategoryClick?: (category: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  heroSlides,
  sidebarCategories,
  onCategoryClick
}) => {
  const activeSlide = heroSlides.find(slide => slide.isActive) || heroSlides[0];

  return (
    <HeroContainer>
      {/* Sidebar Navigation */}
      <Sidebar>
        <List sx={{ p: 0 }}>
          {sidebarCategories.map((category, index) => (
            <SidebarItem 
              key={index}
              onClick={() => onCategoryClick?.(category.name)}
            >
              <ListItemText 
                primary={category.name}
                primaryTypographyProps={{
                  fontSize: '16px',
                  fontWeight: 400,
                  fontFamily: 'Poppins'
                }}
              />
              {category.hasSubmenu && (
                <ChevronRightIcon sx={{ fontSize: 20 }} />
              )}
            </SidebarItem>
          ))}
        </List>
      </Sidebar>

      {/* Hero Banner */}
      <HeroBanner>
        <HeroContent spacing={3}>
          <Stack direction="row" spacing={2} alignItems="center">
            <Box 
              component="img" 
              src="/images/hero-iphone.svg" 
              alt="Apple"
              sx={{ width: 40, height: 49 }}
            />
            <Typography 
              variant="body1" 
              sx={{ 
                fontSize: '16px',
                fontWeight: 400,
                fontFamily: 'Poppins'
              }}
            >
              {activeSlide.title}
            </Typography>
          </Stack>
          
          <Typography 
            variant="h1" 
            sx={{ 
              fontSize: '48px',
              fontWeight: 600,
              lineHeight: '60px',
              letterSpacing: '4%',
              fontFamily: 'Inter'
            }}
          >
            {activeSlide.subtitle}
          </Typography>
          
          <Stack direction="row" spacing={1} alignItems="center">
            <Button
              variant="text"
              sx={{
                color: 'white',
                textDecoration: 'underline',
                fontSize: '16px',
                fontWeight: 500,
                fontFamily: 'Poppins',
                textTransform: 'none',
                p: 0,
                minWidth: 'auto',
                '&:hover': {
                  backgroundColor: 'transparent'
                }
              }}
            >
              {activeSlide.buttonText}
            </Button>
            <ChevronRightIcon sx={{ color: 'white' }} />
          </Stack>
        </HeroContent>

        {/* Carousel Indicators */}
        <CarouselIndicators direction="row" spacing={1}>
          {heroSlides.map((slide, index) => (
            <Indicator 
              key={slide.id} 
              active={slide.isActive}
            />
          ))}
        </CarouselIndicators>
      </HeroBanner>
    </HeroContainer>
  );
};

export default HeroSection;