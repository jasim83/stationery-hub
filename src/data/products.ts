export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  featured?: boolean;
}

export const categories = [
  "All",
  "Pens & Pencils",
  "Notebooks",
  "Office Organizers",
  "Paper Products",
  "Desk Accessories",
];

export const products: Product[] = [
  {
    id: "1",
    name: "Premium Gel Pen Set",
    description: "Set of 12 smooth-writing gel pens in assorted colors",
    price: 24.99,
    category: "Pens & Pencils",
    image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=400&h=400&fit=crop",
    featured: true,
  },
  {
    id: "2",
    name: "Leather Bound Notebook",
    description: "A5 hardcover notebook with 200 pages of premium paper",
    price: 34.99,
    category: "Notebooks",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=400&h=400&fit=crop",
    featured: true,
  },
  {
    id: "3",
    name: "Desk Organizer Pro",
    description: "Multi-compartment wooden desk organizer",
    price: 49.99,
    category: "Office Organizers",
    image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=400&h=400&fit=crop",
    featured: true,
  },
  {
    id: "4",
    name: "Mechanical Pencil Set",
    description: "Professional drafting pencils with multiple lead sizes",
    price: 19.99,
    category: "Pens & Pencils",
    image: "https://images.unsplash.com/photo-1585336261022-680e295ce3fe?w=400&h=400&fit=crop",
    featured: true,
  },
  {
    id: "5",
    name: "Spiral Notebook Bundle",
    description: "Pack of 5 spiral notebooks in various sizes",
    price: 18.99,
    category: "Notebooks",
    image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=400&h=400&fit=crop",
  },
  {
    id: "6",
    name: "File Cabinet Organizer",
    description: "Expandable file folder with 12 pockets",
    price: 29.99,
    category: "Office Organizers",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=400&fit=crop",
  },
  {
    id: "7",
    name: "Premium Copy Paper",
    description: "500 sheets of bright white multipurpose paper",
    price: 12.99,
    category: "Paper Products",
    image: "https://images.unsplash.com/photo-1568667256549-094345857637?w=400&h=400&fit=crop",
  },
  {
    id: "8",
    name: "Executive Pen Holder",
    description: "Elegant marble pen holder for your desk",
    price: 39.99,
    category: "Desk Accessories",
    image: "https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?w=400&h=400&fit=crop",
  },
  {
    id: "9",
    name: "Sticky Notes Variety Pack",
    description: "Assorted sizes and colors for all your note-taking needs",
    price: 14.99,
    category: "Paper Products",
    image: "https://images.unsplash.com/photo-1586282391129-76a6df230234?w=400&h=400&fit=crop",
  },
  {
    id: "10",
    name: "Desktop Calendar Stand",
    description: "Modern acrylic calendar stand with monthly pages",
    price: 22.99,
    category: "Desk Accessories",
    image: "https://images.unsplash.com/photo-1506784365847-bbad939e9335?w=400&h=400&fit=crop",
  },
  {
    id: "11",
    name: "Fountain Pen Classic",
    description: "Elegant fountain pen with gold-plated nib",
    price: 89.99,
    category: "Pens & Pencils",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=400&fit=crop",
  },
  {
    id: "12",
    name: "Bullet Journal Kit",
    description: "Complete kit with dotted notebook and accessories",
    price: 44.99,
    category: "Notebooks",
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?w=400&h=400&fit=crop",
  },
];
