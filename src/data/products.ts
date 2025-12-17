export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  image: string;
  featured?: boolean;
}

export const categories = [
  "All",
  "Room Essentials",
  "Writing & Office Materials",
  "Printer & Office Supplies",
  "Office Essentials",
  "Industrial Products",
  "Stamps & Sign Boards",
  "Cleaning & Household Items",
  "Safety Products",
];

// NOTE:
// - Price field completely removed
// - All images use same size (400x400) to fit uniformly

export const products: Product[] = [
  {
    id: "1",
    name: "Room Spray",
    description: "Premium air freshener spray for a pleasant office environment",
    category: "Room Essentials",
    image: "https://placehold.co/400x400?text=Room+Spray",
    featured: true,
  },

  {
    id: "2",
    name: "Colour A4 Size Paper",
    description: "Vibrant colored A4 paper for creative projects and presentations",
    category: "Writing & Office Materials",
    image: "https://placehold.co/400x400?text=Colour+A4+Paper",
    featured: true,
  },
  {
    id: "3",
    name: "Computer Forms",
    description: "Continuous computer forms for dot matrix and impact printers",
    category: "Writing & Office Materials",
    image: "https://placehold.co/400x400?text=Computer+Forms",
  },
  {
    id: "4",
    name: "Conqueror Company Papers",
    description: "Premium quality Conqueror brand paper for professional documents",
    category: "Writing & Office Materials",
    image: "https://placehold.co/400x400?text=Conqueror+Paper",
  },
  {
    id: "5",
    name: "Graph Paper A4 Size",
    description: "A4 size graph paper with precise grid lines for technical drawings",
    category: "Writing & Office Materials",
    image: "https://placehold.co/400x400?text=Graph+Paper+A4",
  },
  {
    id: "6",
    name: "IK Branded Paper A4 Size",
    description: "High-quality IK brand A4 paper for everyday office use",
    category: "Writing & Office Materials",
    image: "https://placehold.co/400x400?text=IK+A4+Paper",
  },
  {
    id: "7",
    name: "King Branded A4 Size Paper",
    description: "Premium King brand A4 paper with excellent print quality",
    category: "Writing & Office Materials",
    image: "https://placehold.co/400x400?text=King+A4+Paper",
  },
  {
    id: "8",
    name: "Double A Paper A3 Size",
    description: "Double A brand A3 size paper for large format printing",
    category: "Writing & Office Materials",
    image: "https://placehold.co/400x400?text=Double+A+A3",
  },
  {
    id: "9",
    name: "Double A Paper A4 Size",
    description: "Double A brand A4 size paper - smooth and reliable",
    category: "Writing & Office Materials",
    image: "https://placehold.co/400x400?text=Double+A+A4",
    featured: true,
  },
  {
    id: "10",
    name: "Paper One A4 Paper",
    description: "Paper One branded A4 paper for everyday printing needs",
    category: "Writing & Office Materials",
    image: "https://placehold.co/400x400?text=Paper+One+A4",
  },

  {
    id: "16",
    name: "Binding Machines",
    description: "Professional binding machines for document presentation",
    category: "Printer & Office Supplies",
    image: "https://placehold.co/400x400?text=Binding+Machine",
    featured: true,
  },
  {
    id: "17",
    name: "All Brands Ink Cartridges",
    description: "Compatible ink cartridges for all major printer brands",
    category: "Printer & Office Supplies",
    image: "https://placehold.co/400x400?text=Ink+Cartridges",
  },

  {
    id: "31",
    name: "Aluminium Ladders",
    description: "Sturdy aluminium ladders for office and warehouse use",
    category: "Office Essentials",
    image: "https://placehold.co/400x400?text=Aluminium+Ladder",
  },
  {
    id: "33",
    name: "Scanners",
    description: "High-resolution document scanners for digitization",
    category: "Office Essentials",
    image: "https://placehold.co/400x400?text=Scanner",
    featured: true,
  },

  {
    id: "37",
    name: "Water Hose",
    description: "Durable water hose for industrial and garden use",
    category: "Industrial Products",
    image: "https://placehold.co/400x400?text=Water+Hose",
  },
  {
    id: "38",
    name: "Paints",
    description: "Industrial grade paints for various surfaces",
    category: "Industrial Products",
    image: "https://placehold.co/400x400?text=Paints",
  },
  {
    id: "39",
    name: "Woods",
    description: "Quality wood materials for construction and crafts",
    category: "Industrial Products",
    image: "https://placehold.co/400x400?text=Wood+Materials",
  },

  {
    id: "43",
    name: "Self-Ink Stamps",
    description: "Convenient self-inking stamps with built-in ink pad",
    category: "Stamps & Sign Boards",
    image: "https://placehold.co/400x400?text=Self+Ink+Stamp",
    featured: true,
  },

  {
    id: "48",
    name: "Bleaching Liquid",
    description: "Powerful bleaching liquid for cleaning and disinfection",
    category: "Cleaning & Household Items",
    image: "https://placehold.co/400x400?text=Bleaching+Liquid",
  },
  {
    id: "50",
    name: "Mops & Bucket",
    description: "Complete mop and bucket sets for efficient cleaning",
    category: "Cleaning & Household Items",
    image: "https://placehold.co/400x400?text=Mop+and+Bucket",
  },

  {
    id: "59",
    name: "Safety Helmet",
    description: "Industrial safety helmets meeting safety standards",
    category: "Safety Products",
    image: "https://placehold.co/400x400?text=Safety+Helmet",
    featured: true,
  },
  {
    id: "61",
    name: "Safety Shoes",
    description: "Steel-toe safety shoes for workplace protection",
    category: "Safety Products",
    image: "https://placehold.co/400x400?text=Safety+Shoes",
  },
];

