import React from 'react';
import { Stack, IconButton, Button } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import SectionHeader from './common/SectionHeader';
import CountdownTimer from './common/CountdownTimer';
import ProductCard from './common/ProductCard';
import { Product, CountdownTimer as CountdownTimerType } from '../types';

interface FlashSalesSectionProps {
  products: Product[];
  countdown: CountdownTimerType;
  onWishlistToggle?: (productId: number | string) => void;
  onQuickView?: (productId: number | string) => void;
  onAddToCart?: (productId: number | string) => void;
  onViewAll?: () => void;
}

const FlashSalesSection: React.FC<FlashSalesSectionProps> = ({
  products,
  countdown,
  onWishlistToggle,
  onQuickView,
  onAddToCart,
  onViewAll
}) => {
  return (
    <Stack spacing={4} sx={{ py: 5 }}>
      {/* Section Header with Countdown */}
      <Stack direction="row" justifyContent="space-between" alignItems="flex-end">
        <Stack direction="row" spacing={8} alignItems="flex-end">
          <SectionHeader label="Today's" title="Flash Sales" />
          <CountdownTimer initialTime={countdown} />
        </Stack>
        
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

      {/* Products Grid */}
      <Stack direction="row" spacing={4} sx={{ overflowX: 'auto', pb: 2 }}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onWishlistToggle={onWishlistToggle}
            onQuickView={onQuickView}
            onAddToCart={onAddToCart}
          />
        ))}
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

export default FlashSalesSection;