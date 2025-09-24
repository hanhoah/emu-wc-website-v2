import { db } from './index';
import { categories, products, productVariants, productImages, productRelations } from './schema';

export async function seedDatabase() {
  try {
    console.log('Seeding database...');

    // Insert categories
    const [smartCoversCategory, smartToiletsCategory] = await db
      .insert(categories)
      .values([
        {
          name: 'Smart Covers',
          slug: 'smart-covers',
          description: 'Intelligent toilet seat covers with bidet functionality, heated seats, and advanced hygiene features.',
          imageUrl: 'https://placehold.co/600x400/3889be/white?text=Smart+Covers',
          sortOrder: 1,
        },
        {
          name: 'Smart Toilets',
          slug: 'smart-toilets',
          description: 'Complete smart toilet systems with integrated technology for the ultimate bathroom experience.',
          imageUrl: 'https://placehold.co/600x400/e67e55/white?text=Smart+Toilets',
          sortOrder: 2,
        },
      ])
      .returning();

    console.log('Categories seeded');

    // Insert Smart Cover products
    const [e2100, e2102, e2200, e2300] = await db
      .insert(products)
      .values([
        {
          name: 'Electric Smart Cover E2100',
          slug: 'e2100',
          categoryId: smartCoversCategory.id,
          shortDescription: 'Revolutionize your hygiene routine with cutting-edge AIR+ Technology for a refreshing and powerful bidet experience.',
          description: `Revolutionize your hygiene routine with cutting-edge AIR+ Technology for a refreshing and powerful bidet experience. Features customizable decorative panels (White, Gold, Silver), adjustable water temperature and pressure, and comprehensive safety features.`,
          features: [
            { name: 'AIR+ Technology', description: 'Enhanced bidet performance for refreshing experience' },
            { name: 'Adjustable Settings', description: 'Water temperature, pressure, and spray position' },
            { name: 'Seat Heating', description: 'Adjustable dryer' },
            { name: 'Child Safety Mode', description: 'Smart nightlight' },
            { name: 'Energy-Saving Function', description: 'Eco-friendly operation' },
            { name: 'Customizable Decorative Panels', description: 'White, Gold, Silver options' },
            { name: 'Waterproof Design', description: 'Tested to function under water shower' },
            { name: 'Antibacterial Material', description: 'Fire-resistant material (V0 level)' },
            { name: 'AIR+ Dual Nozzle System', description: 'Rear and front wash modes' },
            { name: 'Oscillating Cleaning Function', description: '5-level adjustable shower wand position' },
            { name: 'Self-Cleaning Nozzle', description: 'Detachable nozzle' },
            { name: 'Warm Air Drying', description: 'Smart night light' },
            { name: 'Remote Control', description: 'Side control panel options' },
          ],
          technicalSpecs: {
            'Water Temperature': '5 adjustable levels',
            'Water Pressure': 'Variable adjustment',
            'Seat Material': 'Antibacterial ABS',
            'Remote Control': 'Waterproof',
            'Power Consumption': 'Energy efficient',
            'Installation': 'Standard toilet retrofit',
          },
          installationInfo: 'Easy retrofit installation on most standard toilets. Includes all mounting hardware and installation guide.',
          warranty: '2 years manufacturer warranty',
          status: 'out_of_stock',
          isFeatured: true,
          sortOrder: 1,
          seoTitle: 'EMU E2100 Electric Smart Cover - Smart Toilet Cover',
          seoDescription: 'Transform your bathroom with the EMU E2100 electric smart cover featuring heated seat, dual nozzles, and customizable panels.',
        },
        {
          name: 'Electric Smart Cover E2102',
          slug: 'e2102',
          categoryId: smartCoversCategory.id,
          shortDescription: 'Available in Classic and Economy variants with U and V shape options. Features advanced hygiene technology with durable UF material construction.',
          description: `Available in Classic and Economy variants with U and V shape options. Features advanced hygiene technology with durable UF material construction. Classic E2102 includes galvanized shower wand and fully waterproof remote, while Economy E2102S features antibacterial ABS shower wand and water-resistant remote.`,
          features: [
            { name: 'Classic E2102', description: 'U shape, V shape, UF material, Galvanized shower wand, Fully waterproof remote control' },
            { name: 'Economy E2102S', description: 'U shape, V shape, UF material, Antibacterial ABS shower wand, Water-resistant remote control' },
            { name: 'Antibacterial Material', description: 'Fire-resistant construction' },
            { name: 'Heated Seat', description: 'Adjustable temperature' },
            { name: 'AIR+ Dual Nozzle System', description: 'Rear and front wash modes' },
            { name: 'Oscillating Cleaning Function', description: '5-level adjustable shower wand position' },
            { name: 'Adjustable Settings', description: 'Water pressure and temperature' },
            { name: 'Self-Cleaning Nozzle', description: 'Detachable nozzle' },
            { name: 'Warm Air Drying Function', description: 'Smart night light' },
            { name: 'Child Wash Mode', description: 'Energy-saving mode' },
            { name: 'Multiple Controls', description: 'Remote and side control options' },
          ],
          technicalSpecs: {
            'Models': 'Classic E2102, Economy E2102S',
            'Shapes': 'U-shape, V-shape',
            'Material': 'UF (Urea Formaldehyde)',
            'Nozzle Classic': 'Galvanized shower wand',
            'Nozzle Economy': 'Antibacterial ABS shower wand',
            'Remote Classic': 'Fully waterproof',
            'Remote Economy': 'Water-resistant',
          },
          warranty: '2 years manufacturer warranty',
          status: 'out_of_stock',
          sortOrder: 2,
          seoTitle: 'EMU E2102 Electric Smart Cover - Classic & Economy Models',
          seoDescription: 'Choose between Classic and Economy E2102 smart covers with U or V shape options and premium features.',
        },
        {
          name: 'Electric Smart Cover E2200',
          slug: 'e2200',
          categoryId: smartCoversCategory.id,
          shortDescription: 'Mid-range smart smart cover with advanced wash modes and air drying functionality.',
          description: `The EMU E2200 Smart Cover provides comprehensive bidet functionality with multiple wash modes, air drying, and premium comfort features for the modern bathroom.`,
          features: [
            { name: 'Multiple Wash Modes', description: '5 different wash positions and patterns' },
            { name: 'Air Drying', description: 'Warm air dryer with adjustable temperature' },
            { name: 'Advanced Controls', description: 'Intuitive remote control system' },
            { name: 'Energy Efficient', description: 'Optimized power consumption' },
          ],
          technicalSpecs: {
            'Wash Positions': '5 adjustable positions',
            'Water Pressure': '5 levels',
            'Water Temperature': '7 levels',
            'Air Dryer': 'Variable temperature and speed',
          },
          warranty: '2 years manufacturer warranty',
          status: 'out_of_stock',
          sortOrder: 3,
          seoTitle: 'EMU E2200 Electric Smart Cover - Advanced Features',
          seoDescription: 'Experience advanced comfort with the EMU E2200 smart cover featuring multiple wash modes and air drying.',
        },
        {
          name: 'Electric Smart Cover E2300',
          slug: 'e2300',
          categoryId: smartCoversCategory.id,
          shortDescription: 'Available in basic and luxury variants with U and V shape options. Features LED display and customizable wash functions.',
          description: `Available in basic and luxury variants with U and V shape options. E2300UBH/VBH (basic functions): wash function, dryer, heated seat, LED light, LED display. E2300UDP/VDP (luxury functions): all basic functions plus automatic lid opening, foam shield, and wand sterilization.`,
          features: [
            { name: 'Basic Functions (UBH/VBH)', description: 'Wash function, Dryer, Heated seat, LED light, LED display' },
            { name: 'Luxury Functions (UDP/VDP)', description: 'Basic functions plus: Automatic lid opening, Foam shield, Wand sterilization' },
            { name: 'Shape Options', description: 'U-form (round/oval toilets), V-form (elongated toilets)' },
            { name: 'Customizable Wash Function', description: 'Adjustable water temperature and pressure' },
            { name: 'Antibacterial Seat', description: 'Flame-retardant material' },
            { name: 'LED Display', description: 'Real-time control of settings' },
            { name: 'Heated Seat', description: 'Adjustable temperature' },
            { name: 'Warm Air Dryer', description: 'Multiple temperature settings' },
            { name: 'Soft LED Night Light', description: 'Gentle illumination for nighttime use' },
          ],
          technicalSpecs: {
            'Display': 'LED temperature and function display',
            'Operation': 'Automatic opening/closing mechanism',
            'Wash Positions': '5 adjustable positions',
            'Water Temperature': '7 levels',
            'Water Pressure': '5 levels',
            'Special Features': 'Foam function with fragrance',
          },
          warranty: '2 years manufacturer warranty',
          status: 'out_of_stock',
          isFeatured: true,
          sortOrder: 4,
          seoTitle: 'EMU E2300 Electric Smart Cover - Premium Smart Toilet Cover',
          seoDescription: 'Discover the luxury EMU E2300 smart cover with LED display, automatic mechanisms, and advanced comfort features.',
        },
      ])
      .returning();

    // Insert Smart Toilet products  
    const [e8201s, e8305s] = await db
      .insert(products)
      .values([
        {
          name: 'E8201S',
          slug: 'e8201s',
          categoryId: smartToiletsCategory.id,
          shortDescription: 'Introducing the ultimate smart toilet engineered for supreme convenience and comfort. This state-of-the-art model boats hands-free opening and closing, reliable non-electric flushing, and customizable cleaning options',
          description: `Introducing the ultimate smart toilet engineered for supreme convenience and comfort. This state-of-the-art model boats hands-free opening and closing, reliable non-electric flushing, and customizable cleaning options. Size: 680mm×420mm×500mm.`,
          features: [
            { name: 'Hands-Free Opening/Closing', description: 'Radar flip or foot-operated cover and seat' },
            { name: 'Reliable Flushing', description: 'Non-electric flushing' },
            { name: 'Customizable Cleaning', description: 'Front and rear wash modes, Child mode with soft, gentle wash' },
            { name: 'Winter Comfort', description: 'Heated seat, Warm air dryer' },
            { name: 'Self-Cleaning Nozzle', description: 'Automatic nozzle cleaning' },
            { name: 'Nighttime Navigation', description: 'Energy-saving LED light' },
            { name: 'Durable Design', description: 'IPX4 waterproof rating' },
            { name: 'User-Friendly LCD Display', description: 'Adjust seat, water, and drying temperatures' },
            { name: 'Waterproof Remote Control', description: 'Fully waterproof operation' },
            { name: 'Bowl Moistening Feature', description: 'Automatic bowl preparation' },
            { name: 'Automatic and Manual Flushing Options', description: 'Flexible operation modes' },
          ],
          technicalSpecs: {
            'Dimensions': '680mm x 420mm x 500mm',
            'Installation': '305mm or 400mm rough-in',
            'Operation': 'Hands-free radar/foot control',
            'Flushing': 'Non-electric reliable system',
            'Waterproof Rating': 'IPX4',
            'Display': 'LCD temperature control',
            'Remote': 'Waterproof remote control',
          },
          installationInfo: 'Professional installation recommended. Compatible with 305mm or 400mm rough-in configurations.',
          dimensions: {
            width: '680mm',
            height: '500mm', 
            depth: '420mm',
          },
          warranty: '2 years manufacturer warranty',
          status: 'active',
          isFeatured: true,
          sortOrder: 1,
          seoTitle: 'EMU E8201S Smart Toilet - Complete Integrated System',
          seoDescription: 'Experience ultimate bathroom luxury with the EMU E8201S smart toilet featuring hands-free operation and integrated bidet.',
        },
        {
          name: 'E8305S',
          slug: 'e8305s',
          categoryId: smartToiletsCategory.id,
          shortDescription: 'Introducing the ultimate smart toilet, designed for ultimate convenience and comfort. This state-of-the-art model features hands-free opening and closing, reliable non-electric flushing, and customizable cleaning options.',
          description: `Introducing the ultimate smart toilet, designed for ultimate convenience and comfort. This state-of-the-art model features hands-free opening and closing, reliable non-electric flushing, and customizable cleaning options. Dimensions: 680mm×420mm×490mm.`,
          features: [
            { name: 'Hands-Free Opening/Closing', description: 'Radar flip or foot-operated' },
            { name: 'Reliable Non-Electric Flushing', description: 'Dependable flushing system' },
            { name: 'Customizable Cleaning', description: 'Front/rear wash modes, Child mode with soft wash' },
            { name: 'Heated Seat', description: 'Comfortable temperature control' },
            { name: 'Warm Air Dryer', description: 'Efficient drying system' },
            { name: 'Self-Cleaning Nozzle', description: 'Automatic hygiene maintenance' },
            { name: 'Energy-Saving LED Nighttime Navigation', description: 'Convenient lighting' },
            { name: 'IPX4 Waterproof Rating', description: 'Reliable performance' },
            { name: 'User-Friendly LCD Display', description: 'Easy control interface' },
            { name: 'Ambient Lighting Strip', description: 'Enhanced atmosphere' },
            { name: 'Waterproof Remote Control', description: 'Reliable operation' },
            { name: 'Bowl Moistening Feature', description: 'Automatic preparation' },
            { name: 'Automatic and Manual Flushing Options', description: 'Flexible modes' },
          ],
          technicalSpecs: {
            'Dimensions': '680mm×420mm×490mm',
            'Installation': '305mm or 400mm rough-in (300 or 400 hole spacing)',
            'Opening/Closing': 'Hands-free radar flip or foot-operated',
            'Flushing': 'Reliable non-electric flushing',
            'Cleaning': 'Front/rear wash modes, child mode',
            'Comfort': 'Heated seat, warm air dryer',
            'Technology': 'Self-cleaning nozzle, LED display, ambient lighting',
            'Safety': 'IPX4 waterproof rating',
            'Control': 'Waterproof remote control',
          },
          installationInfo: 'Professional installation required. Includes comprehensive setup and configuration service.',
          warranty: '2 years manufacturer warranty',
          status: 'active',
          isFeatured: true,
          sortOrder: 2,
          seoTitle: 'EMU E8305S Premium Smart Toilet - Luxury Technology',
          seoDescription: 'Ultimate luxury with the EMU E8305S smart toilet featuring advanced technology, health monitoring, and premium materials.',
        },
      ])
      .returning();

    console.log('Products seeded');

    // Insert variants for E2100 (Colors: Gold, Silver, White)
    await db.insert(productVariants).values([
      { productId: e2100.id, name: 'Gold', type: 'color', value: 'gold', sortOrder: 1 },
      { productId: e2100.id, name: 'Silver', type: 'color', value: 'silver', sortOrder: 2 },
      { productId: e2100.id, name: 'White', type: 'color', value: 'white', sortOrder: 3 },
    ]);

    // Insert variants for E2102 (Models + Forms)
    const [e2102Classic, e2102Economy] = await db.insert(productVariants).values([
      { productId: e2102.id, name: 'Classic E2102', type: 'model', value: 'classic', sku: 'E2102-CLASSIC', sortOrder: 1 },
      { productId: e2102.id, name: 'Economy E2102S', type: 'model', value: 'economy', sku: 'E2102S-ECONOMY', sortOrder: 2 },
    ]).returning();

    await db.insert(productVariants).values([
      { productId: e2102.id, name: 'U Form', type: 'form', value: 'u_form', sortOrder: 1 },
      { productId: e2102.id, name: 'V Form', type: 'form', value: 'v_form', sortOrder: 2 },
    ]);

    // Insert variants for E2300 (Specific model variants)
    await db.insert(productVariants).values([
      { productId: e2300.id, name: 'E2300UBH', type: 'model', value: 'ubh', sku: 'E2300UBH', sortOrder: 1, additionalInfo: { type: 'basic', shape: 'u', description: 'U shape, basic functions' } },
      { productId: e2300.id, name: 'E2300VBH', type: 'model', value: 'vbh', sku: 'E2300VBH', sortOrder: 2, additionalInfo: { type: 'basic', shape: 'v', description: 'V shape, basic functions' } },
      { productId: e2300.id, name: 'E2300UDP', type: 'model', value: 'udp', sku: 'E2300UDP', sortOrder: 3, additionalInfo: { type: 'luxury', shape: 'u', description: 'U shape, luxury functions' } },
      { productId: e2300.id, name: 'E2300VDP', type: 'model', value: 'vdp', sku: 'E2300VDP', sortOrder: 4, additionalInfo: { type: 'luxury', shape: 'v', description: 'V shape, luxury functions' } },
    ]);

    console.log('Product variants seeded');

    // Insert sample product images (using new folder structure)
    await db.insert(productImages).values([
      // E2100 images
      { productId: e2100.id, url: '/images/products/smart-covers/e2100/e2100-1.jpg', alt: 'EMU E2100 Smart Cover', isFeatured: true, sortOrder: 1 },
      { productId: e2100.id, url: '/images/products/smart-covers/e2100/e2100-2.jpg', alt: 'E2100 Side View', sortOrder: 2 },
      { productId: e2100.id, url: '/images/products/smart-covers/e2100/e2100-remote.jpg', alt: 'E2100 Remote Control', sortOrder: 3 },
      { productId: e2100.id, url: '/images/products/smart-covers/e2100/e2100-panel-white.jpg', alt: 'E2100 White Panel', sortOrder: 4 },
      { productId: e2100.id, url: '/images/products/smart-covers/e2100/e2100-panel-gold.jpg', alt: 'E2100 Gold Panel', sortOrder: 5 },
      { productId: e2100.id, url: '/images/products/smart-covers/e2100/e2100-panel-silver.jpg', alt: 'E2100 Silver Panel', sortOrder: 6 },
      
      // E2102 images  
      { productId: e2102.id, url: '/images/products/smart-covers/e2102/e2102-1.jpg', alt: 'EMU E2102 Smart Cover', isFeatured: true, sortOrder: 1 },
      { productId: e2102.id, url: '/images/products/smart-covers/e2102/e2102-2.jpg', alt: 'E2102 Side View', sortOrder: 2 },
      { productId: e2102.id, url: '/images/products/smart-covers/e2102/e2102-u-shape.jpg', alt: 'E2102 U Shape', sortOrder: 3 },
      { productId: e2102.id, url: '/images/products/smart-covers/e2102/e2102-v-shape.jpg', alt: 'E2102 V Shape', sortOrder: 4 },
      { productId: e2102.id, url: '/images/products/smart-covers/e2102/e2102-remote.jpg', alt: 'E2102 Remote Control', sortOrder: 5 },
      
      // E2200 images
      { productId: e2200.id, url: '/images/products/smart-covers/e2200/1.jpg', alt: 'EMU E2200 Smart Cover', isFeatured: true, sortOrder: 1 },
      { productId: e2200.id, url: '/images/products/smart-covers/e2200/2.jpg', alt: 'E2200 Side View', sortOrder: 2 },
      { productId: e2200.id, url: '/images/products/smart-covers/e2200/3.jpg', alt: 'E2200 Features', sortOrder: 3 },
      { productId: e2200.id, url: '/images/products/smart-covers/e2200/4.jpg', alt: 'E2200 Detail View', sortOrder: 4 },
      { productId: e2200.id, url: '/images/products/smart-covers/e2200/5.jpg', alt: 'E2200 Controls', sortOrder: 5 },
      { productId: e2200.id, url: '/images/products/smart-covers/e2200/6.jpg', alt: 'E2200 Installation', sortOrder: 6 },
      { productId: e2200.id, url: '/images/products/smart-covers/e2200/7.jpg', alt: 'E2200 Components', sortOrder: 7 },
      { productId: e2200.id, url: '/images/products/smart-covers/e2200/8.jpg', alt: 'E2200 Remote Control', sortOrder: 8 },
      { productId: e2200.id, url: '/images/products/smart-covers/e2200/9.jpg', alt: 'E2200 Technical View', sortOrder: 9 },
      { productId: e2200.id, url: '/images/products/smart-covers/e2200/10.jpg', alt: 'E2200 Assembly', sortOrder: 10 },
      { productId: e2200.id, url: '/images/products/smart-covers/e2200/11.jpg', alt: 'E2200 Features Detail', sortOrder: 11 },
      { productId: e2200.id, url: '/images/products/smart-covers/e2200/13.jpg', alt: 'E2200 Specifications', sortOrder: 12 },
      { productId: e2200.id, url: '/images/products/smart-covers/e2200/14.jpg', alt: 'E2200 Complete Set', sortOrder: 13 },
      
      // E2300 images
      { productId: e2300.id, url: '/images/products/smart-covers/e2300/e2300-1.jpg', alt: 'EMU E2300 Smart Cover', isFeatured: true, sortOrder: 1 },
      { productId: e2300.id, url: '/images/products/smart-covers/e2300/e2300-2.jpg', alt: 'E2300 Side View', sortOrder: 2 },
      { productId: e2300.id, url: '/images/products/smart-covers/e2300/e2300-u-basic.jpg', alt: 'E2300 U Shape Basic', sortOrder: 3 },
      { productId: e2300.id, url: '/images/products/smart-covers/e2300/e2300-u-luxury.jpg', alt: 'E2300 U Shape Luxury', sortOrder: 4 },
      { productId: e2300.id, url: '/images/products/smart-covers/e2300/e2300-v-basic.jpg', alt: 'E2300 V Shape Basic', sortOrder: 5 },
      { productId: e2300.id, url: '/images/products/smart-covers/e2300/e2300-v-luxury.jpg', alt: 'E2300 V Shape Luxury', sortOrder: 6 },
      
      // E8201S images
      { productId: e8201s.id, url: '/images/products/smart-toilets/e8201s/e8201s-1.jpg', alt: 'EMU E8201S Smart Toilet', isFeatured: true, sortOrder: 1 },
      { productId: e8201s.id, url: '/images/products/smart-toilets/e8201s/e8201s-2.jpg', alt: 'E8201S Side View', sortOrder: 2 },
      { productId: e8201s.id, url: '/images/products/smart-toilets/e8201s/e8201s-3.jpg', alt: 'E8201S Features Detail', sortOrder: 3 },
      { productId: e8201s.id, url: '/images/products/smart-toilets/e8201s/e8201s-remote.jpg', alt: 'E8201S Remote Control', sortOrder: 4 },
      
      // E8305S images
      { productId: e8305s.id, url: '/images/products/smart-toilets/e8305s/e8305s-1.jpg', alt: 'EMU E8305S Smart Toilet', isFeatured: true, sortOrder: 1 },
      { productId: e8305s.id, url: '/images/products/smart-toilets/e8305s/e8305s-2.jpg', alt: 'E8305S Side View', sortOrder: 2 },
      { productId: e8305s.id, url: '/images/products/smart-toilets/e8305s/e8305s-3.jpg', alt: 'E8305S Features Detail', sortOrder: 3 },
      { productId: e8305s.id, url: '/images/products/smart-toilets/e8305s/e8305s-remote.jpg', alt: 'E8305S Remote Control', sortOrder: 4 },
    ]);

    console.log('Product images seeded');

    // Insert product relations (related products)
    await db.insert(productRelations).values([
      // Smart Covers relate to each other
      { productId: e2100.id, relatedProductId: e2102.id, relationType: 'related', sortOrder: 1 },
      { productId: e2100.id, relatedProductId: e2300.id, relationType: 'upsell', sortOrder: 2 },
      { productId: e2102.id, relatedProductId: e2100.id, relationType: 'related', sortOrder: 1 },
      { productId: e2102.id, relatedProductId: e2200.id, relationType: 'related', sortOrder: 2 },
      { productId: e2200.id, relatedProductId: e2300.id, relationType: 'upsell', sortOrder: 1 },
      { productId: e2300.id, relatedProductId: e8305s.id, relationType: 'upsell', sortOrder: 1 },
      
      // Smart Toilets relate to each other and smart covers
      { productId: e8201s.id, relatedProductId: e8305s.id, relationType: 'upsell', sortOrder: 1 },
      { productId: e8201s.id, relatedProductId: e2300.id, relationType: 'alternative', sortOrder: 2 },
      { productId: e8305s.id, relatedProductId: e8201s.id, relationType: 'related', sortOrder: 1 },
    ]);

    console.log('Product relations seeded');
    console.log('Database seeding completed successfully!');

  } catch (error) {
    console.error('Error seeding database:', error);
    throw error;
  }
}