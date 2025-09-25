import { db } from './db/index';
import { products, productImages } from './db/schema';
import { eq, desc } from 'drizzle-orm';

export interface Product {
  id: number;
  name: string;
  slug: string;
  shortDescription: string | null;
  isFeatured: boolean | null;
  primaryImage?: string;
}

export async function getFeaturedProducts(): Promise<Product[]> {
  try {
    const featuredProducts = await db
      .select({
        id: products.id,
        name: products.name,
        slug: products.slug,
        shortDescription: products.shortDescription,
        isFeatured: products.isFeatured,
      })
      .from(products)
      .where(eq(products.isFeatured, true))
      .orderBy(products.sortOrder)
      .limit(3);

    // Get primary image for each product
    const productsWithImages = await Promise.all(
      featuredProducts.map(async (product) => {
        const primaryImage = await db
          .select({
            url: productImages.url,
          })
          .from(productImages)
          .where(eq(productImages.productId, product.id))
          .orderBy(productImages.sortOrder)
          .limit(1);

        return {
          ...product,
          primaryImage: primaryImage[0]?.url || `/images/products/smart-covers/${product.slug}/${product.slug}-1.jpg`,
        };
      })
    );

    return productsWithImages;
  } catch (error) {
    console.error('Error fetching featured products:', error);
    
    // Fallback to mock data if database is unavailable
    return [
      {
        id: 1,
        name: 'Smart Cover E2100',
        slug: 'e2100',
        shortDescription: 'Essential smart smart cover with heated seat, adjustable water settings, and energy-saving features.',
        isFeatured: true,
        primaryImage: '/images/products/smart-covers/e2100/e2100-1.jpg',
      },
      {
        id: 2,
        name: 'Smart Toilet E8201S',
        slug: 'e8201s',
        shortDescription: 'Complete smart toilet system with hands-free operation, integrated bidet, and reliable flushing.',
        isFeatured: true,
        primaryImage: '/images/products/smart-toilets/e8201s/e8201s-1.jpg',
      },
      {
        id: 3,
        name: 'Smart Toilet E8305S',
        slug: 'e8305s',
        shortDescription: 'Premium smart toilet with advanced technology, maximum customization, and luxury materials.',
        isFeatured: true,
        primaryImage: '/images/products/smart-toilets/e8305s/e8305s-1.jpg',
      },
    ];
  }
}