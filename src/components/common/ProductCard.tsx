import React, { useState } from 'react';
import { 
  Card, 
  CardMedia, 
  CardContent, 
  Typography, 
  Stack, 
  IconButton, 
  Button, 
  Box, 
  Rating,
  Chip
} from '@mui/material';
import { styled } from '@mui/material/styles';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Product } from '../../types';
import { formatPrice, formatDiscountPercentage } from '../../utils/formatters';

const ProductCardContainer = styled(Card)(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.grey[100],
  borderRadius: theme.shape.borderRadius,
  overflow: 'hidden',
  '&:hover .product-actions': {
    opacity: 1
  }
}));

const ProductActions = styled(Stack)(({ theme }) => ({
  position: 'absolute',
  top: 12,
  right: 12,
  opacity: 0,
  transition: 'opacity 0.2s ease-in-out',
  zIndex: 2
}));

const DiscountBadge = styled(Chip)(({ theme }) => ({
  position: 'absolute',
  top: 12,
  left: 12,
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  fontSize: '12px',
  fontWeight: 400,
  zIndex: 2
}));

const StatusBadge = styled(Chip)(({ theme }) => ({
  position: 'absolute',
  top: 12,
  left: 12,
  backgroundColor: '#00ff66',
  color: '#ffffff',
  fontSize: '12px',
  fontWeight: 400,
  zIndex: 2
}));

const AddToCartButton = styled(Button)(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.secondary.contrastText,
  borderRadius: 0,
  padding: '8px 16px',
  '&:hover': {
    backgroundColor: theme.palette.secondary.dark
  }
}));

const ColorVariants = styled(Stack)(({ theme }) => ({
  direction: 'row',
  spacing: 1,
  marginTop: theme.spacing(1)
}));

const ColorCircle = styled(Box)(({ theme }) => ({
  width: 20,
  height: 20,
  borderRadius: '50%',
  cursor: 'pointer',
  border: '2px solid transparent',
  '&:hover': {
    borderColor: theme.palette.grey[400]
  }
}));

interface ProductCardProps {
  product: Product;
  onWishlistToggle?: (productId: number | string) => void;
  onQuickView?: (productId: number | string) => void;
  onAddToCart?: (productId: number | string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onWishlistToggle,
  onQuickView,
  onAddToCart
}) => {
  const [selectedColor, setSelectedColor] = useState(0);

  const handleWishlistClick = () => {
    onWishlistToggle?.(product.id);
  };

  const handleQuickViewClick = () => {
    onQuickView?.(product.id);
  };

  const handleAddToCartClick = () => {
    onAddToCart?.(product.id);
  };

  return (
    <ProductCardContainer>
      {/* Discount Badge */}
      {product.discount && (
        <DiscountBadge 
          label={formatDiscountPercentage(product.discount)} 
          size="small"
        />
      )}
      
      {/* Status Badge */}
      {product.status === 'new' && (
        <StatusBadge 
          label="NEW" 
          size="small"
        />
      )}

      {/* Product Actions */}
      <ProductActions className="product-actions" spacing={1}>
        <IconButton
          size="small"
          onClick={handleWishlistClick}
          sx={{ 
            backgroundColor: 'white',
            '&:hover': { backgroundColor: 'grey.100' }
          }}
        >
          {product.isWishlisted ? (
            <FavoriteIcon sx={{ color: 'primary.main' }} />
          ) : (
            <FavoriteBorderIcon />
          )}
        </IconButton>
        <IconButton
          size="small"
          onClick={handleQuickViewClick}
          sx={{ 
            backgroundColor: 'white',
            '&:hover': { backgroundColor: 'grey.100' }
          }}
        >
          <VisibilityIcon />
        </IconButton>
      </ProductActions>

      {/* Product Image */}
      <Box sx={{ position: 'relative', height: 250, display: 'flex', alignItems: 'center', justifyContent: 'center', p: 2 }}>
        <CardMedia
          component="img"
          image={product.image}
          alt={product.name}
          sx={{ 
            maxHeight: '100%',
            maxWidth: '100%',
            objectFit: 'contain'
          }}
        />
        
        {/* Add to Cart Button */}
        {product.hasAddToCart && (
          <AddToCartButton onClick={handleAddToCartClick}>
            Add To Cart
          </AddToCartButton>
        )}
      </Box>

      {/* Product Details */}
      <CardContent sx={{ p: 2 }}>
        <Typography 
          variant="body1" 
          sx={{ 
            fontWeight: 500,
            fontSize: '16px',
            mb: 1,
            lineHeight: 1.2
          }}
        >
          {product.name}
        </Typography>
        
        <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 1 }}>
          <Typography 
            variant="body1" 
            sx={{ 
              color: 'primary.main',
              fontWeight: 500,
              fontSize: '16px'
            }}
          >
            {formatPrice(product.currentPrice)}
          </Typography>
          {product.originalPrice && (
            <Typography 
              variant="body1" 
              sx={{ 
                color: 'text.secondary',
                fontWeight: 500,
                fontSize: '16px',
                textDecoration: 'line-through',
                opacity: 0.5
              }}
            >
              {formatPrice(product.originalPrice)}
            </Typography>
          )}
        </Stack>

        <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
          <Rating 
            value={product.rating} 
            readOnly 
            size="small"
            sx={{ color: '#FFAD33' }}
          />
          <Typography 
            variant="body2" 
            sx={{ 
              color: 'text.secondary',
              fontSize: '14px',
              fontWeight: 600,
              opacity: 0.5
            }}
          >
            ({product.reviewCount})
          </Typography>
        </Stack>

        {/* Color Variants */}
        {product.colors && product.colors.length > 0 && (
          <ColorVariants direction="row" spacing={1}>
            {product.colors.map((color, index) => (
              <ColorCircle
                key={index}
                onClick={() => setSelectedColor(index)}
                sx={{
                  backgroundColor: color,
                  borderColor: selectedColor === index ? 'grey.400' : 'transparent'
                }}
              />
            ))}
          </ColorVariants>
        )}
      </CardContent>
    </ProductCardContainer>
  );
};

export default ProductCard;