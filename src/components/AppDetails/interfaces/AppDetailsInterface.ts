// AppDetailsInterface.ts
export interface AppDetailsProps {
  app: {
    title: string;
    badge: string;
    // badgeColor?: 'primary' | 'secondary' | 'success' | 'undefined';
    author: string;
    description: string;
    rating: number;
    reviews: number;
    downloads: string;
  }
    
  }