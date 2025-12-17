export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
}

export const blogCategories = ["All", "Company News", "Products", "Industry", "Tips & Guides"];

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "ALBAITH: Serving Quality Products Since 1992",
    excerpt: "For over 30 years, ALBAITH has been Brunei's trusted supplier of office supplies, safety equipment, and industrial products.",
    content: `Since 1992, ALBAITH has been at the forefront of providing quality office supplies, safety equipment, and industrial products to businesses and individuals across Brunei.

**Our Journey**
What started as a small stationery shop has grown into one of Brunei's most comprehensive suppliers of office and industrial products. Our commitment to quality and customer satisfaction has been the cornerstone of our success for over three decades.

**Our Mission**
We believe that every workplace deserves access to high-quality supplies that enhance productivity and safety. That's why we carefully curate our product selection to ensure only the best reaches our customers.

**Quality Assurance**
Every product in our inventory undergoes rigorous quality checks. We partner with trusted manufacturers and brands worldwide to bring you products that meet international standards.

**Customer First**
Our dedicated team is always ready to assist you in finding the right products for your needs. Whether you're outfitting a new office or restocking supplies, we're here to help.

Thank you for trusting ALBAITH for over 30 years. We look forward to serving you for many more years to come.`,
    author: "ALBAITH Team",
    date: "2024-01-15",
    category: "Company News",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=400&fit=crop",
  },
  {
    id: "2",
    title: "Complete Guide to Choosing the Right Printer Supplies",
    excerpt: "From toner cartridges to drum kits, learn how to select the best printer supplies for your office needs.",
    content: `Choosing the right printer supplies can significantly impact your printing quality and costs. Here's our comprehensive guide to help you make informed decisions.

**Understanding Toner vs Ink Cartridges**
- **Toner Cartridges**: Best for high-volume printing, laser printers. Longer shelf life and sharper text quality.
- **Ink Cartridges**: Ideal for photo printing and smaller volumes. Better color reproduction for images.

**Original vs Compatible Cartridges**
Original cartridges from manufacturers guarantee quality but come at a premium price. At ALBAITH, we offer both original and high-quality compatible options to suit different budgets.

**Drum Kits and Imaging Units**
These components are essential for laser printers. They need replacement less frequently than toner but are crucial for maintaining print quality. Signs you need replacement:
- Faded prints
- Lines or streaks on pages
- Ghosting or repeated images

**Choosing the Right Paper**
Different projects require different paper:
- **Standard A4**: Everyday documents
- **Premium Paper (Conqueror, Double A)**: Important documents, presentations
- **Specialty Paper**: Thermal, plotter, tracing paper for specific applications

**Tips for Cost Savings**
1. Buy in bulk for frequently used supplies
2. Consider compatible cartridges for non-critical printing
3. Use draft mode for internal documents
4. Regular printer maintenance extends supply life

Visit ALBAITH for expert advice on printer supplies tailored to your needs.`,
    author: "ALBAITH Technical Team",
    date: "2024-01-10",
    category: "Tips & Guides",
    image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=800&h=400&fit=crop",
  },
  {
    id: "3",
    title: "Workplace Safety: Essential Equipment Every Business Needs",
    excerpt: "Protect your workforce with the right safety equipment. Learn about must-have safety products for your workplace.",
    content: `Workplace safety is not just a legal requirement—it's a moral obligation. Here's a comprehensive guide to essential safety equipment every business should have.

**Personal Protective Equipment (PPE)**

**Safety Helmets**
Essential for construction sites, warehouses, and industrial settings. Our safety helmets meet international safety standards and come in various colors for team identification.

**Safety Gloves**
Different tasks require different gloves:
- Cut-resistant for handling sharp objects
- Chemical-resistant for laboratory work
- Heat-resistant for hot environments
- General purpose for everyday tasks

**Safety Shoes**
Steel-toe boots protect against falling objects and punctures. Look for:
- Slip-resistant soles
- Electrical hazard protection
- Comfortable fit for all-day wear

**Traffic and Site Safety**

**Traffic Cones**
High-visibility cones are essential for:
- Road work zones
- Parking lots
- Event management
- Emergency situations

**Baton Signal Lights**
LED batons are crucial for:
- Traffic control
- Emergency response
- Night-time operations
- Airport ground operations

**Emergency Equipment**

**Safety LED Torch Lights**
Reliable lighting is critical during:
- Power outages
- Emergency evacuations
- Night inspections
- Search operations

ALBAITH stocks a complete range of safety products to keep your workplace compliant and your workers protected.`,
    author: "Safety Division",
    date: "2024-01-05",
    category: "Industry",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=400&fit=crop",
  },
  {
    id: "4",
    title: "Organizing Your Office: Essential Supplies Checklist",
    excerpt: "Create an efficient and productive workspace with our comprehensive office supplies checklist.",
    content: `A well-organized office boosts productivity and morale. Here's our checklist of essential supplies every office needs.

**Paper Products**
- A4 paper (standard and premium brands like Double A, Paper One)
- A3 paper for larger documents
- Colored paper for creative projects
- Graph paper for technical work
- Tracing paper for design

**Printing Supplies**
- Toner/ink cartridges (keep backup stock)
- Thermal paper for receipt printers
- Plotter rolls for large format printing
- CD-R/CD-RW for data backup

**Office Equipment**
- Binding machines for professional documents
- Scanners for digitizing documents
- External hard drives for backup
- USB pen drives for file transfer

**Cleaning Supplies**
- Floor cleaning solutions
- Glass cleaners
- Disinfectants
- Toilet supplies
- Dustbins

**Stamps & Signage**
- Date stamps for documents
- Self-inking stamps for efficiency
- Name plates for doors
- Directional signs

**Pro Tips**
1. Maintain an inventory system
2. Reorder before running out
3. Buy in bulk for savings
4. Choose quality over price for frequently used items

ALBAITH can help you set up your office with everything you need. Contact us for bulk orders and special pricing.`,
    author: "Office Solutions Team",
    date: "2023-12-28",
    category: "Tips & Guides",
    image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&h=400&fit=crop",
  },
  {
    id: "5",
    title: "Industrial Solutions: From Water Hoses to Heavy Equipment",
    excerpt: "Discover ALBAITH's range of industrial products designed for durability and performance.",
    content: `ALBAITH isn't just about office supplies—we also cater to industrial needs with a comprehensive range of products.

**Industrial Equipment**

**Aluminium Ladders**
Our ladders are:
- Lightweight yet sturdy
- Corrosion-resistant
- Available in various heights
- Suitable for indoor and outdoor use

**Platform Trolleys**
Heavy-duty trolleys for:
- Warehouse operations
- Retail stocking
- Moving equipment
- Industrial applications

**Industrial Supplies**

**Water Hoses**
Durable hoses for:
- Garden and landscape maintenance
- Industrial cleaning
- Construction sites
- Fire safety applications

**Paints**
Industrial-grade paints for:
- Machinery and equipment
- Building maintenance
- Road marking
- Safety color coding

**Signage and Safety**

**Road Sign Boards**
Complete range including:
- Warning signs
- Directional signs
- Speed limit signs
- Custom signs

**Airport Windsocks**
Specialized windsocks meeting aviation standards for:
- Airports
- Heliports
- Airstrips
- Outdoor facilities

Contact ALBAITH for your industrial supply needs. We offer competitive pricing and bulk discounts for large orders.`,
    author: "Industrial Division",
    date: "2023-12-20",
    category: "Products",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop",
  },
];
