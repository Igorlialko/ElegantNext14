interface ArrivalsItem {
  discount: number;
  isDiscount: boolean;
  rating: number | null;
  urlProduct: string;
  urlImg: string;
  title: string;
  statusNew: boolean;
  favorite: boolean;
  categories: string;
  price: number;
  id?: number; // Опциональный параметр
}

export const data: ArrivalsItem[] = [
  {
    discount: 50,
    isDiscount: true,
    rating: null,
    urlProduct: '/',
    urlImg: '/images/Arrivals/img1.webp',
    title: 'Loveseat Sofa',
    statusNew: true,
    favorite: true,
    id: 1,
    categories: 'LivingRoom',
    price: 200,
  },
  {
    discount: 50,
    isDiscount: true,
    rating: null,
    urlProduct: '/',
    urlImg: '/images/Arrivals/img1.webp',
    title: 'Loveseat Sofa',
    statusNew: true,
    favorite: false,
    id: 2,
    categories: 'Bedroom',
    price: 300,
  },
  {
    discount: 50,
    isDiscount: true,
    rating: null,
    urlProduct: '/',
    urlImg: '/images/Arrivals/img1.webp',
    title: 'Loveseat Sofa',
    statusNew: true,
    favorite: false,
    id: 3,
    categories: 'Kitchen',
    price: 100,
  },
  {
    discount: 50,
    isDiscount: true,
    rating: null,
    urlProduct: '/',
    urlImg: '/images/Arrivals/img1.webp',
    title: 'Loveseat Sofa',
    statusNew: true,
    favorite: false,
    id: 4,
    categories: 'Bathroom',
    price: 99,
  },
  {
    discount: 50,
    isDiscount: true,
    rating: null,
    urlProduct: '/',
    urlImg: '/images/Arrivals/img1.webp',
    title: 'Loveseat Sofa',
    statusNew: true,
    favorite: false,
    id: 5,
    categories: 'Dinning',
    price: 300,
  },
  {
    discount: 50,
    isDiscount: true,
    rating: null,
    urlProduct: '/',
    urlImg: '/images/Arrivals/img1.webp',
    title: 'Loveseat Sofa',
    statusNew: true,
    favorite: false,
    id: 6,
    categories: 'LivingRoom',
    price: 400,
  },
];