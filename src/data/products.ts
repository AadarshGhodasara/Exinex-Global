import type { Product, ProductCategory } from '../types/product';

export const categories: ProductCategory[] = [
{
  id: 'scrap',
  name: 'Plastic Scraps',
  description: 'HDPE, LDPE, PP, HIPS and ABS — sorted, baled or reground for recyclers and processors.',
  items: ['HDPE', 'LDPE', 'PP', 'HIPS', 'ABS']
},
{
  id: 'raw',
  name: 'Raw Materials',
  description: 'Reprocessed and prime plastic granules ready for moulding and extrusion lines.',
  items: ['Plastic granules', 'Reprocessed & prime']
},
{
  id: 'products',
  name: 'Plastic Products',
  description: 'Finished plastic nets, sheets, louvers and related products for trade and industry.',
  items: ['Nets', 'Sheets', 'Louvers', 'Related products']
}];


export const products: Product[] = [
{
  slug: 'hdpe-scrap',
  name: 'HDPE Scrap',
  category: 'scrap',
  image: "/8b394bed-b2c0-402a-ae0e-1475a67fa45d.jpg",
  summary: 'Baled and reground high-density polyethylene from bottles, drums, crates and pipes.',
  description:
  'Our HDPE scrap is sourced from verified post-industrial and post-consumer streams, then sorted by colour and application before baling or grinding. Every lot is checked for contamination and moisture so it runs cleanly on your extrusion and moulding lines.',
  highlights: ['Bales & regrind', 'Natural / mixed colour'],
  specifications: [
  { label: 'Material', value: 'High-Density Polyethylene (HDPE)' },
  { label: 'Forms', value: 'Bales, regrind, lumps' },
  { label: 'Colours', value: 'Natural, single colour, mixed colour' },
  { label: 'Sources', value: 'Milk bottles, drums, crates, pipes' },
  { label: 'Density', value: '0.94 – 0.97 g/cm³' },
  { label: 'Moisture', value: '< 1% (regrind)' },
  { label: 'Contamination', value: 'Sorted, < 2%' },
  { label: 'Container load', value: 'Approx. 18 – 22 MT per 40′ HC' }],

  applications: [
  'Pipe and conduit extrusion',
  'Blow-moulded containers',
  'Injection-moulded crates and pallets',
  'Recycled granule production'],

  grades: ['Milk-bottle bales', 'Drum regrind', 'Crate regrind', 'Pipe scrap'],
  packaging: 'Compressed bales or jumbo bags',
  moq: '1 × 40′ container',
  hsCode: '3915.10'
},
{
  slug: 'ldpe-scrap',
  name: 'LDPE Scrap',
  category: 'scrap',
  image: "/65ce379a-0c39-42d1-8ed6-7386f8ce93fa.jpg",
  summary: 'Clear and printed low-density polyethylene film scrap, baled for easy handling.',
  description:
  'We supply LDPE film scrap from packaging, stretch-wrap and shrink-film sources. Material is graded by clarity and print level, so film blowers and granule makers receive consistent, predictable feedstock.',
  highlights: ['98/2 clear film', 'Baled'],
  specifications: [
  { label: 'Material', value: 'Low-Density Polyethylene (LDPE)' },
  { label: 'Forms', value: 'Bales, film rolls, lumps' },
  { label: 'Colours', value: 'Clear, natural, printed' },
  { label: 'Sources', value: 'Stretch film, shrink wrap, packaging film' },
  { label: 'Density', value: '0.91 – 0.94 g/cm³' },
  { label: 'Contamination', value: '98/2 and 95/5 grades available' },
  { label: 'Container load', value: 'Approx. 16 – 20 MT per 40′ HC' }],

  applications: [
  'Film blowing and extrusion',
  'Garbage and carry bags',
  'Agricultural film',
  'Recycled granule production'],

  grades: ['98/2 clear film', '95/5 film', 'Printed film', 'Film lumps'],
  packaging: 'Compressed bales',
  moq: '1 × 40′ container',
  hsCode: '3915.10'
},
{
  slug: 'pp-scrap',
  name: 'PP Scrap',
  category: 'scrap',
  image: "/aebd2b91-ced8-46b1-93cd-071cbe76e847.jpg",
  summary: 'Polypropylene regrind and lumps from crates, containers, raffia and non-woven.',
  description:
  'Our PP scrap covers rigid and flexible streams, from injection-moulded crates to raffia and non-woven offcuts. We separate by source and colour to give compounders and moulders material that behaves consistently.',
  highlights: ['Regrind & lumps', 'Rigid and raffia'],
  specifications: [
  { label: 'Material', value: 'Polypropylene (PP) — homo & copolymer' },
  { label: 'Forms', value: 'Regrind, lumps, bales' },
  { label: 'Colours', value: 'Natural, black, mixed colour' },
  { label: 'Sources', value: 'Crates, containers, raffia, non-woven' },
  { label: 'Density', value: '0.90 – 0.91 g/cm³' },
  { label: 'Moisture', value: '< 1% (regrind)' },
  { label: 'Container load', value: 'Approx. 20 – 24 MT per 40′ HC' }],

  applications: [
  'Injection-moulded household goods',
  'Automotive components',
  'Raffia and strapping',
  'Compounding and granulation'],

  grades: ['Crate regrind', 'Raffia bales', 'Non-woven scrap', 'PP lumps'],
  packaging: 'Jumbo bags or bales',
  moq: '1 × 40′ container',
  hsCode: '3915.90'
},
{
  slug: 'hips-scrap',
  name: 'HIPS Scrap',
  category: 'scrap',
  image: "/dbf4adbe-75f6-493c-8e32-ba29bf639466.jpg",
  summary: 'High-impact polystyrene regrind from appliance liners, housings and sheet offcuts.',
  description:
  'HIPS scrap from refrigerator liners, appliance housings and thermoforming offcuts, sorted by colour and ground to a uniform flake size. Suitable for sheet extrusion and general-purpose injection moulding.',
  highlights: ['White / black', 'Uniform flake'],
  specifications: [
  { label: 'Material', value: 'High-Impact Polystyrene (HIPS)' },
  { label: 'Forms', value: 'Regrind, lumps, sheet offcuts' },
  { label: 'Colours', value: 'White, black, mixed colour' },
  { label: 'Sources', value: 'Fridge liners, appliance housings, thermoforming' },
  { label: 'Density', value: '1.03 – 1.06 g/cm³' },
  { label: 'Container load', value: 'Approx. 18 – 22 MT per 40′ HC' }],

  applications: [
  'Sheet extrusion',
  'Injection-moulded housings',
  'Hangers and stationery',
  'Compounding'],

  grades: ['Fridge liner regrind', 'White HIPS', 'Black HIPS', 'Mixed HIPS'],
  packaging: 'Jumbo bags',
  moq: '1 × 40′ container',
  hsCode: '3915.20'
},
{
  slug: 'abs-scrap',
  name: 'ABS Scrap',
  category: 'scrap',
  image: "/7b6a39f6-5596-496e-b635-d646fe41dcb2.jpg",
  summary: 'ABS regrind and lumps from electronic housings, automotive and appliance parts.',
  description:
  'ABS scrap recovered from electronics, automotive interiors and appliance components. Lots are separated from other engineering plastics and metals to deliver clean, compoundable material.',
  highlights: ['Grey / black', 'Metal-free'],
  specifications: [
  { label: 'Material', value: 'Acrylonitrile Butadiene Styrene (ABS)' },
  { label: 'Forms', value: 'Regrind, lumps, purgings' },
  { label: 'Colours', value: 'Grey, black, white, mixed colour' },
  { label: 'Sources', value: 'Electronic housings, automotive, appliances' },
  { label: 'Density', value: '1.04 – 1.07 g/cm³' },
  { label: 'Contamination', value: 'Metal-separated, sorted' },
  { label: 'Container load', value: 'Approx. 18 – 22 MT per 40′ HC' }],

  applications: [
  'Compounding and granulation',
  'Electrical housings',
  'Automotive interior parts',
  'General injection moulding'],

  grades: ['Electronic housing regrind', 'Automotive ABS', 'ABS lumps', 'ABS purgings'],
  packaging: 'Jumbo bags',
  moq: '1 × 40′ container',
  hsCode: '3915.20'
},
{
  slug: 'plastic-granules',
  name: 'Plastic Granules',
  category: 'raw',
  image: "/a443037f-c616-42bf-a239-fda60075a7cc.jpg",
  summary: 'Reprocessed and prime granules in HDPE, LDPE, LLDPE, PP, HIPS and ABS.',
  description:
  'Uniform pellets produced by our partner processors, available in reprocessed and prime grades. Each lot is supplied with grade details so you can match melt flow and colour to your moulding or extrusion process.',
  highlights: ['Reprocessed & prime', 'Custom colours'],
  specifications: [
  { label: 'Polymers', value: 'HDPE, LDPE, LLDPE, PP, HIPS, ABS' },
  { label: 'Form', value: 'Pellets, 3 – 5 mm' },
  { label: 'Grades', value: 'Reprocessed and prime' },
  { label: 'Melt flow index', value: 'Grade-specific, shared per lot' },
  { label: 'Colours', value: 'Natural, black, custom masterbatch' },
  { label: 'Moisture', value: '< 0.1%' },
  { label: 'Container load', value: 'Approx. 24 – 26 MT per 40′ container' }],

  applications: [
  'Injection moulding',
  'Blow moulding',
  'Film extrusion',
  'Pipe and profile extrusion'],

  grades: ['Injection grade', 'Blow-moulding grade', 'Film grade', 'Pipe grade'],
  packaging: '25 kg bags or 1 MT jumbo bags',
  moq: '1 × 20′ container',
  hsCode: '3901 – 3903'
},
{
  slug: 'plastic-nets',
  name: 'Plastic Nets',
  category: 'products',
  image: "/157c50e9-9b6f-4178-8c4d-a298dbe69f92.jpg",
  summary: 'UV-stabilised HDPE shade, garden, safety and anti-insect nets in rolls.',
  description:
  'Durable knitted and extruded nets made from UV-stabilised HDPE and PP monofilament. Available across a wide range of shade percentages, widths and colours for agriculture, construction and fencing.',
  highlights: ['UV stabilised', '35 – 90% shade'],
  specifications: [
  { label: 'Material', value: 'HDPE / PP monofilament' },
  { label: 'Types', value: 'Shade, garden, safety, anti-insect, fencing' },
  { label: 'Shade factor', value: '35% – 90%' },
  { label: 'Width', value: '1 m – 6 m' },
  { label: 'Roll length', value: '50 m – 100 m' },
  { label: 'UV stabilisation', value: 'Yes' },
  { label: 'Colours', value: 'Green, black, white, beige' }],

  applications: [
  'Agricultural and nursery shading',
  'Construction safety',
  'Garden and boundary fencing',
  'Poultry and livestock enclosures'],

  grades: ['Shade net', 'Anti-insect net', 'Safety net', 'Garden net'],
  packaging: 'Rolls with outer PP wrap',
  moq: 'On request',
  hsCode: '5608.19'
},
{
  slug: 'plastic-sheets',
  name: 'Plastic Sheets',
  category: 'products',
  image: "/cb8a50d7-6ec0-4012-be57-7c16a9c21156.jpg",
  summary: 'PP, HDPE, HIPS, ABS and PVC sheets in standard and custom sizes.',
  description:
  'Extruded plastic sheets for signage, packaging, thermoforming and industrial use. We supply standard board sizes or cut-to-size sheets across a range of thicknesses, finishes and colours.',
  highlights: ['0.5 – 20 mm', 'Cut to size'],
  specifications: [
  { label: 'Materials', value: 'PP, HDPE, HIPS, ABS, PVC' },
  { label: 'Thickness', value: '0.5 mm – 20 mm' },
  { label: 'Standard size', value: '1220 × 2440 mm, custom on request' },
  { label: 'Finish', value: 'Glossy, matte, textured' },
  { label: 'Colours', value: 'White, black, grey, clear, custom' }],

  applications: [
  'Signage and displays',
  'Thermoforming and packaging',
  'Industrial lining and guards',
  'Construction and interiors'],

  grades: ['PP sheet', 'HDPE sheet', 'HIPS sheet', 'ABS sheet', 'PVC sheet'],
  packaging: 'Palletised with protective film',
  moq: 'On request',
  hsCode: '3920'
},
{
  slug: 'plastic-louvers',
  name: 'Plastic Louvers',
  category: 'products',
  image: "/cc47eb4c-411e-41ff-984f-55d50a2f1f48.jpg",
  summary: 'uPVC and ABS ventilation louvers and blades for buildings and enclosures.',
  description:
  'Weather-resistant plastic louvers for ventilation, shading and airflow control. Light, corrosion-free and easy to install, they are supplied as complete panels or individual blades in custom sizes.',
  highlights: ['Corrosion free', 'Custom sizes'],
  specifications: [
  { label: 'Materials', value: 'uPVC, ABS, PP' },
  { label: 'Types', value: 'Ventilation louvers, window blades, grilles' },
  { label: 'Sizes', value: 'Standard and custom' },
  { label: 'Finish', value: 'UV-resistant, smooth or wood-tone' },
  { label: 'Colours', value: 'White, grey, beige, wood-tone' }],

  applications: [
  'Building ventilation',
  'Window shading',
  'Industrial enclosures',
  'HVAC air intake and exhaust'],

  grades: ['Ventilation louver', 'Window blades', 'Air grilles'],
  packaging: 'Cartons or palletised',
  moq: 'On request',
  hsCode: '3925.90'
}];