const fs = require('fs');

const rawAttachment = fs.readFileSync('public/assets/aistudio/Paste_October_19__2026_-_4_29PM_fda2acf1', 'utf8');
const currentCatalog = fs.readFileSync('src/data/catalog.ts', 'utf8');

// Parse existing products to keep exact IDs, ranks, badges, and user-edited image URLs!
const existingProductsMap = new Map();
const blockRegex = /\{\s*id:\s*['"]([^'"]+)['"][\s\S]*?name:\s*['"]([^'"]+)['"][\s\S]*?categoryId:\s*['"]([^'"]+)['"][\s\S]*?image:\s*['"]([^'"]+)['"][\s\S]*?\}/g;
let m;
while ((m = blockRegex.exec(currentCatalog)) !== null) {
  const [fullBlock, id, name, categoryId, image] = m;
  const isTop5Match = fullBlock.match(/isTop5:\s*(true|false)/);
  const salesRankMatch = fullBlock.match(/salesRank:\s*(\d+)/);
  const badgeMatch = fullBlock.match(/badge:\s*['"]([^'"]+)['"]/);

  existingProductsMap.set(name.toLowerCase().trim(), {
    id,
    name,
    categoryId,
    image,
    isTop5: isTop5Match ? isTop5Match[1] === 'true' : false,
    salesRank: salesRankMatch ? parseInt(salesRankMatch[1], 10) : undefined,
    badge: badgeMatch ? badgeMatch[1] : undefined,
  });
}

console.log(`Loaded ${existingProductsMap.size} existing products from catalog.ts to preserve images/top5`);

function cleanNumber(str) {
  if (!str) return 0;
  const cleaned = str.replace(/[^\d.,]/g, '').trim();
  if (cleaned.includes('.') && cleaned.includes(',')) {
    return parseFloat(cleaned.replace(/\./g, '').replace(',', '.'));
  }
  if (cleaned.includes(',')) {
    const p = cleaned.split(',');
    if (p[1] && p[1].length === 3) {
      return parseFloat(p.join(''));
    } else {
      return parseFloat(p.join('.'));
    }
  }
  if (cleaned.includes('.')) {
    const p = cleaned.split('.');
    if (p.length > 2) {
      return parseFloat(p.join(''));
    }
    if (p[1] && p[1].length === 3) {
      return parseFloat(p.join(''));
    }
    return parseFloat(cleaned);
  }
  return parseFloat(cleaned) || 0;
}

const parts = rawAttachment.split('CATÁLOGO MAYORISTA — LISTA LIMPIA');
const retailPart = parts[0];
const wholesalePart = parts[1] || '';

function parseItems(text, isWholesale) {
  const pages = text.split(/--- PÁGINA\s+(\d+)\s+---/i);
  const items = [];
  let currentPage = 5;

  for (let i = 0; i < pages.length; i++) {
    const chunk = pages[i].trim();
    if (!chunk) continue;
    if (/^\d+$/.test(chunk)) {
      currentPage = parseInt(chunk, 10);
      continue;
    }

    const lines = chunk.split('\n').map(l => l.trim()).filter(Boolean);
    let currentItem = null;

    for (const line of lines) {
      if (
        line.startsWith('Efectivo:') ||
        line.startsWith('Transferencia:') ||
        line.startsWith('6 cuotas') ||
        line.startsWith('5u:') ||
        line.startsWith('10u:') ||
        line.startsWith('30u:')
      ) {
        if (currentItem) {
          currentItem.lines.push(line);
        }
      } else {
        if (currentItem && currentItem.lines.length > 0) {
          items.push(currentItem);
        }
        if (line.includes('Transcripción automática') || line.includes('CATÁLOGO MAYORISTA')) {
          currentItem = null;
          continue;
        }
        currentItem = {
          name: line.replace(/\s+/g, ' ').trim(),
          page: currentPage,
          lines: []
        };
      }
    }
    if (currentItem && currentItem.lines.length > 0) {
      items.push(currentItem);
    }
  }
  return items;
}

