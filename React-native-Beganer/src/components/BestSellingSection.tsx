import React from 'react';
import { Stack, Button } from '@mui/material';
import SectionHeader from './common/SectionHeader';
import ProductCard from './common/ProductCard';
import { Product } from '../types';

interface BestSellingSectionProps {
  products: Product[];
  onWishlistToggle?: (productId: number | string) => void;
  onQuickView?: (productId: number | string) => void;
  onAddToCart?: (productId: number | string) => void;
  onViewAll?: () => void;
}

const BestSellingSection: React.FC<BestSellingSectionProps> = ({
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
        <SectionHeader label="This Month" title="Best Selling Products" />
        
        {/* View All Button */}
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
          View All
        </Button>
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
    </Stack>
  );
};

export default BestSellingSection;