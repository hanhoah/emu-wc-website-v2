export const productImages = {
  smartCovers: {
    e2100: {
      featured: '/images/products/smart-covers/e2100/featured.jpg',
      gallery: [
        '/images/products/smart-covers/e2100/gallery-1.jpg',
        '/images/products/smart-covers/e2100/gallery-2.jpg',
        '/images/products/smart-covers/e2100/gallery-3.jpg',
      ],
      variants: {
        gold: '/images/products/smart-covers/e2100/variants/gold.jpg',
        silver: '/images/products/smart-covers/e2100/variants/silver.jpg',
        white: '/images/products/smart-covers/e2100/variants/white.jpg',
      }
    },
    e2102: {
      featured: '/images/products/smart-covers/e2102/featured.jpg',
      gallery: [
        '/images/products/smart-covers/e2102/gallery-1.jpg',
        '/images/products/smart-covers/e2102/gallery-2.jpg',
      ],
    },
    e2200: {
      featured: '/images/products/smart-covers/e2200/featured.jpg',
      gallery: [
        '/images/products/smart-covers/e2200/gallery-1.jpg',
        '/images/products/smart-covers/e2200/gallery-2.jpg',
        '/images/products/smart-covers/e2200/gallery-3.jpg',
      ],
      variants: {
        elongated: '/images/products/smart-covers/e2200/variants/elongated.jpg',
        round: '/images/products/smart-covers/e2200/variants/round.jpg',
      }
    },
    e2300: {
      featured: '/images/products/smart-covers/e2300/featured.jpg',
      gallery: [
        '/images/products/smart-covers/e2300/gallery-1.jpg',
        '/images/products/smart-covers/e2300/gallery-2.jpg',
        '/images/products/smart-covers/e2300/gallery-3.jpg',
        '/images/products/smart-covers/e2300/gallery-4.jpg',
      ],
      variants: {
        white: '/images/products/smart-covers/e2300/variants/white.jpg',
        beige: '/images/products/smart-covers/e2300/variants/beige.jpg',
      }
    },
  },
  smartToilets: {
    e8201s: {
      featured: '/images/products/smart-toilets/e8201s/featured.jpg',
      gallery: [
        '/images/products/smart-toilets/e8201s/gallery-1.jpg',
        '/images/products/smart-toilets/e8201s/gallery-2.jpg',
        '/images/products/smart-toilets/e8201s/gallery-3.jpg',
      ],
    },
    e8305s: {
      featured: '/images/products/smart-toilets/e8305s/featured.jpg',
      gallery: [
        '/images/products/smart-toilets/e8305s/gallery-1.jpg',
        '/images/products/smart-toilets/e8305s/gallery-2.jpg',
        '/images/products/smart-toilets/e8305s/gallery-3.jpg',
        '/images/products/smart-toilets/e8305s/gallery-4.jpg',
      ],
    },
  },
};

export const categoryImages = {
  smartCovers: '/images/categories/smart-covers.jpg',
  smartToilets: '/images/categories/smart-toilets.jpg',
};

export function getProductImageUrl(category: string, model: string, type: 'featured' | 'gallery', index?: number): string {
  const baseUrl = '/images/products';
  
  if (type === 'featured') {
    return `${baseUrl}/${category}/${model}/featured.jpg`;
  }
  
  if (type === 'gallery' && typeof index === 'number') {
    return `${baseUrl}/${category}/${model}/gallery-${index + 1}.jpg`;
  }
  
  return `${baseUrl}/${category}/${model}/featured.jpg`;
}

export function getVariantImageUrl(category: string, model: string, variant: string): string {
  return `/images/products/${category}/${model}/variants/${variant}.jpg`;
}