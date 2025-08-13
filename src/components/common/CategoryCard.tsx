import React from 'react';
import { Card, CardContent, Typography, Stack, Icon } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Category } from '../../types';

// Material UI icon mapping
const iconMap: Record<string, string> = {
  phone: 'phone_android',
  computer: 'computer',
  watch: 'watch',
  camera: 'camera_alt',
  headphones: 'headphones',
  games: 'sports_esports'
};

const CategoryCardContainer = styled(Card)<{ isActive?: boolean }>(({ theme, isActive }) => ({
  border: `1px solid ${isActive ? 'transparent' : 'rgba(0, 0, 0, 0.30)'}`,
  borderRadius: theme.shape.borderRadius,
  backgroundColor: isActive ? theme.palette.primary.main : 'transparent',
  color: isActive ? theme.palette.primary.contrastText : theme.palette.text.primary,
  cursor: 'pointer',
  transition: 'all 0.2s ease-in-out',
  boxShadow: isActive ? '0px 1px 13px rgba(0, 0, 0, 0.05)' : 'none',
  '&:hover': {
    backgroundColor: isActive ? theme.palette.primary.main : theme.palette.grey[50],
    borderColor: isActive ? 'transparent' : theme.palette.primary.main
  }
}));

interface CategoryCardProps {
  category: Category;
  onClick?: (categoryId: number | string) => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, onClick }) => {
  const handleClick = () => {
    onClick?.(category.id);
  };

  return (
    <CategoryCardContainer isActive={category.isActive} onClick={handleClick}>
      <CardContent sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center',
        minHeight: 145,
        p: 3
      }}>
        <Stack spacing={2} alignItems="center">
          <Icon sx={{ fontSize: 46 }}>
            {iconMap[category.icon || 'category'] || 'category'}
          </Icon>
          <Typography 
            variant="body1" 
            sx={{ 
              fontSize: '16px',
              fontWeight: 400,
              textAlign: 'center'
            }}
          >
            {category.name}
          </Typography>
        </Stack>
      </CardContent>
    </CategoryCardContainer>
  );
};

export default CategoryCard;