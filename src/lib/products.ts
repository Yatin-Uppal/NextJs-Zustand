export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    category: string;
  }
  
  export const products: Product[] = [
    {
      id: 1,
      name: "Premium Headphones",
      description: "Wireless over-ear headphones with noise cancellation",
      price: 299.99,
      image: "/placeholder.svg",
      category: "Electronics"
    },
    {
      id: 2,
      name: "Slim Fit T-shirt",
      description: "Comfortable cotton t-shirt for everyday wear",
      price: 24.99,
      image: "/placeholder.svg",
      category: "Clothing"
    },
    {
      id: 3,
      name: "Smart Watch",
      description: "Track your fitness and stay connected",
      price: 199.99,
      image: "/placeholder.svg",
      category: "Electronics"
    },
    {
      id: 4,
      name: "Running Shoes",
      description: "Lightweight shoes for maximum performance",
      price: 129.99,
      image: "/placeholder.svg",
      category: "Footwear"
    },
    {
      id: 5,
      name: "Wooden Desk",
      description: "Elegant wooden desk for your home office",
      price: 349.99,
      image: "/placeholder.svg",
      category: "Furniture"
    },
    {
      id: 6,
      name: "Coffee Maker",
      description: "Automatic coffee maker with timer",
      price: 89.99,
      image: "/placeholder.svg",
      category: "Kitchen"
    },
    {
      id: 7,
      name: "Backpack",
      description: "Water-resistant backpack for everyday use",
      price: 59.99,
      image: "/placeholder.svg",
      category: "Accessories"
    },
    {
      id: 8,
      name: "Wireless Mouse",
      description: "Ergonomic wireless mouse for productivity",
      price: 29.99,
      image: "/placeholder.svg",
      category: "Electronics"
    }
  ];
  
  // Function to get product by id
  export const getProductById = (id: number): Product | undefined => {
    return products.find(product => product.id === id);
  };