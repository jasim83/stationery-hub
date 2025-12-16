import { Link } from "react-router-dom";
import { BlogPost } from "@/data/blog";
import { Card, CardContent } from "@/components/ui/card";
import { format } from "date-fns";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link to={`/blog/${post.id}`}>
      <Card className="group overflow-hidden border-border/50 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 h-full">
        <div className="aspect-video overflow-hidden bg-muted">
          <img
            src={post.image}
            alt={post.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <CardContent className="p-5 space-y-3">
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span className="font-medium text-primary uppercase tracking-wider">
              {post.category}
            </span>
            <span>•</span>
            <time dateTime={post.date}>
              {format(new Date(post.date), "MMM d, yyyy")}
            </time>
          </div>
          <h3 className="font-display font-semibold text-lg leading-tight line-clamp-2 group-hover:text-primary transition-colors">
            {post.title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-3">
            {post.excerpt}
          </p>
          <p className="text-sm font-medium text-foreground">
            By {post.author}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}
