// Product category enums
export enum ProductCategory {
  PHONES = 'phones',
  COMPUTERS = 'computers',
  SMARTWATCH = 'smartwatch',
  CAMERA = 'camera',
  HEADPHONES = 'headphones',
  GAMING = 'gaming',
  WOMENS_FASHION = 'womens_fashion',
  MENS_FASHION = 'mens_fashion',
  ELECTRONICS = 'electronics',
  HOME_LIFESTYLE = 'home_lifestyle',
  MEDICINE = 'medicine',
  SPORTS_OUTDOOR = 'sports_outdoor',
  BABY_TOYS = 'baby_toys',
  GROCERIES_PETS = 'groceries_pets',
  HEALTH_BEAUTY = 'health_beauty'
}

export enum DiscountType {
  PERCENTAGE = 'percentage',
  FIXED = 'fixed'
}

export enum ProductStatus {
  NEW = 'new',
  SALE = 'sale',
  FEATURED = 'featured',
  BESTSELLER = 'bestseller'
}

// Props types (data passed to components)
export interface Product {
  id: number | string;
  name: string;
  currentPrice: number;
  originalPrice?: number;
  discount?: number;
  rating: number;
  reviewCount: number;
  image: string;
  isWishlisted: boolean;
  hasAddToCart?: boolean;
  colors?: string[];
  status?: 'new' | 'sale' | 'featured' | 'bestseller';
}

export interface Category {
  id: number | string;
  name: string;
  icon?: string;
  isActive?: boolean;
  hasSubmenu?: boolean;
}

export interface HeroSlide {
  id: number;
  title: string;
  subtitle: string;
  buttonText: string;
  image: string;
  isActive: boolean;
}

export interface CountdownTimer {
  days?: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
}

export interface NewArrival {
  id: string;
  title: string;
  description: string;
  buttonText: string;
  image: string;
  size: 'large' | 'medium' | 'small';
}

export interface EcommerceHomepageProps {
  heroSlides: HeroSlide[];
  flashSaleCountdown: CountdownTimer;
  flashSaleProducts: Product[];
  categories: Category[];
  bestSellingProducts: Product[];
  exploreProducts: Product[];
  musicExperienceBanner: {
    title: string;
    countdown: CountdownTimer;
    buttonText: string;
    image: string;
  };
  newArrivals: NewArrival[];
  services: Service[];
  sidebarCategories: Category[];
}