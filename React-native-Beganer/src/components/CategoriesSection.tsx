import React from 'react';
import { Stack, IconButton } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import SectionHeader from './common/SectionHeader';
import CategoryCard from './common/CategoryCard';
import { Category } from '../types';

interface CategoriesSectionProps {
  categories: Category[];
  onCategoryClick?: (categoryId: number | string) => void;
}

const CategoriesSection: React.FC<CategoriesSectionProps> = ({
  categories,
  onCategoryClick
}) => {
  return (
    <Stack spacing={4} sx={{ py: 5 }}>
      {/* Section Header */}
      <Stack direction="row" justifyContent="space-between" alignItems="flex-end">
        <SectionHeader label="Categories" title="Browse By Category" />
        
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

      {/* Categories Grid */}
      <Stack direction="row" spacing={4} sx={{ overflowX: 'auto', pb: 2 }}>
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            category={category}
            onClick={onCategoryClick}
          />
        ))}
      </Stack>
    </Stack>
  );
};

export default CategoriesSection;