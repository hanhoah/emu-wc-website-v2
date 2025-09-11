import { pgTable, text, integer, serial, timestamp, boolean, jsonb, varchar } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

// Categories (Smart Covers, Smart Toilets)
export const categories = pgTable('categories', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  slug: varchar('slug', { length: 255 }).notNull().unique(),
  description: text('description'),
  imageUrl: text('image_url'),
  sortOrder: integer('sort_order').default(0),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

// Products (E2100, E2102, E2200, E2300, E8201S, E8305S)
export const products = pgTable('products', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  slug: varchar('slug', { length: 255 }).notNull().unique(),
  categoryId: integer('category_id').references(() => categories.id).notNull(),
  shortDescription: text('short_description'),
  description: text('description'),
  features: jsonb('features'), // Array of feature objects
  technicalSpecs: jsonb('technical_specs'), // Key-value pairs
  installationInfo: text('installation_info'),
  dimensions: jsonb('dimensions'), // Width, height, depth
  weight: varchar('weight', { length: 50 }),
  warranty: varchar('warranty', { length: 100 }),
  status: varchar('status', { length: 50 }).default('active'), // active, out_of_stock, discontinued
  isFeatured: boolean('is_featured').default(false),
  sortOrder: integer('sort_order').default(0),
  seoTitle: text('seo_title'),
  seoDescription: text('seo_description'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

// Product Variants (Colors, Models like Classic/Economy, Forms like U/V)
export const productVariants = pgTable('product_variants', {
  id: serial('id').primaryKey(),
  productId: integer('product_id').references(() => products.id).notNull(),
  name: varchar('name', { length: 255 }).notNull(), // "Gold", "E2102S", "V Form"
  type: varchar('type', { length: 50 }).notNull(), // "color", "model", "form"
  value: varchar('value', { length: 255 }).notNull(), // "gold", "economy", "v_form"
  sku: varchar('sku', { length: 100 }),
  additionalInfo: jsonb('additional_info'), // Extra specs for this variant
  sortOrder: integer('sort_order').default(0),
  status: varchar('status', { length: 50 }).default('available'), // available, out_of_stock
  createdAt: timestamp('created_at').defaultNow(),
});

// Product Images
export const productImages = pgTable('product_images', {
  id: serial('id').primaryKey(),
  productId: integer('product_id').references(() => products.id).notNull(),
  variantId: integer('variant_id').references(() => productVariants.id), // null = main product image
  url: text('url').notNull(),
  alt: text('alt').notNull(),
  caption: text('caption'),
  isFeatured: boolean('is_featured').default(false), // Main hero image
  sortOrder: integer('sort_order').default(0),
  createdAt: timestamp('created_at').defaultNow(),
});

// Product Relations (Related Products, Cross-sells)
export const productRelations = pgTable('product_relations', {
  id: serial('id').primaryKey(),
  productId: integer('product_id').references(() => products.id).notNull(),
  relatedProductId: integer('related_product_id').references(() => products.id).notNull(),
  relationType: varchar('relation_type', { length: 50 }).notNull(), // "related", "cross_sell", "upsell", "alternative"
  sortOrder: integer('sort_order').default(0),
  createdAt: timestamp('created_at').defaultNow(),
});

// Relations for Drizzle ORM
export const categoriesRelations = relations(categories, ({ many }) => ({
  products: many(products),
}));

export const productsRelations = relations(products, ({ one, many }) => ({
  category: one(categories, {
    fields: [products.categoryId],
    references: [categories.id],
  }),
  variants: many(productVariants),
  images: many(productImages),
  relations: many(productRelations, { relationName: 'productToRelated' }),
  relatedTo: many(productRelations, { relationName: 'relatedToProduct' }),
}));

export const productVariantsRelations = relations(productVariants, ({ one, many }) => ({
  product: one(products, {
    fields: [productVariants.productId],
    references: [products.id],
  }),
  images: many(productImages),
}));

export const productImagesRelations = relations(productImages, ({ one }) => ({
  product: one(products, {
    fields: [productImages.productId],
    references: [products.id],
  }),
  variant: one(productVariants, {
    fields: [productImages.variantId],
    references: [productVariants.id],
  }),
}));

export const productRelationsRelations = relations(productRelations, ({ one }) => ({
  product: one(products, {
    fields: [productRelations.productId],
    references: [products.id],
    relationName: 'productToRelated',
  }),
  relatedProduct: one(products, {
    fields: [productRelations.relatedProductId],
    references: [products.id],
    relationName: 'relatedToProduct',
  }),
}));