const retailItems = parseItems(retailPart, false);
const wholesaleItems = parseItems(wholesalePart, true);

console.log(`Parsed items: Retail = ${retailItems.length}, Wholesale = ${wholesaleItems.length}`);

// Normalization key for matching
function normalizeKey(str) {
  return str
    .toLowerCase()
    .replace(/\b100ml\b/g, '')
    .replace(/\b150ml\b/g, '')
    .replace(/\bedp\b/g, '')
    .replace(/\bedt\b/g, '')
    .replace(/\bparfum\b/g, '')
    .replace(/\breplica\b/g, '')
    .replace(/[^\w\s]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

// Build Wholesale Map
const wholesaleMap = new Map();
for (const item of wholesaleItems) {
  const key = `${item.page}_${normalizeKey(item.name)}`;
  const tiers = [];

  for (const line of item.lines) {
    // 5u: USD 33.5 | ARS $52,950
    const m = line.match(/^(\d+)u:\s*(?:USD\s*([\d.,]+))?(?:\s*\|\s*ARS\s*\$?([\d.,]+))?/i);
    if (m) {
      const units = parseInt(m[1], 10);
      const priceUsd = m[2] ? cleanNumber(m[2]) : 0;
      const priceArs = m[3] ? cleanNumber(m[3]) : Math.round(priceUsd * 1580);
      tiers.push({
        units,
        label: `${units}u`,
        priceUsd,
        priceArs
      });
    }
  }

  // Fallback if less than 3 tiers
  if (tiers.length === 1) {
    const base = tiers[0];
    tiers.push({
      units: 10,
      label: '10u',
      priceUsd: Math.round(base.priceUsd * 0.92 * 10) / 10,
      priceArs: Math.round(base.priceArs * 0.92)
    });
    tiers.push({
      units: 30,
      label: '30u',
      priceUsd: Math.round(base.priceUsd * 0.88 * 10) / 10,
      priceArs: Math.round(base.priceArs * 0.88)
    });
  }

  wholesaleMap.set(key, tiers);
  // Also store by name alone
  wholesaleMap.set(normalizeKey(item.name), tiers);
}

function getCategoryInfo(page, name) {
  const upper = name.toUpperCase();
  if (page <= 23) {
    return { id: 'perfumes-arabes', label: 'Línea Árabe' };
  } else if (page >= 24 && page <= 28) {
    return { id: 'perfumes-disenador', label: 'Diseñador & Nicho' };
  } else if (page >= 29 && page <= 30) {
    return { id: 'body-splash', label: "Victoria's Secret & Splash" };
  } else if (page === 32) {
    return { id: 'capilar', label: 'Línea Capilar Karseell' };
  } else if (page >= 34 && page <= 38) {
    return { id: 'tecnologia', label: 'Tecnología' };
  } else if (page === 40) {
    return { id: 'stanley-original', label: 'Stanley Original' };
  } else if (page >= 41) {
    return { id: 'bazar-segundas', label: 'Bazar Segundas Marcas' };
  }
  return { id: 'tecnologia', label: 'Tecnología' };
}

function getBrand(name, page) {
  const u = name.toUpperCase();
  if (u.includes('9PM') || u.includes('9AM') || u.includes('TURATHI') || u.includes('SUPREMACY') || u.includes('AFNAN')) return 'Afnan';
  if (u.includes('AMBER OUD') || u.includes('AL HARAMAIN')) return 'Al Haramain';
  if (u.includes('CLUB DE NUIT') || u.includes('ODYSSEY') || u.includes('ARMAF') || u.includes('CDN') || u.includes('CHECKMATE') || u.includes('DUNESCAPE') || u.includes('OVERDOSE') || u.includes('PRECIEUX') || u.includes('MALEKA')) return 'Armaf';
  if (u.includes('BHARARA') || u.includes('RAMSES') || u.includes('ROME')) return 'Bharara';
  if (u.includes('KHAMRAH') || u.includes('ASAD') || u.includes('BADEE') || u.includes('FAKHAR') || u.includes('YARA') || u.includes('MAYAR') || u.includes('ANGHAM') || u.includes('ECLAIRE') || u.includes('VICTORIA') || u.includes('EMEER') || u.includes('EMAAN') || u.includes('VINTAGE RADIO') || u.includes('HAYATTI') || u.includes('QIMMAH') || u.includes('TERIAQ') || u.includes('AMEERAT') || u.includes('AJWAD') || u.includes('ATLAS') || u.includes('CONFESSION') || u.includes('ANSAM') || u.includes('NEBRAS') || u.includes('QAED AL FURSAN') || u.includes('LATTAFA') || u.includes('CONFIDENTIAL') || u.includes('THE KINGDOM')) return 'Lattafa';
  if (u.includes('SALVO') || u.includes('PHILOS') || u.includes('SCEPTRE') || u.includes('JEAN LOWE') || u.includes('ALHAMBRA') || u.includes('MAITRE') || u.includes('DELILA') || u.includes('LEONIE') || u.includes('LA VIVACITÉ') || u.includes('LA VOIE') || u.includes('YEAH MAN') || u.includes('TRHONE')) return 'Maison Alhambra';
  if (u.includes('SABAH AL WARD') || u.includes('AL WATANIAH') || u.includes('ATTAR') || u.includes('AMEERATI')) return 'Al Wataniah';
  if (u.includes('NOIRE') || u.includes('FONDUE') || u.includes('ISLAND') || u.includes('VANILLA DUNES') || u.includes('LIQUID BRUN') || u.includes('SPECTRE') || u.includes('VENENO') || u.includes('AMBER EMPIRE') || u.includes('FREEZE')) return 'French Avenue';
  if (u.includes('JUNGLE VIBE') || u.includes('RAYHAAN') || u.includes('ITALIA POUR') || u.includes('VALHALLA') || u.includes('OCEAN RUSH') || u.includes('STALION') || u.includes('OBSIDIAN')) return 'Rayhaan';
  if (u.includes('HAWAS') || u.includes('RASASI')) return 'Rasasi';
  if (u.includes('STRONGER WITH YOU') || u.includes('ARMANI')) return 'Giorgio Armani';
  if (u.includes('JEAN PAUL') || u.includes('LE MALE') || u.includes('LE BAU') || u.includes('LE BEAU') || u.includes('SCANDAL')) return 'Jean Paul Gaultier';
  if (u.includes('ISSEY MIYAKE')) return 'Issey Miyake';
  if (u.includes('XERJOFF') || u.includes('HERJOFF') || u.includes('NAXOS') || u.includes('ERBA') || u.includes('TORINO 21')) return 'Xerjoff';
  if (u.includes('MONTALE')) return 'Montale';
  if (u.includes('MANCERA')) return 'Mancera';
  if (u.includes('VERSACE') || u.includes('EROS')) return 'Versace';
  if (u.includes('DOLCE')) return 'Dolce & Gabbana';
  if (u.includes('AZZARO')) return 'Azzaro';
  if (u.includes('GAME OF SPADES')) return 'Jo Milano Paris';
  if (u.includes('GOOD GIRL') || u.includes('CH ')) return 'Carolina Herrera';
  if (u.includes('TOM FORD')) return 'Tom Ford';
  if (u.includes('SABRINA')) return 'Sabrina Carpenter';
  if (u.includes('KARSEELL')) return 'Karseell';
  if (u.includes('STANLEY')) return 'Stanley';
  if (u.includes('JBL')) return 'JBL';
  if (u.includes('PS5') || u.includes('PS4') || u.includes('DUALSENSE') || u.includes('SONY') || u.includes('JOYSTICK')) return 'Sony';
  if (u.includes('IPHONE') || u.includes('AIRPODS') || u.includes('APPLE')) return 'Apple';
  if (u.includes('SAMSUNG')) return 'Samsung';
  if (u.includes('MOTOROLA')) return 'Motorola';
  if (u.includes('BODY SPLASH') || u.includes('BARE VANILLA') || u.includes('LOVE SPELL') || u.includes('PURE SEDUCTION') || u.includes('VELVET PETALS') || u.includes('AMBER ROMANCE') || u.includes('COCONUT') || u.includes('TEMPTATION') || u.includes('MIDNIGHT')) return "Victoria's Secret";
  if (page === 40) return 'Stanley';
  if (page >= 41) return 'Bazar Premium';
  return 'Gianitech Import';
}

function getImageForProduct(name, brand, categoryId, page) {
  const u = name.toUpperCase();
  // Check exact matches or keywords
  if (u.includes('9PM') || u.includes('9AM')) return 'https://jrsperfumes.com/cdn/shop/files/9pm-removebg-preview.png?v=1749592978&width=3840';
  if (u.includes('TURATHI')) return 'https://i.imgur.com/bL6T93g.png';
  if (u.includes('AMBER OUD')) return 'https://i.imgur.com/vBDcrFF.png';
  if (u.includes('CLUB DE NUIT')) return 'https://acdn-us.mitiendanube.com/stores/005/903/675/products/cdni-24e154a12cdf89591d17623095050589-480-0.webp';
  if (u.includes('ODYSSEY')) return '/src/assets/images/product_afnan_perfume_1792102618990.jpg';
  if (u.includes('BHARARA')) return 'https://i.imgur.com/9BXnPfy.png';
  if (u.includes('KHAMRAH')) return 'https://www.lattafaindia.com/cdn/shop/files/02_1_0dede060-b09b-4171-b1c9-f179965aca4a.png?v=1768807405&width=913';
  if (u.includes('ASAD')) return 'https://i.imgur.com/HATlcke.png';
  if (u.includes('BADEE')) return '/src/assets/images/product_badee_oud_1792105264124.jpg';
  if (u.includes('YARA')) return 'https://acdn-us.mitiendanube.com/stores/005/903/675/products/yarapink-ea00a850458be88a1517626370023696-480-0.webp';
  if (u.includes('HAWAS')) return '/src/assets/images/product_rasasi_hawas_1792106463596.jpg';
  if (u.includes('STRONGER WITH YOU')) return '/src/assets/images/product_armani_swy_1792105616708.jpg';
  if (u.includes('LE MALE') || u.includes('LE BEAU') || u.includes('LE BAU')) return '/src/assets/images/product_jpg_elixir_1792106477023.jpg';
  if (u.includes('SCANDAL')) return '/src/assets/images/product_designer_jpg_1792102620682.jpg';
  if (u.includes('EROS')) return '/src/assets/images/product_versace_eros_1792105615664.jpg';
  if (u.includes('XERJOFF') || u.includes('NAXOS') || u.includes('ERBA')) return '/src/assets/images/product_xerjoff_niche_1792105239357.jpg';
  if (u.includes('MONTALE')) return '/src/assets/images/product_montale_tonka_1792106128727.jpg';
  if (u.includes('GOOD GIRL')) return '/src/assets/images/product_ch_goodgirl_1792105263967.jpg';
  if (u.includes('TOM FORD')) return '/src/assets/images/product_tomford_ombre_1792105240577.jpg';
  if (u.includes('KARSEELL') || categoryId === 'capilar') return '/src/assets/images/product_karseell_hair_1792102621168.jpg';
  if (categoryId === 'body-splash') return '/src/assets/images/product_vs_mist_1792102621981.jpg';
  if (u.includes('TV BOX')) return '/src/assets/images/product_tv_box_4k.png';
  if (u.includes('PS5') && u.includes('JOYSTICK')) return 'https://enviocompras.com.ar/wp-content/uploads/2025/10/cropped-dualsense.webp';
  if (u.includes('PS5')) return 'https://tienda.personal.com.ar/images/720/webp/Consola_Play_Station_5_Digital_565dcdfca9.png';
  if (u.includes('PS4')) return 'https://enviocompras.com.ar/wp-content/uploads/2025/10/cropped-dualsense.webp';
  if (u.includes('GO 4')) return 'https://acdn-us.mitiendanube.com/stores/005/311/762/products/1000254372-59d737cf8fe5b2e5bd17313268272968-640-0.webp';
  if (u.includes('FLIP 7')) return 'https://media.hifi.lu/sys-master/products/9496416223262/2160x2160.33005325_01.webp';
  if (u.includes('JBL')) return '/src/assets/images/product_jbl_speaker_1792105224601.jpg';
  if (u.includes('CARGADOR') || u.includes('CABLE')) return '/src/assets/images/product_apple_chargers_1792106436011.jpg';
  if (u.includes('AIRPODS')) return '/src/assets/images/product_apple_airpods_1792106436167.jpg';
  if (u.includes('SAMSUNG') || u.includes('MOTOROLA')) return '/src/assets/images/product_samsung_galaxy_1792105263682.jpg';
  if (u.includes('QUENCHER')) return '/src/assets/images/product_stanley_tumbler_1792102623116.jpg';
  if (u.includes('MATE SYSTEM') || u.includes('TERMO 940') || u.includes('TERMO 800') || (page === 40 && u.includes('TERMO'))) return '/src/assets/images/product_stanley_termo_1792105239330.jpg';
  if (page === 40) return '/src/assets/images/product_stanley_iceflow_1792106129794.jpg';
  if (u.includes('AUTOCEBANTE') || u.includes('MATE LISTO')) return '/src/assets/images/product_mate_autocebante_1792106129917.jpg';
  if (page >= 41) return '/src/assets/images/product_combo_matero_1792105239385.jpg';
  if (categoryId === 'perfumes-arabes') return '/src/assets/images/product_lattafa_perfumes_1792102619700.jpg';
  if (categoryId === 'perfumes-disenador') return '/src/assets/images/product_dior_sauvage_1792105616995.jpg';
  return '/src/assets/images/hero_iphone_new.webp';
}

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/--+/g, '-')
    .trim();
}

