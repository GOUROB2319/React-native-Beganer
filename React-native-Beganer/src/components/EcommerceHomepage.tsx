import React, { useState } from 'react';
import { Box, Container, Divider, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Header from './Header';
import HeroSection from './HeroSection';
import FlashSalesSection from './FlashSalesSection';
import CategoriesSection from './CategoriesSection';
import BestSellingSection from './BestSellingSection';
import MusicExperienceBanner from './MusicExperienceBanner';
import ExploreProductsSection from './ExploreProductsSection';
import NewArrivalsSection from './NewArrivalsSection';
import ServicesSection from './ServicesSection';
import Footer from './Footer';
import { EcommerceHomepageProps } from '../types';

const PageContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  backgroundColor: theme.palette.background.default
}));

const ContentContainer = styled(Container)(({ theme }) => ({
  maxWidth: 1200,
  padding: theme.spacing(0, 3)
}));

const SectionDivider = styled(Divider)(({ theme }) => ({
  margin: theme.spacing(5, 0),
  borderColor: 'rgba(0, 0, 0, 0.1)'
}));

const ScrollToTopButton = styled(IconButton)(({ theme }) => ({
  position: 'fixed',
  bottom: 32,
  right: 32,
  backgroundColor: theme.palette.grey[100],
  color: theme.palette.text.primary,
  '&:hover': {
    backgroundColor: theme.palette.grey[200]
  },
  zIndex: 1000
}));

const EcommerceHomepage: React.FC<EcommerceHomepageProps> = ({
  heroSlides,
  flashSaleCountdown,
  flashSaleProducts,
  categories,
  bestSellingProducts,
  exploreProducts,
  musicExperienceBanner,
  newArrivals,
  services,
  sidebarCategories
}) => {
  const [wishlistedProducts, setWishlistedProducts] = useState<Set<number | string>>(new Set());
  const [cartItems, setCartItems] = useState<Set<number | string>>(new Set());

  const handleWishlistToggle = (productId: number | string) => {
    setWishlistedProducts(prev => {
      const newSet = new Set(prev);
      if (newSet.has(productId)) {
        newSet.delete(productId);
      } else {
        newSet.add(productId);
      }
      return newSet;
    });
  };

  const handleAddToCart = (productId: number | string) => {
    setCartItems(prev => new Set(prev).add(productId));
    console.log(`Added product ${productId} to cart`);
  };

  const handleQuickView = (productId: number | string) => {
    console.log(`Quick view for product ${productId}`);
  };

  const handleCategoryClick = (categoryId: number | string) => {
    console.log(`Category clicked: ${categoryId}`);
  };

  const handleSearch = (query: string) => {
    console.log(`Search query: ${query}`);
  };

  const handleViewAll = () => {
    console.log('View all products clicked');
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubscribe = (email: string) => {
    console.log(`Subscribed email: ${email}`);
  };

  // Update products with wishlist status
  const updateProductsWithWishlist = (products: any[]) => {
    return products.map(product => ({
      ...product,
      isWishlisted: wishlistedProducts.has(product.id)
    }));
  };

  return (
    <PageContainer>
      {/* Header */}
      <Header 
        onSearch={handleSearch}
        onWishlistClick={() => console.log('Wishlist clicked')}
        onCartClick={() => console.log('Cart clicked')}
      />

      {/* Hero Section */}
      <HeroSection
        heroSlides={heroSlides}
        sidebarCategories={sidebarCategories}
        onCategoryClick={handleCategoryClick}
      />

      <ContentContainer>
        {/* Flash Sales Section */}
        <FlashSalesSection
          products={updateProductsWithWishlist(flashSaleProducts)}
          countdown={flashSaleCountdown}
          onWishlistToggle={handleWishlistToggle}
          onQuickView={handleQuickView}
          onAddToCart={handleAddToCart}
          onViewAll={handleViewAll}
        />

        <SectionDivider />

        {/* Categories Section */}
        <CategoriesSection
          categories={categories}
          onCategoryClick={handleCategoryClick}
        />

        <SectionDivider />

        {/* Best Selling Section */}
        <BestSellingSection
          products={updateProductsWithWishlist(bestSellingProducts)}
          onWishlistToggle={handleWishlistToggle}
          onQuickView={handleQuickView}
          onAddToCart={handleAddToCart}
          onViewAll={handleViewAll}
        />

        {/* Music Experience Banner */}
        <MusicExperienceBanner
          title={musicExperienceBanner.title}
          countdown={musicExperienceBanner.countdown}
          buttonText={musicExperienceBanner.buttonText}
          image={musicExperienceBanner.image}
          onButtonClick={() => console.log('Music banner clicked')}
        />

        {/* Explore Products Section */}
        <ExploreProductsSection
          products={updateProductsWithWishlist(exploreProducts)}
          onWishlistToggle={handleWishlistToggle}
          onQuickView={handleQuickView}
          onAddToCart={handleAddToCart}
          onViewAll={handleViewAll}
        />

        {/* New Arrivals Section */}
        <NewArrivalsSection
          arrivals={newArrivals}
          onArrivalClick={(id) => console.log(`New arrival clicked: ${id}`)}
        />

        {/* Services Section */}
        <ServicesSection services={services} />
      </ContentContainer>

      {/* Footer */}
      <Footer onSubscribe={handleSubscribe} />

      {/* Scroll to Top Button */}
      <ScrollToTopButton onClick={handleScrollToTop}>
        <KeyboardArrowUpIcon />
      </ScrollToTopButton>
    </PageContainer>
  );
};

export default EcommerceHomepage;