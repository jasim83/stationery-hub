import { useState } from "react";
import { Product } from "@/data/products";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export function ProductCard({ product, priority = false }: ProductCardProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <Card className="group overflow-hidden border-border/50 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1">
      <div className="aspect-square overflow-hidden bg-muted relative">
        {!loaded && (
          <div className="absolute inset-0 animate-pulse bg-muted" aria-hidden="true" />
        )}
        <img
          src={product.image}
          alt={product.name}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          decoding="async"
          width="600"
          height="600"
          onLoad={() => setLoaded(true)}
          onError={() => setLoaded(true)}
          className={cn(
            "h-full w-full object-cover transition-all duration-500 group-hover:scale-110",
            loaded ? "opacity-100" : "opacity-0"
          )}
        />
      </div>
      <CardContent className="p-4 space-y-2">
        <span className="text-xs font-medium text-primary uppercase tracking-wider">
          {product.category}
        </span>
        <h3 className="font-display font-semibold text-lg leading-tight line-clamp-1">
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {product.description}
        </p>
      </CardContent>
    </Card>
  );
}
