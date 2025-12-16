import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BlogCard } from "@/components/BlogCard";
import { blogPosts, blogCategories } from "@/data/blog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="hero-gradient text-white py-16">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Our Blog
            </h1>
            <p className="text-white/80 max-w-lg">
              Tips, guides, and insights to help you stay organized and productive.
            </p>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-12">
          <div className="container">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 mb-8">
              {blogCategories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={cn(
                    "transition-all",
                    selectedCategory === category && "shadow-md"
                  )}
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post, index) => (
                <div
                  key={post.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <BlogCard post={post} />
                </div>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-muted-foreground">No posts found in this category.</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
