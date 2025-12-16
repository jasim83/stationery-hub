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

export const blogCategories = ["All", "Productivity", "Organization", "Reviews", "Tips & Tricks"];

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "10 Ways to Organize Your Workspace for Maximum Productivity",
    excerpt: "Transform your desk into a productivity powerhouse with these simple organization tips.",
    content: `A well-organized workspace can dramatically improve your focus and efficiency. Here are our top 10 tips for creating the perfect productive environment.

1. **Clear the Clutter** - Start by removing everything that doesn't serve a purpose.

2. **Zone Your Desk** - Create specific areas for different tasks.

3. **Use Vertical Space** - Shelves and wall organizers free up desk real estate.

4. **Invest in Quality Storage** - Good containers and organizers last longer and work better.

5. **Keep Essentials Within Reach** - Your most-used items should be closest to you.

6. **Cable Management** - Tidy cables reduce visual noise and prevent tangles.

7. **Add Plants** - Greenery improves air quality and mood.

8. **Proper Lighting** - Good lighting reduces eye strain and fatigue.

9. **Regular Maintenance** - Schedule weekly cleanup sessions.

10. **Personalize Thoughtfully** - Add items that inspire without creating clutter.`,
    author: "Sarah Mitchell",
    date: "2024-01-15",
    category: "Organization",
    image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&h=400&fit=crop",
  },
  {
    id: "2",
    title: "The Ultimate Guide to Choosing the Right Notebook",
    excerpt: "From paper quality to binding styles, everything you need to know about selecting your perfect notebook.",
    content: `Finding the right notebook is more important than most people realize. The perfect notebook can enhance your writing experience and even improve your productivity.

**Paper Quality**
The weight and texture of paper affects how ink absorbs and whether it bleeds through. Look for at least 80gsm paper for everyday use.

**Binding Types**
- Spiral: Easy to fold back, great for left-handed writers
- Perfect bound: Clean aesthetic, lies flat when open
- Stapled: Lightweight and affordable
- Ring binder: Add and remove pages easily

**Size Matters**
Consider where and how you'll use your notebook. A5 is versatile, while pocket-sized notebooks are great for on-the-go notes.

**Line Styles**
- Ruled: Classic choice for writing
- Dotted: Flexible for both writing and drawing
- Grid: Perfect for diagrams and technical notes
- Blank: Ultimate freedom for creativity`,
    author: "David Chen",
    date: "2024-01-10",
    category: "Reviews",
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?w=800&h=400&fit=crop",
  },
  {
    id: "3",
    title: "5 Journaling Techniques to Boost Your Creativity",
    excerpt: "Unlock your creative potential with these proven journaling methods.",
    content: `Journaling isn't just for recording daily events—it's a powerful tool for unlocking creativity and generating new ideas.

**Morning Pages**
Write three pages of stream-of-consciousness writing first thing in the morning. Don't edit, don't think—just write.

**Mind Mapping**
Start with a central idea and branch out with related concepts. This visual technique helps you see connections you might miss.

**Prompted Writing**
Use creative prompts to push your thinking in new directions. "What if..." questions are particularly powerful.

**Gratitude Journaling**
Daily gratitude practice shifts your mindset and opens you to new possibilities and positive thinking.

**Visual Journaling**
Combine sketches, doodles, and collages with your writing for a more expressive and engaging practice.`,
    author: "Emma Watson",
    date: "2024-01-05",
    category: "Tips & Tricks",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=800&h=400&fit=crop",
  },
  {
    id: "4",
    title: "Why Quality Pens Make a Difference",
    excerpt: "Discover how investing in good writing instruments can transform your writing experience.",
    content: `There's a world of difference between a cheap ballpoint and a quality writing instrument. Here's why it matters.

**Comfort**
Quality pens are designed with ergonomics in mind. Balanced weight and proper grip reduce hand fatigue during long writing sessions.

**Ink Flow**
Premium pens deliver consistent, smooth ink flow without skipping or blobbing. This makes writing more enjoyable and professional-looking.

**Durability**
A good pen can last for years, making it more economical than constantly replacing cheap alternatives.

**Writing Pleasure**
The tactile experience of a quality pen makes writing more enjoyable, which can encourage you to write more often.

**Professional Image**
In business settings, pulling out a quality pen makes a subtle but positive impression.`,
    author: "Michael Brown",
    date: "2023-12-28",
    category: "Reviews",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&h=400&fit=crop",
  },
  {
    id: "5",
    title: "Creating the Perfect Home Office Setup",
    excerpt: "Essential supplies and organization tips for your work-from-home space.",
    content: `Working from home requires a thoughtfully designed space. Here's how to create a home office that maximizes productivity.

**Essential Supplies**
- Quality desk and ergonomic chair
- Good lighting (natural + task lighting)
- Storage solutions for documents and supplies
- Technology setup (computer, monitor, keyboard)

**Organization Systems**
- Filing system for important documents
- Inbox/outbox trays for active projects
- Desk organizers for daily essentials
- Digital organization to match physical setup

**Comfort Considerations**
- Temperature control
- Noise management
- Plants for air quality and aesthetics
- Personal touches that inspire without distracting

**Maintenance Routine**
End each workday with a quick cleanup. Weekly deep cleaning keeps your space fresh and functional.`,
    author: "Lisa Park",
    date: "2023-12-20",
    category: "Productivity",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=400&fit=crop",
  },
];
