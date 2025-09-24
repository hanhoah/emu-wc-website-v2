import { db } from '../src/lib/db/index';
import { productImages, products } from '../src/lib/db/schema';
import { eq } from 'drizzle-orm';

async function updateE2200Images() {
  try {
    console.log('Updating E2200 product images...');

    // Get E2200 product
    const e2200Product = await db
      .select()
      .from(products)
      .where(eq(products.slug, 'e2200'))
      .limit(1);

    if (e2200Product.length === 0) {
      console.error('E2200 product not found');
      return;
    }

    const productId = e2200Product[0].id;

    // Delete existing E2200 images
    await db.delete(productImages).where(eq(productImages.productId, productId));
    console.log('Deleted existing E2200 images');

    // Insert corrected images: keep e2200-1.jpg and e2200-2.jpg, then add numbered 1.jpg-14.jpg (excluding 12.jpg)
    const newImages = [
      { productId, url: '/images/products/smart-covers/e2200/e2200-1.jpg', alt: 'EMU E2200 Smart Cover', isFeatured: true, sortOrder: 1 },
      { productId, url: '/images/products/smart-covers/e2200/e2200-2.jpg', alt: 'E2200 Side Panel View', sortOrder: 2 },
      { productId, url: '/images/products/smart-covers/e2200/1.jpg', alt: 'E2200 Product View', sortOrder: 3 },
      { productId, url: '/images/products/smart-covers/e2200/2.jpg', alt: 'E2200 Side View', sortOrder: 4 },
      { productId, url: '/images/products/smart-covers/e2200/3.jpg', alt: 'E2200 Features', sortOrder: 5 },
      { productId, url: '/images/products/smart-covers/e2200/4.jpg', alt: 'E2200 Detail View', sortOrder: 6 },
      { productId, url: '/images/products/smart-covers/e2200/5.jpg', alt: 'E2200 Controls', sortOrder: 7 },
      { productId, url: '/images/products/smart-covers/e2200/6.jpg', alt: 'E2200 Installation', sortOrder: 8 },
      { productId, url: '/images/products/smart-covers/e2200/7.jpg', alt: 'E2200 Components', sortOrder: 9 },
      { productId, url: '/images/products/smart-covers/e2200/8.jpg', alt: 'E2200 Remote Control', sortOrder: 10 },
      { productId, url: '/images/products/smart-covers/e2200/9.jpg', alt: 'E2200 Technical View', sortOrder: 11 },
      { productId, url: '/images/products/smart-covers/e2200/10.jpg', alt: 'E2200 Assembly', sortOrder: 12 },
      { productId, url: '/images/products/smart-covers/e2200/11.jpg', alt: 'E2200 Features Detail', sortOrder: 13 },
      { productId, url: '/images/products/smart-covers/e2200/13.jpg', alt: 'E2200 Specifications', sortOrder: 14 },
      { productId, url: '/images/products/smart-covers/e2200/14.jpg', alt: 'E2200 Complete Set', sortOrder: 15 },
    ];

    await db.insert(productImages).values(newImages);
    console.log(`Inserted ${newImages.length} new E2200 images`);
    console.log('E2200 images updated successfully!');

  } catch (error) {
    console.error('Error updating E2200 images:', error);
    throw error;
  }
}

updateE2200Images().catch(console.error);