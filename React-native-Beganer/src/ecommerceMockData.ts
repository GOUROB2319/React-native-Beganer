// Mock data for the e-commerce homepage

export const mockRootProps = {
  // Hero carousel data
  heroSlides: [
    {
      id: 1,
      title: "iPhone 14 Series",
      subtitle: "Up to 10% off Voucher",
      buttonText: "Shop Now",
      image: "/images/hero-iphone.svg",
      isActive: true
    }
  ],

  // Flash sales countdown
  flashSaleCountdown: {
    days: 3,
    hours: 23,
    minutes: 19,
    seconds: 56
  },

  // Flash sale products
  flashSaleProducts: [
    {
      id: 1,
      name: "HAVIT HV-G92 Gamepad",
      currentPrice: 120,
      originalPrice: 160,
      discount: 40,
      rating: 5,
      reviewCount: 88,
      image: "/images/gamepad.png",
      isWishlisted: false
    },
    {
      id: 2,
      name: "AK-900 Wired Keyboard",
      currentPrice: 960,
      originalPrice: 1160,
      discount: 35,
      rating: 4,
      reviewCount: 75,
      image: "/images/keyboard.png",
      isWishlisted: false,
      hasAddToCart: true
    },
    {
      id: 3,
      name: "IPS LCD Gaming Monitor",
      currentPrice: 370,
      originalPrice: 400,
      discount: 30,
      rating: 5,
      reviewCount: 99,
      image: "/images/monitor.png",
      isWishlisted: false
    },
    {
      id: 4,
      name: "S-Series Comfort Chair",
      currentPrice: 375,
      originalPrice: 400,
      discount: 25,
      rating: 4.5,
      reviewCount: 99,
      image: "/images/chair.png",
      isWishlisted: false
    }
  ],

  // Categories
  categories: [
    { id: 1, name: "Phones", icon: "phone", isActive: false },
    { id: 2, name: "Computers", icon: "computer", isActive: false },
    { id: 3, name: "SmartWatch", icon: "watch", isActive: false },
    { id: 4, name: "Camera", icon: "camera", isActive: true },
    { id: 5, name: "HeadPhones", icon: "headphones", isActive: false },
    { id: 6, name: "Gaming", icon: "games", isActive: false }
  ],


  // Best selling products
  bestSellingProducts: [
    {
      id: 5,
      name: "The north coat",
      currentPrice: 260,
      originalPrice: 360,
      rating: 5,
      reviewCount: 65,
      image: "/images/coat.png",
      isWishlisted: false
    },
    {
      id: 6,
      name: "Gucci duffle bag",
      currentPrice: 960,
      originalPrice: 1160,
      rating: 4.5,
      reviewCount: 65,
      image: "/images/bag.png",
      isWishlisted: false
    },
    {
      id: 7,
      name: "RGB liquid CPU Cooler",
      currentPrice: 160,
      originalPrice: 170,
      rating: 4.5,
      reviewCount: 65,
      image: "/images/cooler.png",
      isWishlisted: false
    },
    {
      id: 8,
      name: "Small BookSelf",
      currentPrice: 360,
      rating: 5,
      reviewCount: 65,
      image: "/images/bookshelf.svg",
      isWishlisted: false
    }
  ],

  // Explore products
  exploreProducts: [
    {
      id: 9,
      name: "Breed Dry Dog Food",
      currentPrice: 100,
      rating: 3,
      reviewCount: 35,
      image: "/images/dog-food.jpg",
      isWishlisted: false
    },
    {
      id: 10,
      name: "CANON EOS DSLR Camera",
      currentPrice: 360,
      rating: 4,
      reviewCount: 95,
      image: "/images/camera.svg",
      isWishlisted: false,
      hasAddToCart: true
    },
    {
      id: 11,
      name: "ASUS FHD Gaming Laptop",
      currentPrice: 700,
      rating: 5,
      reviewCount: 325,
      image: "/images/laptop.png",
      isWishlisted: false
    },
    {
      id: 12,
      name: "Curology Product Set",
      currentPrice: 500,
      rating: 4,
      reviewCount: 145,
      image: "/images/curology.png",
      isWishlisted: false
    },
    {
      id: 13,
      name: "Kids Electric Car",
      currentPrice: 960,
      rating: 5,
      reviewCount: 65,
      image: "/images/electric-car.svg",
      isWishlisted: false,
      colors: ["#db4444", "#ff6b6b"],
      status: "new" as const
    },
    {
      id: 14,
      name: "Jr. Zoom Soccer Cleats",
      currentPrice: 1160,
      rating: 5,
      reviewCount: 35,
      image: "/images/cleats.svg",
      isWishlisted: false,
      colors: ["#ffeb3b", "#db4444"]
    },
    {
      id: 15,
      name: "GP11 Shooter USB Gamepad",
      currentPrice: 660,
      rating: 4.5,
      reviewCount: 55,
      image: "/images/gamepad-usb.svg",
      isWishlisted: false,
      colors: ["#000000", "#db4444"],
      status: "new" as const
    },
    {
      id: 16,
      name: "Quilted Satin Jacket",
      currentPrice: 660,
      rating: 4.5,
      reviewCount: 55,
      image: "/images/jacket.png",
      isWishlisted: false,
      colors: ["#000000", "#db4444"]
    }
  ],

  // Music experience banner
  musicExperienceBanner: {
    title: "Enhance Your Music Experience",
    countdown: {
      hours: 23,
      days: 5,
      minutes: 59,
      seconds: 35
    },
    buttonText: "Buy Now!",
    image: "/images/music-banner.svg"
  },

  // New arrivals
  newArrivals: [
    {
      id: "playstation",
      title: "PlayStation 5",
      description: "Black and White version of the PS5 coming out on sale.",
      buttonText: "Shop Now",
      image: "/images/playstation.svg",
      size: "large" as const
    },
    {
      id: "womens",
      title: "Women's Collections",
      description: "Featured woman collections that give you another vibe.",
      buttonText: "Shop Now",
      image: "/images/woman-hat.jpg",
      size: "medium" as const
    },
    {
      id: "speakers",
      title: "Speakers",
      description: "Amazon wireless speakers",
      buttonText: "Shop Now",
      image: "/images/speakers-banner.svg",
      size: "small" as const
    },
    {
      id: "perfume",
      title: "Perfume",
      description: "GUCCI INTENSE OUD EDP",
      buttonText: "Shop Now",
      image: "/images/perfume-banner.svg",
      size: "small" as const
    }
  ],

  // Services
  services: [
    {
      id: 1,
      icon: "local_shipping",
      title: "FREE AND FAST DELIVERY",
      description: "Free delivery for all orders over $140"
    },
    {
      id: 2,
      icon: "headset_mic",
      title: "24/7 CUSTOMER SERVICE",
      description: "Friendly 24/7 customer support"
    },
    {
      id: 3,
      icon: "verified_user",
      title: "MONEY BACK GUARANTEE",
      description: "We reurn money within 30 days"
    }
  ],

  // Navigation categories
  sidebarCategories: [
    { name: "Woman's Fashion", hasSubmenu: true },
    { name: "Men's Fashion", hasSubmenu: true },
    { name: "Electronics", hasSubmenu: false },
    { name: "Home & Lifestyle", hasSubmenu: false },
    { name: "Medicine", hasSubmenu: false },
    { name: "Sports & Outdoor", hasSubmenu: false },
    { name: "Baby's & Toys", hasSubmenu: false },
    { name: "Groceries & Pets", hasSubmenu: false },
    { name: "Health & Beauty", hasSubmenu: false }
  ]
};