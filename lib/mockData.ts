
export interface Service {
  id: string;
  title: string;
  description: string;
  priceRange?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  imageUrl: string; // Using placeholder URLs for now
  category: string;
}

export const mockServices: Service[] = [
  {
    id: '1',
    title: 'Interior Painting',
    description: 'Professional interior painting for living rooms, bedrooms, and more.',
    priceRange: '$200 - $1000 per room',
  },
  {
    id: '2',
    title: 'Exterior Painting',
    description: 'Durable exterior painting to protect and beautify your home.',
    priceRange: '$1000 - $5000',
  },
  {
    id: '3',
    title: 'Wallpaper Installation',
    description: 'Expert installation of all types of wallpaper.',
    priceRange: '$300 - $1500 per room',
  },
];

export const mockGallery: GalleryItem[] = [
  {
    id: '1',
    title: 'Modern Living Room',
    imageUrl: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Modern+Living+Room',
    category: 'Interior',
  },
  {
    id: '2',
    title: 'Classic Victorian Exterior',
    imageUrl: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Victorian+Exterior',
    category: 'Exterior',
  },
  {
    id: '3',
    title: 'Kitchen Remodel',
    imageUrl: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Kitchen',
    category: 'Interior',
  },
];

export const getServices = async (): Promise<Service[]> => {
  // Simulate network delay
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockServices), 500);
  });
};

export const getGalleryItems = async (): Promise<GalleryItem[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockGallery), 500);
  });
};