// Map retail items into full DualProduct list
const finalProducts = [];
const seenSlugs = new Set();
let unnamedCounter = 1;

for (const rItem of retailItems) {
  let name = rItem.name;
  if (name.toUpperCase().includes('NOMBRE NO IDENTIFICADO')) {
    name = `Importado Especial VIP #${unnamedCounter++} (Pág. ${rItem.page})`;
  }

  const norm = normalizeKey(name);
  const cat = getCategoryInfo(rItem.page, name);
  const brand = getBrand(name, rItem.page);

  // Parse Retail lines
  let efectivo = 0;
  let transferencia = 0;
  let cuotas6 = 0;

  for (const line of rItem.lines) {
    if (line.toLowerCase().startsWith('efectivo:')) {
      efectivo = cleanNumber(line.split(':')[1]);
    } else if (line.toLowerCase().startsWith('transferencia:')) {
      transferencia = cleanNumber(line.split(':')[1]);
    } else if (line.toLowerCase().includes('cuotas')) {
      cuotas6 = cleanNumber(line.split(':')[1]);
    }
  }

  if (efectivo === 0 && transferencia > 0) efectivo = transferencia;
  if (transferencia === 0 && efectivo > 0) transferencia = efectivo;
  if (cuotas6 === 0 && efectivo > 0) cuotas6 = Math.round(efectivo * 1.15);

  // Match Wholesale
  let wholesaleTiers = wholesaleMap.get(`${rItem.page}_${norm}`) || wholesaleMap.get(norm);
  if (!wholesaleTiers || wholesaleTiers.length === 0) {
    // Generate logical wholesale from retail
    const baseArs5 = Math.round(efectivo * 0.78);
    const baseUsd5 = Math.round((baseArs5 / 1580) * 10) / 10;
    wholesaleTiers = [
      { units: 5, label: '5u', priceUsd: baseUsd5, priceArs: baseArs5 },
      { units: 10, label: '10u', priceUsd: Math.round(baseUsd5 * 0.92 * 10) / 10, priceArs: Math.round(baseArs5 * 0.92) },
      { units: 30, label: '30u', priceUsd: Math.round(baseUsd5 * 0.86 * 10) / 10, priceArs: Math.round(baseArs5 * 0.86) }
    ];
  }

  // Check if existed in previous catalog
  const existing = existingProductsMap.get(name.toLowerCase().trim()) || existingProductsMap.get(norm);
  let id = existing ? existing.id : slugify(`${cat.id}-${brand}-${name}`);
  if (seenSlugs.has(id)) {
    id = `${id}-${rItem.page}-${Math.floor(Math.random() * 100)}`;
  }
  seenSlugs.add(id);

  const image = existing ? existing.image : getImageForProduct(name, brand, cat.id, rItem.page);

  finalProducts.push({
    id,
    name,
    brand,
    categoryId: cat.id,
    categoryLabel: cat.label,
    image,
    badge: existing?.badge || (rItem.page === 5 || rItem.page === 10 || rItem.page === 24 || rItem.page === 34 ? 'DESTACADO' : undefined),
    isTop5: existing ? existing.isTop5 : false,
    salesRank: existing ? existing.salesRank : undefined,
    page: rItem.page,
    variant: `${brand} Oficial`,
    description: `Producto 100% auténtico con garantía y packaging sellado de importación. Pág. ${rItem.page}.`,
    retail: { efectivo, transferencia, cuotas6 },
    wholesale: wholesaleTiers
  });
}

