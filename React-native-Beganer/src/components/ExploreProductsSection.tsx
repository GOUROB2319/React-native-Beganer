import React from 'react';
import { Stack, IconButton, Button, Grid } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import SectionHeader from './common/SectionHeader';
import ProductCard from './common/ProductCard';
import { Product } from '../types';

interface ExploreProductsSectionProps {
  products: Product[];
  onWishlistToggle?: (productId: number | string) => void;
  onQuickView?: (productId: number | string) => void;
  onAddToCart?: (productId: number | string) => void;
  onViewAll?: () => void;
}

const ExploreProductsSection: React.FC<ExploreProductsSectionProps> = ({
  products,
  onWishlistToggle,
  onQuickView,
  onAddToCart,
  onViewAll
}) => {
  return (
    <Stack spacing={4} sx={{ py: 5 }}>
      {/* Section Header */}
      <Stack direction="row" justifyContent="space-between" alignItems="flex-end">
        <SectionHeader label="Our Products" title="Explore Our Products" />
        
        {/* Navigation Arrows */}
        <Stack direction="row" spacing={1}>
          <IconButton 
            sx={{ 
              backgroundColor: 'grey.100',
              '&:hover': { backgroundColor: 'grey.200' }
            }}
          >
            <ChevronLeftIcon />
          </IconButton>
          <IconButton 
            sx={{ 
              backgroundColor: 'grey.100',
              '&:hover': { backgroundColor: 'grey.200' }
            }}
          >
            <ChevronRightIcon />
          </IconButton>
        </Stack>
      </Stack>

      {/* Products Grid - Two Rows */}
      <Stack spacing={4}>
        {/* First Row */}
        <Stack direction="row" spacing={4} sx={{ overflowX: 'auto', pb: 2 }}>
          {products.slice(0, 4).map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onWishlistToggle={onWishlistToggle}
              onQuickView={onQuickView}
              onAddToCart={onAddToCart}
            />
          ))}
        </Stack>

        {/* Second Row */}
        <Stack direction="row" spacing={4} sx={{ overflowX: 'auto', pb: 2 }}>
          {products.slice(4, 8).map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onWishlistToggle={onWishlistToggle}
              onQuickView={onQuickView}
              onAddToCart={onAddToCart}
            />
          ))}
        </Stack>
      </Stack>

      {/* View All Button */}
      <Stack alignItems="center" sx={{ pt: 2 }}>
        <Button
          variant="contained"
          onClick={onViewAll}
          sx={{
            backgroundColor: 'primary.main',
            color: 'primary.contrastText',
            px: 4,
            py: 1.5,
            fontSize: '16px',
            fontWeight: 500,
            textTransform: 'none',
            '&:hover': {
              backgroundColor: 'primary.dark'
            }
          }}
        >
          View All Products
        </Button>
      </Stack>
    </Stack>
  );
};

export default ExploreProductsSection;