// Add the original flagship products if any was missing (like iPhone 18 Pro)
const originalFlagships = [
  {
    id: 'iphone-18-pro-512',
    name: 'iPhone 18 Pro 512GB Black Titanium',
    brand: 'Apple',
    categoryId: 'tecnologia',
    categoryLabel: 'Tecnología',
    image: '/src/assets/images/hero_iphone_new.webp',
    badge: 'MÁS VENDIDO',
    isTop5: true,
    salesRank: 1,
    page: 38,
    variant: '512GB Black Titanium',
    description: 'Chasis de titanio de grado aeroespacial, chip A18 Pro y triple cámara sapphire crystal.',
    retail: { efectivo: 1850000, transferencia: 1950000, cuotas6: 2100000 },
    wholesale: [
      { units: 5, label: '5u', priceUsd: 1320, priceArs: 1980000 },
      { units: 10, label: '10u', priceUsd: 1290, priceArs: 1935000 },
      { units: 30, label: '30u', priceUsd: 1260, priceArs: 1890000 },
    ]
  }
];

for (const orig of originalFlagships) {
  if (!seenSlugs.has(orig.id)) {
    finalProducts.unshift(orig);
    seenSlugs.add(orig.id);
  }
}

// Ensure each category has at least Top 5 items marked with isTop5 and salesRank 1..5!
const categoriesList = ['tecnologia', 'perfumes-arabes', 'perfumes-disenador', 'body-splash', 'stanley-original', 'bazar-segundas', 'capilar'];

for (const cId of categoriesList) {
  const catItems = finalProducts.filter(p => p.categoryId === cId);
  const existingTop5 = catItems.filter(p => p.isTop5);
  let rank = 1;

  for (const item of catItems) {
    if (item.isTop5 && item.salesRank) {
      rank = Math.max(rank, item.salesRank + 1);
    }
  }

  for (const item of catItems) {
    if (rank > 5) break;
    if (!item.isTop5) {
      item.isTop5 = true;
      item.salesRank = rank++;
      if (!item.badge) item.badge = rank <= 2 ? 'MÁS VENDIDO' : 'DESTACADO';
    }
  }
}

console.log(`Generated ${finalProducts.length} total products ready for catalog.ts!`);

// Prepare TS output
const headerCode = currentCatalog.substring(0, currentCatalog.indexOf('export const ALL_PRODUCTS: DualProduct[] = ['));

const tsProducts = `export const ALL_PRODUCTS: DualProduct[] = ${JSON.stringify(finalProducts, null, 2)};\n`;

fs.writeFileSync('src/data/catalog.ts', headerCode + tsProducts, 'utf8');
console.log('Successfully wrote updated catalog.ts!');
