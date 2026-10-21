export type SalesChannel = 'minorista' | 'mayorista';

export interface WholesaleTier {
  units: number; // 5, 10, 30
  label: string; // "5u", "10u", "30u"
  priceUsd: number;
  priceArs: number;
}

export interface RetailPrice {
  efectivo: number;
  transferencia: number;
  cuotas6: number;
}

export interface DualProduct {
  id: string;
  name: string;
  brand: string;
  categoryId: 'tecnologia' | 'perfumes-arabes' | 'perfumes-disenador' | 'body-splash' | 'stanley-original' | 'bazar-segundas' | 'capilar';
  categoryLabel: string;
  image: string;
  badge?: 'MÁS VENDIDO' | 'NOVEDAD' | 'OFERTA' | 'DESTACADO';
  isTop5?: boolean;
  salesRank?: number; // 1 to 5 for the top 5
  page: number;
  retail: RetailPrice;
  wholesale: WholesaleTier[];
  variant?: string;
  description?: string;
  wholesaleOnly?: boolean;
}

export interface CategoryInfo {
  id: DualProduct['categoryId'];
  name: string;
  tagline: string;
  shortDesc: string;
  image: string;
}

export const GIANITECH_CONTACT = {
  name: 'GIANITECH',
  subname: 'IMPORTADOS',
  fullName: 'GIANITECH IMPORTADOS',
  tagline: 'Tecnología · Perfumería · Bazar Térmico',
  showroom: 'Espacio Dual — Calle 43 e/ 11 y 12 #845, La Plata',
  whatsapp: '+54 9 221 202-9666',
  whatsappDigits: '5492212029666',
  whatsappGtDigits: '5492212029666',
  instagram: '@gianitech.import',
  instagramUrl: 'https://instagram.com/gianitech.import',
  hours: 'Lunes a Sábado de 10:00 a 20:00 hs',
};

export const USD_RATE = 1250;

export const formatArs = (amount: number): string => {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    maximumFractionDigits: 0,
  }).format(amount);
};

export const formatUsd = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 1,
  }).format(amount);
};

export const STORE_CATEGORIES: CategoryInfo[] = [
  {
    id: 'tecnologia',
    name: 'Tecnología & Apple',
    tagline: 'iPhones, Consolas & Audio',
    shortDesc: 'iPhones sellados, PlayStation 5, mandos oficiales, JBL y accesorios de carga rápida',
    image: '/src/assets/images/hero_iphone_flagship_1792121376351.jpg',
  },
  {
    id: 'perfumes-arabes',
    name: 'Línea Árabe',
    tagline: 'Afnan, Lattafa, Armaf, Bharara',
    shortDesc: 'Perfumería oriental importada con fijación extrema y aromas magnéticos',
    image: '/src/assets/images/product_afnan_9pm_1792106463194.jpg',
  },
  {
    id: 'perfumes-disenador',
    name: 'Diseñador & Nicho',
    tagline: 'JPG, Xerjoff, Versace, Armani',
    shortDesc: 'Fragancias icónicas de la alta perfumería internacional con probadores en showroom',
    image: '/src/assets/images/product_jpg_elixir_1792106477023.jpg',
  },
  {
    id: 'stanley-original',
    name: 'Stanley Original',
    tagline: 'Termos, Mate System & Vasos Quencher',
    shortDesc: '100% Originales garantizados de acero inoxidable térmico',
    image: '/src/assets/images/product_stanley_tumbler_1792102623116.jpg',
  },
  {
    id: 'body-splash',
    name: "Victoria's Secret & Splash",
    tagline: 'Mists Corporales & Cremas',
    shortDesc: 'Fragancias dulces y frescas Bare Vanilla, Love Spell, Pure Seduction',
    image: '/src/assets/images/product_vs_mist_1792102621981.jpg',
  },
  {
    id: 'bazar-segundas',
    name: 'Bazar Segundas Marcas',
    tagline: 'Vasos Quencher, Kits y Mates',
    shortDesc: 'Termolares, cafeteros y mates térmicos de excelente rendimiento térmico',
    image: '/src/assets/images/product_combo_matero_1792105239385.jpg',
  },
  {
    id: 'capilar',
    name: 'Línea Capilar Karseell',
    tagline: 'Mascarillas de Colágeno & Aceites',
    shortDesc: 'Tratamiento capilar profesional de reparación profunda viral',
    image: '/src/assets/images/product_karseell_hair_1792102621168.jpg',
  },
];

export const ALL_PRODUCTS: DualProduct[] = [
  {
    "id": "iphone-18-pro-512",
    "name": "iPhone 18 Pro 512GB Black Titanium",
    "brand": "Apple",
    "categoryId": "tecnologia",
    "categoryLabel": "Tecnología",
    "image": "/src/assets/images/hero_iphone_new.webp",
    "badge": "MÁS VENDIDO",
    "isTop5": true,
    "salesRank": 1,
    "page": 38,
    "variant": "512GB Black Titanium",
    "description": "Chasis de titanio de grado aeroespacial, chip A18 Pro y triple cámara sapphire crystal.",
    "retail": {
      "efectivo": 1850000,
      "transferencia": 1950000,
      "cuotas6": 2100000
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 1320,
        "priceArs": 1980000
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 1290,
        "priceArs": 1935000
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 1260,
        "priceArs": 1890000
      }
    ]
  },
  {
    "id": "perfumes-arabes-afnan-9pm-black",
    "name": "9PM BLACK",
    "brand": "Afnan",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://jrsperfumes.com/cdn/shop/files/9pm-removebg-preview.png?v=1749592978&width=3840",
    "badge": "DESTACADO",
    "isTop5": true,
    "page": 5,
    "variant": "Afnan Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 5.",
    "retail": {
      "efectivo": 67940,
      "transferencia": 70310,
      "cuotas6": 72680
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 33.5,
        "priceArs": 52950
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 30,
        "priceArs": 47400
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 28.5,
        "priceArs": 45050
      }
    ],
    "salesRank": 2
  },
  {
    "id": "perfumes-arabes-afnan-9am-dive-edp",
    "name": "9AM DIVE EDP",
    "brand": "Afnan",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://i.imgur.com/AE5hbAZ.png",
    "badge": "DESTACADO",
    "isTop5": true,
    "page": 5,
    "variant": "Afnan Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 5.",
    "retail": {
      "efectivo": 72680,
      "transferencia": 75050,
      "cuotas6": 77420
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 35.5,
        "priceArs": 56100
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 32,
        "priceArs": 50600
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 29,
        "priceArs": 48200
      }
    ],
    "salesRank": 3
  },
  {
    "id": "perfumes-arabes-afnan-9pm-rebel",
    "name": "9PM REBEL",
    "brand": "Afnan",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://i.imgur.com/zRbCBjv.png",
    "badge": "DESTACADO",
    "isTop5": true,
    "page": 5,
    "variant": "Afnan Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 5.",
    "retail": {
      "efectivo": 99540,
      "transferencia": 102700,
      "cuotas6": 105860
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 49,
        "priceArs": 77450
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 44,
        "priceArs": 69550
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 42,
        "priceArs": 66400
      }
    ],
    "salesRank": 4
  },
  {
    "id": "perfumes-arabes-afnan-turathi-electric",
    "name": "TURATHI ELECTRIC",
    "brand": "Afnan",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://i.imgur.com/bL6T93g.png",
    "badge": "DESTACADO",
    "isTop5": true,
    "page": 5,
    "variant": "Afnan Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 5.",
    "retail": {
      "efectivo": 105070,
      "transferencia": 109020,
      "cuotas6": 112180
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 51.5,
        "priceArs": 81400
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 46.5,
        "priceArs": 73500
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 42.5,
        "priceArs": 70350
      }
    ],
    "salesRank": 5
  },
  {
    "id": "perfumes-arabes-afnan-9pm-night-out",
    "name": "9PM Night Out",
    "brand": "Afnan",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://i.imgur.com/tazsV7U.png",
    "badge": "DESTACADO",
    "isTop5": false,
    "page": 5,
    "variant": "Afnan Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 5.",
    "retail": {
      "efectivo": 131140,
      "transferencia": 135090,
      "cuotas6": 139830
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 64,
        "priceArs": 101150
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 58,
        "priceArs": 91650
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 55,
        "priceArs": 86900
      }
    ]
  },
  {
    "id": "perfumes-arabes-afnan-turathi-blue",
    "name": "TURATHI BLUE",
    "brand": "Afnan",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://i.imgur.com/bL6T93g.png",
    "badge": "DESTACADO",
    "isTop5": false,
    "page": 5,
    "variant": "Afnan Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 5.",
    "retail": {
      "efectivo": 75840,
      "transferencia": 79000,
      "cuotas6": 81370
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 38.5,
        "priceArs": 60850
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 34.5,
        "priceArs": 54550
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 33,
        "priceArs": 52150
      }
    ]
  },
  {
    "id": "perfumes-arabes-afnan-supremacy",
    "name": "SUPREMACY",
    "brand": "Afnan",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://i.imgur.com/2bJBeWN.png",
    "badge": "DESTACADO",
    "isTop5": false,
    "page": 5,
    "variant": "Afnan Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 5.",
    "retail": {
      "efectivo": 139830,
      "transferencia": 144570,
      "cuotas6": 149310
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 69,
        "priceArs": 109050
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 62,
        "priceArs": 98000
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 56.5,
        "priceArs": 93250
      }
    ]
  },
  {
    "id": "perfumes-arabes-al-haramain-amber-oud-aqua-dubai",
    "name": "AMBER OUD AQUA DUBAI",
    "brand": "Al Haramain",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://i.imgur.com/vBDcrFF.png",
    "isTop5": false,
    "page": 6,
    "variant": "Al Haramain Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 6.",
    "retail": {
      "efectivo": 126400,
      "transferencia": 131140,
      "cuotas6": 135090
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 62,
        "priceArs": 98000
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 56,
        "priceArs": 88500
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 53.5,
        "priceArs": 84550
      }
    ]
  },
  {
    "id": "al-haramain-amber-oud-gold",
    "name": "AMBER OUD GOLD EDITION EDP",
    "brand": "Al Haramain",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://i.imgur.com/vBDcrFF.png",
    "badge": "DESTACADO",
    "isTop5": false,
    "page": 6,
    "variant": "Al Haramain Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 6.",
    "retail": {
      "efectivo": 127980,
      "transferencia": 131930,
      "cuotas6": 136670
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 62.5,
        "priceArs": 98750
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 56.5,
        "priceArs": 89300
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 54,
        "priceArs": 85350
      }
    ]
  },
  {
    "id": "perfumes-arabes-al-haramain-amber-oud-dubai-night-edp",
    "name": "AMBER OUD DUBAI NIGHT EDP",
    "brand": "Al Haramain",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://i.imgur.com/yTVvzV6.png",
    "isTop5": false,
    "page": 6,
    "variant": "Al Haramain Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 6.",
    "retail": {
      "efectivo": 101120,
      "transferencia": 104280,
      "cuotas6": 107440
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 49.5,
        "priceArs": 78250
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 44.5,
        "priceArs": 70350
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 42.5,
        "priceArs": 67150
      }
    ]
  },
  {
    "id": "perfumes-arabes-armaf-dunescape",
    "name": "DUNESCAPE",
    "brand": "Armaf",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://i.imgur.com/T7btmKz.png",
    "isTop5": false,
    "page": 7,
    "variant": "Armaf Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 7.",
    "retail": {
      "efectivo": 104280,
      "transferencia": 107440,
      "cuotas6": 110600
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 51,
        "priceArs": 80600
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 46,
        "priceArs": 72700
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 43.5,
        "priceArs": 68750
      }
    ]
  },
  {
    "id": "perfumes-arabes-armaf-club-de-nuit-overdose",
    "name": "CLUB DE NUIT OVERDOSE",
    "brand": "Armaf",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://acdn-us.mitiendanube.com/stores/005/903/675/products/cdni-24e154a12cdf89591d17623095050589-480-0.webp",
    "isTop5": false,
    "page": 7,
    "variant": "Armaf Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 7.",
    "retail": {
      "efectivo": 146150,
      "transferencia": 150890,
      "cuotas6": 155630
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 71.5,
        "priceArs": 113000
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 64.5,
        "priceArs": 101950
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 61.5,
        "priceArs": 97200
      }
    ]
  },
  {
    "id": "perfumes-arabes-armaf-checkmate",
    "name": "CHECKMATE",
    "brand": "Armaf",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://i.imgur.com/Wkhu8Qw.png",
    "isTop5": false,
    "page": 7,
    "variant": "Armaf Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 7.",
    "retail": {
      "efectivo": 89270,
      "transferencia": 91640,
      "cuotas6": 94800
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 44.1,
        "priceArs": 69631
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 40.6,
        "priceArs": 64061
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 37.9,
        "priceArs": 59883
      }
    ]
  },
  {
    "id": "armaf-cdnim",
    "name": "CLUB DE NUIT INTENSE MAN",
    "brand": "Armaf",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://acdn-us.mitiendanube.com/stores/005/903/675/products/cdni-24e154a12cdf89591d17623095050589-480-0.webp",
    "badge": "MÁS VENDIDO",
    "isTop5": true,
    "salesRank": 1,
    "page": 7,
    "variant": "Armaf Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 7.",
    "retail": {
      "efectivo": 78210,
      "transferencia": 81370,
      "cuotas6": 83740
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 38.5,
        "priceArs": 60850
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 34.5,
        "priceArs": 54550
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 33,
        "priceArs": 52150
      }
    ]
  },
  {
    "id": "perfumes-arabes-armaf-precieux",
    "name": "Precieux",
    "brand": "Armaf",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://i.imgur.com/D5SNRjW.png",
    "isTop5": false,
    "page": 7,
    "variant": "Armaf Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 7.",
    "retail": {
      "efectivo": 117710,
      "transferencia": 121660,
      "cuotas6": 124820
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 58.1,
        "priceArs": 91814
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 53.5,
        "priceArs": 84469
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 50,
        "priceArs": 78960
      }
    ]
  },
  {
    "id": "perfumes-arabes-armaf-club-de-nuit-urban-man-elixir",
    "name": "CLUB DE NUIT URBAN MAN ELIXIR",
    "brand": "Armaf",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://i.imgur.com/ydHbY0c.png",
    "isTop5": false,
    "page": 7,
    "variant": "Armaf Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 7.",
    "retail": {
      "efectivo": 93220,
      "transferencia": 96380,
      "cuotas6": 99540
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 46,
        "priceArs": 72700
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 41.5,
        "priceArs": 65600
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 39.5,
        "priceArs": 62450
      }
    ]
  },
  {
    "id": "perfumes-arabes-armaf-club-de-nuit-untold",
    "name": "CLUB DE NUIT UNTOLD",
    "brand": "Armaf",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://i.imgur.com/Y6X2YGE.png",
    "isTop5": false,
    "page": 7,
    "variant": "Armaf Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 7.",
    "retail": {
      "efectivo": 90060,
      "transferencia": 93220,
      "cuotas6": 96380
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 44.5,
        "priceArs": 70350
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 40,
        "priceArs": 63200
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 38,
        "priceArs": 60050
      }
    ]
  },
  {
    "id": "perfumes-arabes-armaf-club-de-nuit-iconic",
    "name": "CLUB DE NUIT ICONIC",
    "brand": "Armaf",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://i.imgur.com/j2dX5xJ.png",
    "isTop5": false,
    "page": 7,
    "variant": "Armaf Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 7.",
    "retail": {
      "efectivo": 92430,
      "transferencia": 95590,
      "cuotas6": 98750
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 45.5,
        "priceArs": 71900
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 41,
        "priceArs": 64800
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 39,
        "priceArs": 61650
      }
    ]
  },
  {
    "id": "perfumes-arabes-armaf-club-de-nuit-woman",
    "name": "CLUB DE NUIT WOMAN",
    "brand": "Armaf",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://i.imgur.com/yMKslLX.png",
    "isTop5": false,
    "page": 7,
    "variant": "Armaf Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 7.",
    "retail": {
      "efectivo": 81370,
      "transferencia": 83740,
      "cuotas6": 86900
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 40,
        "priceArs": 63200
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 36,
        "priceArs": 56900
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 34.5,
        "priceArs": 54550
      }
    ]
  },
  {
    "id": "perfumes-arabes-armaf-odyssey-aqua",
    "name": "ODYSSEY AQUA",
    "brand": "Armaf",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://i.imgur.com/WiFkI1i.png",
    "isTop5": false,
    "page": 8,
    "variant": "Armaf Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 8.",
    "retail": {
      "efectivo": 90060,
      "transferencia": 92430,
      "cuotas6": 95590
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 44,
        "priceArs": 69550
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 39.5,
        "priceArs": 62450
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 38,
        "priceArs": 60050
      }
    ]
  },
  {
    "id": "perfumes-arabes-armaf-odyssey-candee-edp",
    "name": "ODYSSEY CANDEE EDP",
    "brand": "Armaf",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://i.imgur.com/1xnCq9B.png",
    "isTop5": false,
    "page": 8,
    "variant": "Armaf Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 8.",
    "retail": {
      "efectivo": 54510,
      "transferencia": 56090,
      "cuotas6": 57670
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 26.5,
        "priceArs": 41900
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 24,
        "priceArs": 37950
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 23,
        "priceArs": 36350
      }
    ]
  },
  {
    "id": "perfumes-arabes-armaf-odyssey-mandarin-sky-vintage",
    "name": "ODYSSEY MANDARIN SKY VINTAGE",
    "brand": "Armaf",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://i.imgur.com/HJadVAN.png",
    "isTop5": false,
    "page": 8,
    "variant": "Armaf Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 8.",
    "retail": {
      "efectivo": 94800,
      "transferencia": 97960,
      "cuotas6": 101120
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 46.5,
        "priceArs": 73500
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 42,
        "priceArs": 66400
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 40,
        "priceArs": 63200
      }
    ]
  },
  {
    "id": "perfumes-arabes-armaf-odyssey-mandarin-sky",
    "name": "ODYSSEY MANDARIN SKY",
    "brand": "Armaf",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://i.imgur.com/UrgbNwT.png",
    "isTop5": false,
    "page": 8,
    "variant": "Armaf Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 8.",
    "retail": {
      "efectivo": 64780,
      "transferencia": 67150,
      "cuotas6": 69520
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 32,
        "priceArs": 50600
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 28.5,
        "priceArs": 45050
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 27.5,
        "priceArs": 43450
      }
    ]
  },
  {
    "id": "perfumes-arabes-armaf-odyssey-homme-white-edition",
    "name": "ODYSSEY HOMME WHITE EDITION",
    "brand": "Armaf",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://i.imgur.com/BqTt4bP.png",
    "isTop5": false,
    "page": 8,
    "variant": "Armaf Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 8.",
    "retail": {
      "efectivo": 74260,
      "transferencia": 76630,
      "cuotas6": 79000
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 36.5,
        "priceArs": 57700
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 32.5,
        "priceArs": 51350
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 31,
        "priceArs": 49000
      }
    ]
  },
  {
    "id": "perfumes-arabes-armaf-odyssey-limoni",
    "name": "ODYSSEY LIMONI",
    "brand": "Armaf",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://i.imgur.com/gnJQoJ3.png",
    "isTop5": false,
    "page": 8,
    "variant": "Armaf Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 8.",
    "retail": {
      "efectivo": 60040,
      "transferencia": 62410,
      "cuotas6": 64780
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 29.5,
        "priceArs": 46650
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 26.5,
        "priceArs": 41900
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 25.5,
        "priceArs": 40300
      }
    ]
  },
  {
    "id": "perfumes-arabes-armaf-cdn-bling",
    "name": "CDN BLING",
    "brand": "Armaf",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://hadiyyeh.com/cdn/shop/files/ARMAF-CLUB-DE-NUIT-BLING-75ML.avif?v=1786898730&width=1445",
    "isTop5": false,
    "page": 8,
    "variant": "Armaf Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 8.",
    "retail": {
      "efectivo": 93220,
      "transferencia": 96380,
      "cuotas6": 99540
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 46,
        "priceArs": 72700
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 41.5,
        "priceArs": 65600
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 39.5,
        "priceArs": 62450
      }
    ]
  },
  {
    "id": "perfumes-arabes-armaf-odyssey-homme-edp",
    "name": "ODYSSEY HOMME EDP",
    "brand": "Armaf",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://i.imgur.com/O7jSZim.png",
    "isTop5": false,
    "page": 8,
    "variant": "Armaf Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 8.",
    "retail": {
      "efectivo": 65570,
      "transferencia": 67940,
      "cuotas6": 69520
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 32,
        "priceArs": 50600
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 29,
        "priceArs": 45850
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 27.5,
        "priceArs": 43450
      }
    ]
  },
  {
    "id": "perfumes-arabes-armaf-odyssey-mega",
    "name": "ODYSSEY MEGA",
    "brand": "Armaf",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://i.imgur.com/1242Lwb.png",
    "isTop5": false,
    "page": 8,
    "variant": "Armaf Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 8.",
    "retail": {
      "efectivo": 48980,
      "transferencia": 50560,
      "cuotas6": 52140
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 28,
        "priceArs": 44250
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 24.5,
        "priceArs": 38750
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 23,
        "priceArs": 36350
      }
    ]
  },
  {
    "id": "bharara-king-100",
    "name": "BHARARA KING 100ML",
    "brand": "Bharara",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://i.imgur.com/9BXnPfy.png",
    "badge": "DESTACADO",
    "isTop5": false,
    "page": 9,
    "variant": "Bharara Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 9.",
    "retail": {
      "efectivo": 142990,
      "transferencia": 147730,
      "cuotas6": 152470
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 86,
        "priceArs": 135900
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 77.5,
        "priceArs": 122450
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 74,
        "priceArs": 116950
      }
    ]
  },
  {
    "id": "perfumes-arabes-bharara-bharara-ramses",
    "name": "BHARARA RAMSES",
    "brand": "Bharara",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://i.imgur.com/Gfi4rV3.png",
    "isTop5": false,
    "page": 9,
    "variant": "Bharara Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 9.",
    "retail": {
      "efectivo": 200660,
      "transferencia": 206980,
      "cuotas6": 214090
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 98.5,
        "priceArs": 155650
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 88.5,
        "priceArs": 139850
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 84.5,
        "priceArs": 133550
      }
    ]
  },
  {
    "id": "perfumes-arabes-bharara-bharara-king-150-ml",
    "name": "BHARARA KING 150 ML",
    "brand": "Bharara",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://i.imgur.com/9BXnPfy.png",
    "isTop5": false,
    "page": 9,
    "variant": "Bharara Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 9.",
    "retail": {
      "efectivo": 176170,
      "transferencia": 181700,
      "cuotas6": 187230
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 87,
        "priceArs": 137413
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 80,
        "priceArs": 126420
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 74.8,
        "priceArs": 118175
      }
    ]
  },
  {
    "id": "perfumes-arabes-bharara-rome",
    "name": "ROME",
    "brand": "Bharara",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://i.imgur.com/9VfgzSx.png",
    "isTop5": false,
    "page": 9,
    "variant": "Bharara Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 9.",
    "retail": {
      "efectivo": 86110,
      "transferencia": 88480,
      "cuotas6": 91640
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 42,
        "priceArs": 66400
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 38,
        "priceArs": 60050
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 36,
        "priceArs": 56900
      }
    ]
  },
  {
    "id": "perfumes-arabes-lattafa-khamrah-qahwa",
    "name": "KHAMRAH QAHWA",
    "brand": "Lattafa",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://i.imgur.com/q2qWnDk.png",
    "badge": "DESTACADO",
    "isTop5": false,
    "page": 10,
    "variant": "Lattafa Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 10.",
    "retail": {
      "efectivo": 54510,
      "transferencia": 56090,
      "cuotas6": 57670
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 26.5,
        "priceArs": 41900
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 24,
        "priceArs": 37950
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 23,
        "priceArs": 36350
      }
    ]
  },
  {
    "id": "perfumes-arabes-lattafa-khamrah",
    "name": "KHAMRAH",
    "brand": "Lattafa",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://www.lattafaindia.com/cdn/shop/files/02_1_0dede060-b09b-4171-b1c9-f179965aca4a.png?v=1768807405&width=913",
    "badge": "DESTACADO",
    "isTop5": false,
    "page": 10,
    "variant": "Lattafa Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 10.",
    "retail": {
      "efectivo": 59250,
      "transferencia": 60830,
      "cuotas6": 62410
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 36.5,
        "priceArs": 57700
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 32.5,
        "priceArs": 51350
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 31,
        "priceArs": 49000
      }
    ]
  },
  {
    "id": "perfumes-arabes-lattafa-khamrah-waha",
    "name": "KHAMRAH WAHA",
    "brand": "Lattafa",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://i.imgur.com/GhbTPUG.png",
    "badge": "DESTACADO",
    "isTop5": false,
    "page": 10,
    "variant": "Lattafa Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 10.",
    "retail": {
      "efectivo": 151680,
      "transferencia": 157210,
      "cuotas6": 161950
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 74.5,
        "priceArs": 117750
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 67,
        "priceArs": 105900
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 64,
        "priceArs": 101150
      }
    ]
  },
  {
    "id": "perfumes-arabes-lattafa-asad-bourbon-edp",
    "name": "ASAD BOURBON EDP",
    "brand": "Lattafa",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://i.imgur.com/HATlcke.png",
    "badge": "DESTACADO",
    "isTop5": false,
    "page": 10,
    "variant": "Lattafa Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 10.",
    "retail": {
      "efectivo": 84530,
      "transferencia": 86900,
      "cuotas6": 90060
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 41.5,
        "priceArs": 65600
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 37.5,
        "priceArs": 59250
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 35.5,
        "priceArs": 56100
      }
    ]
  },
  {
    "id": "perfumes-arabes-lattafa-asad-elixir",
    "name": "ASAD ELIXIR",
    "brand": "Lattafa",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://i.imgur.com/nAxOdba.png",
    "badge": "DESTACADO",
    "isTop5": false,
    "page": 10,
    "variant": "Lattafa Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 10.",
    "retail": {
      "efectivo": 82950,
      "transferencia": 85320,
      "cuotas6": 88480
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 40.5,
        "priceArs": 64000
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 36.5,
        "priceArs": 57700
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 35,
        "priceArs": 55300
      }
    ]
  },
  {
    "id": "perfumes-arabes-lattafa-confidential-platinium",
    "name": "CONFIDENTIAL PLATINIUM",
    "brand": "Lattafa",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://i.imgur.com/1IQndhI.png",
    "badge": "DESTACADO",
    "isTop5": false,
    "page": 10,
    "variant": "Lattafa Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 10.",
    "retail": {
      "efectivo": 46610,
      "transferencia": 48190,
      "cuotas6": 49770
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 23,
        "priceArs": 36350
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 21,
        "priceArs": 33200
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 20,
        "priceArs": 31600
      }
    ]
  },
  {
    "id": "perfumes-arabes-lattafa-confidential-gold",
    "name": "CONFIDENTIAL GOLD",
    "brand": "Lattafa",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://i.imgur.com/asQCYwE.png",
    "badge": "DESTACADO",
    "isTop5": false,
    "page": 10,
    "variant": "Lattafa Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 10.",
    "retail": {
      "efectivo": 51350,
      "transferencia": 52930,
      "cuotas6": 54510
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 25,
        "priceArs": 39500
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 22.5,
        "priceArs": 35550
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 21.5,
        "priceArs": 34000
      }
    ]
  },
  {
    "id": "perfumes-arabes-lattafa-the-kingdom-edp-white",
    "name": "THE KINGDOM EDP WHITE",
    "brand": "Lattafa",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://i.imgur.com/xIXE0k0.png",
    "badge": "DESTACADO",
    "isTop5": false,
    "page": 10,
    "variant": "Lattafa Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 10.",
    "retail": {
      "efectivo": 71100,
      "transferencia": 73470,
      "cuotas6": 75840
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 35,
        "priceArs": 55300
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 31.5,
        "priceArs": 49800
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 30,
        "priceArs": 47400
      }
    ]
  },
  {
    "id": "perfumes-arabes-lattafa-badee-al-oud-for-glory-edp",
    "name": "BADEE AL OUD FOR GLORY EDP",
    "brand": "Lattafa",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://i.imgur.com/DFqdiQo.png",
    "isTop5": false,
    "page": 11,
    "variant": "Lattafa Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 11.",
    "retail": {
      "efectivo": 52930,
      "transferencia": 54510,
      "cuotas6": 56090
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 26,
        "priceArs": 41100
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 23.5,
        "priceArs": 37150
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 22.5,
        "priceArs": 35550
      }
    ]
  },
  {
    "id": "perfumes-arabes-lattafa-badee-al-oud-honor-and-glory",
    "name": "BADEE AL OUD HONOR AND GLORY",
    "brand": "Lattafa",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://i.imgur.com/R0MrNHj.png",
    "isTop5": false,
    "page": 11,
    "variant": "Lattafa Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 11.",
    "retail": {
      "efectivo": 52930,
      "transferencia": 54510,
      "cuotas6": 56090
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 26,
        "priceArs": 41100
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 23.5,
        "priceArs": 37150
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 22.5,
        "priceArs": 35550
      }
    ]
  },
  {
    "id": "perfumes-arabes-lattafa-badee-al-oud-amethyst-edp",
    "name": "BADEE AL OUD AMETHYST EDP",
    "brand": "Lattafa",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://i.imgur.com/RHi8Zzn.png",
    "isTop5": false,
    "page": 11,
    "variant": "Lattafa Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 11.",
    "retail": {
      "efectivo": 48190,
      "transferencia": 49770,
      "cuotas6": 51350
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 24,
        "priceArs": 37950
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 21.5,
        "priceArs": 34000
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 20.5,
        "priceArs": 32400
      }
    ]
  },
  {
    "id": "perfumes-arabes-lattafa-badee-al-oud-sublime-edp",
    "name": "BADEE AL OUD SUBLIME EDP",
    "brand": "Lattafa",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://i.imgur.com/2BtOzfP.png",
    "isTop5": false,
    "page": 11,
    "variant": "Lattafa Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 11.",
    "retail": {
      "efectivo": 54510,
      "transferencia": 56090,
      "cuotas6": 57670
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 26.5,
        "priceArs": 41900
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 24,
        "priceArs": 37950
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 23,
        "priceArs": 36350
      }
    ]
  },
  {
    "id": "perfumes-arabes-lattafa-badee-al-oud-noble-blush-edp",
    "name": "BADEE AL OUD NOBLE BLUSH EDP",
    "brand": "Lattafa",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://i.imgur.com/kCwEUo4.png",
    "isTop5": false,
    "page": 11,
    "variant": "Lattafa Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 11.",
    "retail": {
      "efectivo": 56090,
      "transferencia": 57670,
      "cuotas6": 59250
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 27.5,
        "priceArs": 43450
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 24.5,
        "priceArs": 38750
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 23.5,
        "priceArs": 37150
      }
    ]
  },
  {
    "id": "perfumes-arabes-lattafa-her-confession",
    "name": "HER CONFESSION",
    "brand": "Lattafa",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://i.imgur.com/hcM6R32.png",
    "isTop5": false,
    "page": 11,
    "variant": "Lattafa Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 11.",
    "retail": {
      "efectivo": 74260,
      "transferencia": 76630,
      "cuotas6": 79000
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 36.5,
        "priceArs": 57700
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 32.5,
        "priceArs": 51350
      }
    ]
  },
  {
    "id": "perfumes-arabes-lattafa-fakhar-women",
    "name": "FAKHAR WOMEN",
    "brand": "Lattafa",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://i.imgur.com/99GAcfP.png",
    "isTop5": false,
    "page": 11,
    "variant": "Lattafa Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 11.",
    "retail": {
      "efectivo": 72680,
      "transferencia": 75050,
      "cuotas6": 77420
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 35.5,
        "priceArs": 56100
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 32,
        "priceArs": 50600
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 30.5,
        "priceArs": 48200
      }
    ]
  },
  {
    "id": "perfumes-arabes-gianitech-import-pisa",
    "name": "PISA",
    "brand": "Gianitech Import",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://i.imgur.com/9Ie1qDM.png",
    "isTop5": false,
    "page": 11,
    "variant": "Gianitech Import Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 11.",
    "retail": {
      "efectivo": 101120,
      "transferencia": 104280,
      "cuotas6": 107440
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 49.5,
        "priceArs": 78250
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 44.5,
        "priceArs": 70350
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 42.5,
        "priceArs": 67150
      }
    ]
  },
  {
    "id": "perfumes-arabes-lattafa-fakhar-black-edp",
    "name": "FAKHAR BLACK EDP",
    "brand": "Lattafa",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://i.imgur.com/mujNWCO.png",
    "isTop5": false,
    "page": 11,
    "variant": "Lattafa Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 11.",
    "retail": {
      "efectivo": 63200,
      "transferencia": 65570,
      "cuotas6": 67940
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 31,
        "priceArs": 49000
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 28,
        "priceArs": 44250
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 26.5,
        "priceArs": 41900
      }
    ]
  },
  {
    "id": "perfumes-arabes-lattafa-yara-pink-edp",
    "name": "YARA PINK EDP",
    "brand": "Lattafa",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://acdn-us.mitiendanube.com/stores/005/903/675/products/yarapink-ea00a850458be88a1517626370023696-480-0.webp",
    "isTop5": false,
    "page": 12,
    "variant": "Lattafa Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 12.",
    "retail": {
      "efectivo": 74260,
      "transferencia": 76630,
      "cuotas6": 79000
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 36.5,
        "priceArs": 57700
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 32.5,
        "priceArs": 51350
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 31,
        "priceArs": 49000
      }
    ]
  },
  {
    "id": "perfumes-arabes-lattafa-yara-elixir",
    "name": "YARA ELIXIR",
    "brand": "Lattafa",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://i.imgur.com/P8CS50y.png",
    "isTop5": false,
    "page": 12,
    "variant": "Lattafa Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 12.",
    "retail": {
      "efectivo": 72680,
      "transferencia": 75050,
      "cuotas6": 77420
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 35.5,
        "priceArs": 56100
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 32,
        "priceArs": 50600
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 30.5,
        "priceArs": 48200
      }
    ]
  },
  {
    "id": "perfumes-arabes-lattafa-yara-candy-edp",
    "name": "YARA CANDY EDP",
    "brand": "Lattafa",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://i.imgur.com/ynfADz0.png",
    "isTop5": false,
    "page": 12,
    "variant": "Lattafa Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 12.",
    "retail": {
      "efectivo": 54510,
      "transferencia": 56090,
      "cuotas6": 57670
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 26.5,
        "priceArs": 41900
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 24,
        "priceArs": 37950
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 23,
        "priceArs": 36350
      }
    ]
  },
  {
    "id": "perfumes-arabes-lattafa-yara-moi-edp",
    "name": "YARA MOI EDP",
    "brand": "Lattafa",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://i.imgur.com/ct1wkvl.png",
    "isTop5": false,
    "page": 12,
    "variant": "Lattafa Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 12.",
    "retail": {
      "efectivo": 51350,
      "transferencia": 52930,
      "cuotas6": 54510
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 25,
        "priceArs": 39500
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 22.5,
        "priceArs": 35550
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 21.5,
        "priceArs": 34000
      }
    ]
  },
  {
    "id": "perfumes-arabes-lattafa-angham",
    "name": "ANGHAM",
    "brand": "Lattafa",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://i.imgur.com/Fr3zLss.png",
    "isTop5": false,
    "page": 12,
    "variant": "Lattafa Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 12.",
    "retail": {
      "efectivo": 64780,
      "transferencia": 67150,
      "cuotas6": 69520
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 32,
        "priceArs": 50600
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 28.5,
        "priceArs": 45050
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 27.5,
        "priceArs": 43450
      }
    ]
  },
  {
    "id": "perfumes-arabes-lattafa-mayar",
    "name": "MAYAR",
    "brand": "Lattafa",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://i.imgur.com/xvJzhCh.png",
    "isTop5": false,
    "page": 12,
    "variant": "Lattafa Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 12.",
    "retail": {
      "efectivo": 52930,
      "transferencia": 54510,
      "cuotas6": 56090
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 26,
        "priceArs": 41100
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 23.5,
        "priceArs": 37150
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 22.5,
        "priceArs": 35550
      }
    ]
  },
  {
    "id": "perfumes-arabes-lattafa-mayar-natural-intense-edp",
    "name": "MAYAR NATURAL INTENSE EDP",
    "brand": "Lattafa",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://i.imgur.com/iaILKhL.png",
    "isTop5": false,
    "page": 12,
    "variant": "Lattafa Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 12.",
    "retail": {
      "efectivo": 60040,
      "transferencia": 62410,
      "cuotas6": 64780
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 29.5,
        "priceArs": 46650
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 26.5,
        "priceArs": 41900
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 25.5,
        "priceArs": 40300
      }
    ]
  },
  {
    "id": "perfumes-arabes-lattafa-mayar-cherry-intense-edp",
    "name": "MAYAR CHERRY INTENSE EDP",
    "brand": "Lattafa",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://acdn-us.mitiendanube.com/stores/005/903/675/products/mayarcherry-77422f467aa72abdf017653805926952-480-0.webp",
    "isTop5": false,
    "page": 12,
    "variant": "Lattafa Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 12.",
    "retail": {
      "efectivo": 51350,
      "transferencia": 52930,
      "cuotas6": 54510
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 25,
        "priceArs": 39500
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 22.5,
        "priceArs": 35550
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 21.5,
        "priceArs": 34000
      }
    ]
  },
  {
    "id": "perfumes-arabes-lattafa-eclaire",
    "name": "ECLAIRE",
    "brand": "Lattafa",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://acdn-us.mitiendanube.com/stores/006/373/377/products/18-c4482e17eac945a85e17502720017630-1024-1024.webp",
    "isTop5": false,
    "page": 12,
    "variant": "Lattafa Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 12.",
    "retail": {
      "efectivo": 89270,
      "transferencia": 91640,
      "cuotas6": 94800
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 43.5,
        "priceArs": 68750
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 39.5,
        "priceArs": 62450
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 37.5,
        "priceArs": 59250
      }
    ]
  },
  {
    "id": "perfumes-arabes-lattafa-victoria",
    "name": "VICTORIA",
    "brand": "Lattafa",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://hadiyyeh.com/cdn/shop/files/processed_cms5osvk608ncpqw3vpdnu0sl_1785305508280.webp?v=1785305511&width=1445",
    "isTop5": false,
    "page": 13,
    "variant": "Lattafa Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 13.",
    "retail": {
      "efectivo": 63200,
      "transferencia": 65570,
      "cuotas6": 67940
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 31,
        "priceArs": 49000
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 28,
        "priceArs": 44250
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 26.5,
        "priceArs": 41900
      }
    ]
  },
  {
    "id": "perfumes-arabes-lattafa-emeer",
    "name": "EMEER",
    "brand": "Lattafa",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://cdn.fragrancenet.com/images/photos/600x600/481132.png",
    "isTop5": false,
    "page": 13,
    "variant": "Lattafa Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 13.",
    "retail": {
      "efectivo": 101120,
      "transferencia": 104280,
      "cuotas6": 108230
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 49.9,
        "priceArs": 78874
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 45.9,
        "priceArs": 72564
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 42.9,
        "priceArs": 67832
      }
    ]
  },
  {
    "id": "perfumes-arabes-lattafa-emaan",
    "name": "EMAAN",
    "brand": "Lattafa",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://rcperfumery.com.co/wp-content/uploads/2026/04/EMAAN.png",
    "isTop5": false,
    "page": 13,
    "variant": "Lattafa Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 13.",
    "retail": {
      "efectivo": 75050,
      "transferencia": 78210,
      "cuotas6": 80580
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 37,
        "priceArs": 58500
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 33.5,
        "priceArs": 52950
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 31.5,
        "priceArs": 49800
      }
    ]
  },
  {
    "id": "perfumes-arabes-lattafa-vintage-radio",
    "name": "VINTAGE RADIO",
    "brand": "Lattafa",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://i.imgur.com/W6et9rf.png",
    "isTop5": false,
    "page": 13,
    "variant": "Lattafa Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 13.",
    "retail": {
      "efectivo": 61620,
      "transferencia": 63990,
      "cuotas6": 66360
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 30.5,
        "priceArs": 48200
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 27.5,
        "priceArs": 43450
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 26,
        "priceArs": 41100
      }
    ]
  },
  {
    "id": "perfumes-arabes-lattafa-khamrah-dukhan",
    "name": "KHAMRAH DUKHAN",
    "brand": "Lattafa",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://cdn.billowshop.com/9ef84dda-32dd-4016-7da3-1c0a824fffb4/img/Producto/3080/Auricular-Devia-ANC-TWS-Pro-2-Wireless-con-pantalla-2026-10-01T163238-880-6abec5331d626-O.png",
    "isTop5": false,
    "page": 13,
    "variant": "Lattafa Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 13.",
    "retail": {
      "efectivo": 56090,
      "transferencia": 57670,
      "cuotas6": 59250
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 27.7,
        "priceArs": 43750
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 25.5,
        "priceArs": 40250
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 23.8,
        "priceArs": 37625
      }
    ]
  },
  {
    "id": "perfumes-arabes-lattafa-angham-second-song",
    "name": "ANGHAM SECOND SONG",
    "brand": "Lattafa",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://www.lattafaindia.com/cdn/shop/files/AnghamSecondSong2.png?v=1776149026&width=2560",
    "isTop5": false,
    "page": 13,
    "variant": "Lattafa Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 13.",
    "retail": {
      "efectivo": 61620,
      "transferencia": 63990,
      "cuotas6": 66360
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 30.5,
        "priceArs": 48200
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 27.5,
        "priceArs": 43450
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 26,
        "priceArs": 41100
      }
    ]
  },
  {
    "id": "perfumes-arabes-lattafa-hayatti-al-maleky",
    "name": "HAYATTI AL MALEKY",
    "brand": "Lattafa",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://acdn-us.mitiendanube.com/stores/005/903/675/products/hayaatialmaleky-689ab9e1bad11d205617623875608260-480-0.webp",
    "isTop5": false,
    "page": 13,
    "variant": "Lattafa Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 13.",
    "retail": {
      "efectivo": 45030,
      "transferencia": 46610,
      "cuotas6": 48190
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 22.5,
        "priceArs": 35550
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 20,
        "priceArs": 31600
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 19,
        "priceArs": 30050
      }
    ]
  },
  {
    "id": "perfumes-arabes-lattafa-qimmah-for-woman",
    "name": "QIMMAH FOR WOMAN",
    "brand": "Lattafa",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://i.imgur.com/jBWw75L.png",
    "isTop5": false,
    "page": 13,
    "variant": "Lattafa Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 13.",
    "retail": {
      "efectivo": 51350,
      "transferencia": 53720,
      "cuotas6": 55300
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 25.5,
        "priceArs": 40300
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 23,
        "priceArs": 36350
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 22,
        "priceArs": 34800
      }
    ]
  },
  {
    "id": "perfumes-arabes-lattafa-hayatti-black",
    "name": "HAYATTI BLACK",
    "brand": "Lattafa",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://pharmarsi.es/wp-content/uploads/2025/12/lattafa-hayaati-100ml-eau-de-parfum.png",
    "isTop5": false,
    "page": 13,
    "variant": "Lattafa Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 13.",
    "retail": {
      "efectivo": 46610,
      "transferencia": 48190,
      "cuotas6": 49770
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 23,
        "priceArs": 36350
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 21,
        "priceArs": 33200
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 20,
        "priceArs": 31600
      }
    ]
  },
  {
    "id": "perfumes-arabes-lattafa-teriaq",
    "name": "TERIAQ",
    "brand": "Lattafa",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://i.imgur.com/ttOvvIk.png",
    "isTop5": false,
    "page": 14,
    "variant": "Lattafa Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 14.",
    "retail": {
      "efectivo": 63200,
      "transferencia": 65570,
      "cuotas6": 67940
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 31,
        "priceArs": 49000
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 28,
        "priceArs": 44250
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 26.5,
        "priceArs": 41900
      }
    ]
  },
  {
    "id": "perfumes-arabes-lattafa-ameerat-al-arab-prive-rose",
    "name": "AMEERAT AL ARAB PRIVE ROSE",
    "brand": "Lattafa",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://i.imgur.com/upnt3mE.png",
    "isTop5": false,
    "page": 14,
    "variant": "Lattafa Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 14.",
    "retail": {
      "efectivo": 57670,
      "transferencia": 59250,
      "cuotas6": 60830
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 28,
        "priceArs": 44250
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 25.5,
        "priceArs": 40300
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 24,
        "priceArs": 37950
      }
    ]
  },
  {
    "id": "perfumes-arabes-lattafa-ameerat-al-arab",
    "name": "AMEERAT AL ARAB",
    "brand": "Lattafa",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://i.imgur.com/DhlJIcR.png",
    "isTop5": false,
    "page": 14,
    "variant": "Lattafa Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 14.",
    "retail": {
      "efectivo": 41870,
      "transferencia": 42660,
      "cuotas6": 44240
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 20.5,
        "priceArs": 32400
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 18.5,
        "priceArs": 29250
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 17.5,
        "priceArs": 27650
      }
    ]
  },
  {
    "id": "perfumes-arabes-gianitech-import-art-of-universe",
    "name": "ART OF UNIVERSE",
    "brand": "Lattafa",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://i.imgur.com/4uHxcfE.png",
    "isTop5": false,
    "page": 14,
    "variant": "Gianitech Import Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 14.",
    "retail": {
      "efectivo": 81370,
      "transferencia": 83740,
      "cuotas6": 86900
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 40,
        "priceArs": 63200
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 36,
        "priceArs": 56900
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 34.5,
        "priceArs": 54550
      }
    ]
  },
  {
    "id": "perfumes-arabes-lattafa-ajwad",
    "name": "AJWAD",
    "brand": "Lattafa",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://i.imgur.com/GFE57jW.png",
    "isTop5": false,
    "page": 14,
    "variant": "Lattafa Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 14.",
    "retail": {
      "efectivo": 41080,
      "transferencia": 42660,
      "cuotas6": 44240
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 20,
        "priceArs": 31600
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 18,
        "priceArs": 28450
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 17.5,
        "priceArs": 27650
      }
    ]
  },
  {
    "id": "perfumes-arabes-lattafa-atlas",
    "name": "ATLAS",
    "brand": "Lattafa",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://nrperfumesarabes.com/cdn/shop/files/FAKHARGOLDLattafa-Photoroom_68.png?v=1735232493",
    "isTop5": false,
    "page": 14,
    "variant": "Lattafa Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 14.",
    "retail": {
      "efectivo": 69520,
      "transferencia": 71890,
      "cuotas6": 74260
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 34,
        "priceArs": 53750
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 30.5,
        "priceArs": 48200
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 29,
        "priceArs": 45850
      }
    ]
  },
  {
    "id": "perfumes-arabes-lattafa-his-confession",
    "name": "HIS CONFESSION",
    "brand": "Lattafa",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://acdn-us.mitiendanube.com/stores/005/903/675/products/hisconfession-10b12eeadfa265deb117623878824423-1024-1024.webp",
    "isTop5": false,
    "page": 14,
    "variant": "Lattafa Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 14.",
    "retail": {
      "efectivo": 82950,
      "transferencia": 85320,
      "cuotas6": 88480
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 40.5,
        "priceArs": 64000
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 36.5,
        "priceArs": 57700
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 35,
        "priceArs": 55300
      }
    ]
  },
  {
    "id": "perfumes-arabes-lattafa-ansam-silver",
    "name": "ANSAM SILVER",
    "brand": "Lattafa",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://cdn.fragrancenet.com/images/photos/900x900/451472.png",
    "isTop5": false,
    "page": 14,
    "variant": "Lattafa Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 14.",
    "retail": {
      "efectivo": 69520,
      "transferencia": 71890,
      "cuotas6": 74260
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 34,
        "priceArs": 53750
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 30.5,
        "priceArs": 48200
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 29,
        "priceArs": 45850
      }
    ]
  },
  {
    "id": "perfumes-arabes-lattafa-ansam-gold",
    "name": "ANSAM GOLD",
    "brand": "Lattafa",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://i.imgur.com/1TPxZNk.png",
    "isTop5": false,
    "page": 14,
    "variant": "Lattafa Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 14.",
    "retail": {
      "efectivo": 65570,
      "transferencia": 67940,
      "cuotas6": 70310
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 32.5,
        "priceArs": 51350
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 29,
        "priceArs": 45850
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 27.5,
        "priceArs": 43450
      }
    ]
  },
  {
    "id": "perfumes-arabes-lattafa-nebras",
    "name": "NEBRAS",
    "brand": "Lattafa",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://i.imgur.com/1TPxZNk.png",
    "isTop5": false,
    "page": 15,
    "variant": "Lattafa Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 15.",
    "retail": {
      "efectivo": 72680,
      "transferencia": 75050,
      "cuotas6": 77420
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 35.5,
        "priceArs": 56100
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 32,
        "priceArs": 50600
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 30.5,
        "priceArs": 48200
      }
    ]
  },
  {
    "id": "perfumes-arabes-lattafa-badee-al-oud-black",
    "name": "BADEE AL OUD BLACK",
    "brand": "Lattafa",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://www.lgimportados.com/produtos_img/7/5/3/8/9/0/IMG_753890_1.png",
    "isTop5": false,
    "page": 15,
    "variant": "Lattafa Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 15.",
    "retail": {
      "efectivo": 104280,
      "transferencia": 107440,
      "cuotas6": 110600
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 51,
        "priceArs": 80600
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 46,
        "priceArs": 72700
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 43.5,
        "priceArs": 68750
      }
    ]
  },
  {
    "id": "perfumes-arabes-lattafa-the-kingdom-fem",
    "name": "THE KINGDOM FEM",
    "brand": "Lattafa",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://dcdn-us.mitiendanube.com/stores/008/087/398/products/tmp_b64_b645e91b-9dc9-4377-a0f8-c505f39b1c1d_8087398_8410725-82b31deba6c738bb2d17901719046170-480-0.webp",
    "isTop5": false,
    "page": 15,
    "variant": "Lattafa Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 15.",
    "retail": {
      "efectivo": 63200,
      "transferencia": 65570,
      "cuotas6": 67940
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 31,
        "priceArs": 49000
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 28,
        "priceArs": 44250
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 26.5,
        "priceArs": 41900
      }
    ]
  },
  {
    "id": "perfumes-arabes-maison-alhambra-salvo-elixir",
    "name": "SALVO ELIXIR",
    "brand": "Maison Alhambra",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://i.imgur.com/YlWyBGN.png",
    "isTop5": false,
    "page": 16,
    "variant": "Maison Alhambra Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 16.",
    "retail": {
      "efectivo": 57670,
      "transferencia": 59250,
      "cuotas6": 60830
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 28,
        "priceArs": 44250
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 25.5,
        "priceArs": 40300
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 24,
        "priceArs": 37950
      }
    ]
  },
  {
    "id": "perfumes-arabes-maison-alhambra-salvo-intense",
    "name": "SALVO INTENSE",
    "brand": "Maison Alhambra",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://i.imgur.com/tfVtp9v.png",
    "isTop5": false,
    "page": 16,
    "variant": "Maison Alhambra Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 16.",
    "retail": {
      "efectivo": 48190,
      "transferencia": 49770,
      "cuotas6": 51350
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 24.5,
        "priceArs": 38750
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 22,
        "priceArs": 34800
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 21,
        "priceArs": 33200
      }
    ]
  },
  {
    "id": "perfumes-arabes-maison-alhambra-la-voie",
    "name": "LA VOIE",
    "brand": "Maison Alhambra",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://www.quieropy.com/web/image/product.product/29758/image_1024/%5BALHAMBRALAVOIE%5D%20%20MAISON%20ALHAMBRA%20LA%20VOIE%20EDP%20100ML?unique=e7334af",
    "isTop5": false,
    "page": 16,
    "variant": "Maison Alhambra Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 16.",
    "retail": {
      "efectivo": 60040,
      "transferencia": 62410,
      "cuotas6": 64780
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 29.5,
        "priceArs": 46650
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 26.5,
        "priceArs": 41900
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 25.5,
        "priceArs": 40300
      }
    ]
  },
  {
    "id": "perfumes-arabes-maison-alhambra-philos-pura",
    "name": "PHILOS PURA",
    "brand": "Maison Alhambra",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://i.imgur.com/W8YzLct.png",
    "isTop5": false,
    "page": 16,
    "variant": "Maison Alhambra Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 16.",
    "retail": {
      "efectivo": 46610,
      "transferencia": 48190,
      "cuotas6": 49770
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 23,
        "priceArs": 36350
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 21,
        "priceArs": 33200
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 20,
        "priceArs": 31600
      }
    ]
  },
  {
    "id": "perfumes-arabes-maison-alhambra-la-vivacit",
    "name": "LA VIVACITÉ",
    "brand": "Maison Alhambra",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://www.quieropy.com/web/image/product.template/31040/image_1920?unique=789962f",
    "isTop5": false,
    "page": 16,
    "variant": "Maison Alhambra Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 16.",
    "retail": {
      "efectivo": 47400,
      "transferencia": 48980,
      "cuotas6": 50560
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 23,
        "priceArs": 36350
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 21,
        "priceArs": 33200
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 20,
        "priceArs": 31600
      }
    ]
  },
  {
    "id": "perfumes-arabes-maison-alhambra-leonie",
    "name": "LEONIE",
    "brand": "Maison Alhambra",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://acdn-us.mitiendanube.com/stores/005/903/675/products/leonieintense-38393da86673ca120b17850190632989-1024-1024.webp",
    "isTop5": false,
    "page": 16,
    "variant": "Maison Alhambra Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 16.",
    "retail": {
      "efectivo": 45820,
      "transferencia": 47400,
      "cuotas6": 48980
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 22.5,
        "priceArs": 35550
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 20.5,
        "priceArs": 32400
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 19.5,
        "priceArs": 30850
      }
    ]
  },
  {
    "id": "perfumes-arabes-maison-alhambra-yeah-man-100ml",
    "name": "YEAH MAN ! 100ML",
    "brand": "Maison Alhambra",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://i.imgur.com/8zMLT39.png",
    "isTop5": false,
    "page": 16,
    "variant": "Maison Alhambra Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 16.",
    "retail": {
      "efectivo": 48190,
      "transferencia": 49770,
      "cuotas6": 51350
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 24,
        "priceArs": 37950
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 21.5,
        "priceArs": 34000
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 20.5,
        "priceArs": 32400
      }
    ]
  },
  {
    "id": "perfumes-arabes-maison-alhambra-sceptre-malachite",
    "name": "SCEPTRE MALACHITE",
    "brand": "Maison Alhambra",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://i.imgur.com/iINHWe1.png",
    "isTop5": false,
    "page": 16,
    "variant": "Maison Alhambra Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 16.",
    "retail": {
      "efectivo": 60040,
      "transferencia": 62410,
      "cuotas6": 64780
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 29.5,
        "priceArs": 46650
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 26.5,
        "priceArs": 41900
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 25.5,
        "priceArs": 40300
      }
    ]
  },
  {
    "id": "perfumes-arabes-maison-alhambra-jean-lowe-inmortal",
    "name": "JEAN LOWE INMORTAL",
    "brand": "Maison Alhambra",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://i.imgur.com/dbc4vpJ.png",
    "isTop5": false,
    "page": 16,
    "variant": "Maison Alhambra Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 16.",
    "retail": {
      "efectivo": 57670,
      "transferencia": 59250,
      "cuotas6": 60830
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 28,
        "priceArs": 44250
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 25.5,
        "priceArs": 40300
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 24,
        "priceArs": 37950
      }
    ]
  },
  {
    "id": "perfumes-arabes-maison-alhambra-jean-lowe-vibe",
    "name": "JEAN LOWE VIBE",
    "brand": "Maison Alhambra",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://i.imgur.com/ErDZrYh.png",
    "isTop5": false,
    "page": 17,
    "variant": "Maison Alhambra Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 17.",
    "retail": {
      "efectivo": 93220,
      "transferencia": 96380,
      "cuotas6": 99540
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 46,
        "priceArs": 72700
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 41.5,
        "priceArs": 65600
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 39.5,
        "priceArs": 62450
      }
    ]
  },
  {
    "id": "perfumes-arabes-maison-alhambra-maison-alhambra-philos-centro",
    "name": "MAISON ALHAMBRA PHILOS CENTRO",
    "brand": "Maison Alhambra",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://i.imgur.com/ZMoA54w.png",
    "isTop5": false,
    "page": 17,
    "variant": "Maison Alhambra Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 17.",
    "retail": {
      "efectivo": 40290,
      "transferencia": 41080,
      "cuotas6": 42660
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 20,
        "priceArs": 31600
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 18,
        "priceArs": 28450
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 17.5,
        "priceArs": 27650
      }
    ]
  },
  {
    "id": "perfumes-arabes-maison-alhambra-maitre-de-blue",
    "name": "MAITRE DE BLUE",
    "brand": "Maison Alhambra",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://i.imgur.com/lAgm2Ge.png",
    "isTop5": false,
    "page": 17,
    "variant": "Maison Alhambra Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 17.",
    "retail": {
      "efectivo": 37920,
      "transferencia": 39500,
      "cuotas6": 41080
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 19.5,
        "priceArs": 30850
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 17.5,
        "priceArs": 27650
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 16,
        "priceArs": 26100
      }
    ]
  },
  {
    "id": "perfumes-arabes-maison-alhambra-sceptre-bronzite",
    "name": "SCEPTRE BRONZITE",
    "brand": "Maison Alhambra",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://i.imgur.com/HuXJxzx.png",
    "isTop5": false,
    "page": 17,
    "variant": "Maison Alhambra Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 17.",
    "retail": {
      "efectivo": 59250,
      "transferencia": 60830,
      "cuotas6": 62410
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 29,
        "priceArs": 45850
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 26,
        "priceArs": 41100
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 25,
        "priceArs": 39500
      }
    ]
  },
  {
    "id": "perfumes-arabes-maison-alhambra-trhone-eclipse",
    "name": "TRHONE ECLIPSE",
    "brand": "Maison Alhambra",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://i.imgur.com/pOT54fD.png",
    "isTop5": false,
    "page": 17,
    "variant": "Maison Alhambra Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 17.",
    "retail": {
      "efectivo": 91640,
      "transferencia": 94800,
      "cuotas6": 97960
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 45.2,
        "priceArs": 71479
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 41.6,
        "priceArs": 65761
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 38.9,
        "priceArs": 61472
      }
    ]
  },
  {
    "id": "perfumes-arabes-al-wataniah-sabah-al-ward",
    "name": "SABAH AL WARD",
    "brand": "Al Wataniah",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://i.imgur.com/LuhpeyK.png",
    "isTop5": false,
    "page": 18,
    "variant": "Al Wataniah Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 18.",
    "retail": {
      "efectivo": 42660,
      "transferencia": 43450,
      "cuotas6": 45030
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 21,
        "priceArs": 33200
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 19,
        "priceArs": 30050
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 18,
        "priceArs": 28450
      }
    ]
  },
  {
    "id": "perfumes-arabes-al-wataniah-al-wataniah-durat-al-eros",
    "name": "AL WATANIAH DURAT AL EROS",
    "brand": "Al Wataniah",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://alwataniah.es/cdn/shop/files/AWP3719A_5055810012786_f91dc670-e82c-4366-8ebb-33937fa5deb3.png?v=1735321508&width=1445",
    "isTop5": false,
    "page": 18,
    "variant": "Al Wataniah Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 18.",
    "retail": {
      "efectivo": 45030,
      "transferencia": 46610,
      "cuotas6": 48190
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 22.5,
        "priceArs": 35550
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 20,
        "priceArs": 31600
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 19,
        "priceArs": 30050
      }
    ]
  },
  {
    "id": "perfumes-arabes-al-wataniah-attar-al-wesal",
    "name": "ATTAR AL WESAL",
    "brand": "Al Wataniah",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://i.imgur.com/eTl44Ym.png",
    "isTop5": false,
    "page": 18,
    "variant": "Al Wataniah Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 18.",
    "retail": {
      "efectivo": 43450,
      "transferencia": 44240,
      "cuotas6": 45820
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 21,
        "priceArs": 33200
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 19,
        "priceArs": 30050
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 18,
        "priceArs": 28450
      }
    ]
  },
  {
    "id": "perfumes-arabes-lattafa-ameerati",
    "name": "AMEERATI",
    "brand": "Lattafa",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://i.imgur.com/PEr35sp.png",
    "isTop5": false,
    "page": 18,
    "variant": "Lattafa Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 18.",
    "retail": {
      "efectivo": 37920,
      "transferencia": 39500,
      "cuotas6": 40290
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 18.5,
        "priceArs": 29250
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 17,
        "priceArs": 26900
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 16,
        "priceArs": 25300
      }
    ]
  },
  {
    "id": "perfumes-arabes-french-avenue-noire-absolute",
    "name": "NOIRE ABSOLUTE",
    "brand": "French Avenue",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://i.imgur.com/R1DDFl6.png",
    "isTop5": false,
    "page": 19,
    "variant": "French Avenue Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 19.",
    "retail": {
      "efectivo": 106650,
      "transferencia": 110600,
      "cuotas6": 113760
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 52.5,
        "priceArs": 82950
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 47,
        "priceArs": 74208
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 45,
        "priceArs": 71100
      }
    ]
  },
  {
    "id": "perfumes-arabes-gianitech-import-noiere-edp",
    "name": "NOIRE EDP",
    "brand": "Gianitech Import",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://i.imgur.com/7VRGxSH.png",
    "isTop5": false,
    "page": 19,
    "variant": "Gianitech Import Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 19.",
    "retail": {
      "efectivo": 106650,
      "transferencia": 110600,
      "cuotas6": 113760
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 52.5,
        "priceArs": 82950
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 47,
        "priceArs": 74208
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 45,
        "priceArs": 71100
      }
    ]
  },
  {
    "id": "perfumes-arabes-french-avenue-fondue-velvet-dip",
    "name": "FONDUE VELVET DIP",
    "brand": "French Avenue",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://i.imgur.com/MwmSRo4.png",
    "isTop5": false,
    "page": 19,
    "variant": "French Avenue Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 19.",
    "retail": {
      "efectivo": 106650,
      "transferencia": 110600,
      "cuotas6": 113760
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 52.5,
        "priceArs": 82950
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 47,
        "priceArs": 74208
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 45,
        "priceArs": 71100
      }
    ]
  },
  {
    "id": "perfumes-arabes-french-avenue-island-dreams",
    "name": "ISLAND DREAMS",
    "brand": "French Avenue",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://i.imgur.com/ob8Sp6r.png",
    "isTop5": false,
    "page": 19,
    "variant": "French Avenue Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 19.",
    "retail": {
      "efectivo": 86110,
      "transferencia": 88480,
      "cuotas6": 91640
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 42,
        "priceArs": 66400
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 38,
        "priceArs": 60050
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 36,
        "priceArs": 56900
      }
    ]
  },
  {
    "id": "perfumes-arabes-french-avenue-vanilla-dunes",
    "name": "VANILLA DUNES",
    "brand": "French Avenue",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://i.imgur.com/xDy1ajy.png",
    "isTop5": false,
    "page": 19,
    "variant": "French Avenue Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 19.",
    "retail": {
      "efectivo": 89270,
      "transferencia": 91640,
      "cuotas6": 94800
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 44.1,
        "priceArs": 69631
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 40.6,
        "priceArs": 64061
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 37.9,
        "priceArs": 59883
      }
    ]
  },
  {
    "id": "perfumes-arabes-french-avenue-liquid-brun",
    "name": "LIQUID BRUN",
    "brand": "French Avenue",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://i.imgur.com/eRCVK6G.png",
    "isTop5": false,
    "page": 20,
    "variant": "French Avenue Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 20.",
    "retail": {
      "efectivo": 104280,
      "transferencia": 107440,
      "cuotas6": 110600
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 51,
        "priceArs": 80600
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 46,
        "priceArs": 72700
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 43.5,
        "priceArs": 68750
      }
    ]
  },
  {
    "id": "perfumes-arabes-french-avenue-spectre-ghost",
    "name": "SPECTRE GHOST",
    "brand": "French Avenue",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://i.imgur.com/1jzbyuW.png",
    "isTop5": false,
    "page": 20,
    "variant": "French Avenue Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 20.",
    "retail": {
      "efectivo": 96380,
      "transferencia": 99540,
      "cuotas6": 103490
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 47.5,
        "priceArs": 75050
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 42.5,
        "priceArs": 67150
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 40.5,
        "priceArs": 64000
      }
    ]
  },
  {
    "id": "perfumes-arabes-french-avenue-veneno",
    "name": "VENENO",
    "brand": "French Avenue",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://i.imgur.com/8ZpDSJh.png",
    "isTop5": false,
    "page": 20,
    "variant": "French Avenue Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 20.",
    "retail": {
      "efectivo": 102700,
      "transferencia": 105860,
      "cuotas6": 109020
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 50.7,
        "priceArs": 80106
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 46.6,
        "priceArs": 73698
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 43.6,
        "priceArs": 68891
      }
    ]
  },
  {
    "id": "perfumes-arabes-french-avenue-liquid-brun-limited-edition",
    "name": "LIQUID BRUN LIMITED EDITION",
    "brand": "French Avenue",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://i.imgur.com/yOqoRyo.png",
    "isTop5": false,
    "page": 20,
    "variant": "French Avenue Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 20.",
    "retail": {
      "efectivo": 135090,
      "transferencia": 139830,
      "cuotas6": 144570
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 79,
        "priceArs": 124850
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 71,
        "priceArs": 112200
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 67.5,
        "priceArs": 106650
      }
    ]
  },
  {
    "id": "perfumes-arabes-french-avenue-veneno-bianco",
    "name": "VENENO BIANCO",
    "brand": "French Avenue",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://i.imgur.com/HnQm7jv.png",
    "isTop5": false,
    "page": 20,
    "variant": "French Avenue Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 20.",
    "retail": {
      "efectivo": 94800,
      "transferencia": 97960,
      "cuotas6": 101120
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 46.5,
        "priceArs": 73500
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 42,
        "priceArs": 66400
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 40,
        "priceArs": 63200
      }
    ]
  },
  {
    "id": "perfumes-arabes-rayhaan-jungle-vibe",
    "name": "JUNGLE VIBE",
    "brand": "Rayhaan",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://static.wixstatic.com/media/2fd66f_4499b528b259407b92c9d482a2df548a~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
    "isTop5": false,
    "page": 21,
    "variant": "Rayhaan Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 21.",
    "retail": {
      "efectivo": 70310,
      "transferencia": 72680,
      "cuotas6": 75050
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 34.5,
        "priceArs": 54550
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 31,
        "priceArs": 49000
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 29.5,
        "priceArs": 46650
      }
    ]
  },
  {
    "id": "perfumes-arabes-rayhaan-rayhaan-tropical-vibe",
    "name": "RAYHAAN TROPICAL VIBE",
    "brand": "Rayhaan",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://i.imgur.com/Q5feQQg.png",
    "isTop5": false,
    "page": 21,
    "variant": "Rayhaan Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 21.",
    "retail": {
      "efectivo": 79790,
      "transferencia": 82950,
      "cuotas6": 85320
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 39,
        "priceArs": 61650
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 35.5,
        "priceArs": 56100
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 33.5,
        "priceArs": 52950
      }
    ]
  },
  {
    "id": "perfumes-arabes-rayhaan-italia-pour-homme",
    "name": "ITALIA POUR HOMME",
    "brand": "Rayhaan",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://nayseeparfum.com/cdn/shop/files/0305sd.png?v=1772731874",
    "isTop5": false,
    "page": 21,
    "variant": "Rayhaan Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 21.",
    "retail": {
      "efectivo": 134300,
      "transferencia": 138250,
      "cuotas6": 142990
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 65.5,
        "priceArs": 103500
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 59,
        "priceArs": 93250
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 56.5,
        "priceArs": 89300
      }
    ]
  },
  {
    "id": "perfumes-arabes-rayhaan-rayhaan-valhalla",
    "name": "RAYHAAN VALHALLA",
    "brand": "Rayhaan",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://halaperfumesbh.com/cdn/shop/files/rayhaan-valhalla-100ml-cutout.png?v=1789493718",
    "isTop5": false,
    "page": 21,
    "variant": "Rayhaan Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 21.",
    "retail": {
      "efectivo": 71100,
      "transferencia": 73470,
      "cuotas6": 75840
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 35.1,
        "priceArs": 55458
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 32.3,
        "priceArs": 51021
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 30.2,
        "priceArs": 47694
      }
    ]
  },
  {
    "id": "perfumes-arabes-rayhaan-rayhaan-elixir",
    "name": "RAYHAAN ELIXIR",
    "brand": "Rayhaan",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://luxearoma.net/cdn/shop/files/rayhaan-elixir-100ml-bottle-box.png?v=1791290744",
    "isTop5": false,
    "page": 21,
    "variant": "Rayhaan Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 21.",
    "retail": {
      "efectivo": 87690,
      "transferencia": 90060,
      "cuotas6": 93220
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 43,
        "priceArs": 67950
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 38.5,
        "priceArs": 60850
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 37,
        "priceArs": 58500
      }
    ]
  },
  {
    "id": "perfumes-arabes-rayhaan-rayhaan-ocean-rush",
    "name": "RAYHAAN OCEAN RUSH",
    "brand": "Rayhaan",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://cdn.fragrancenet.com/images/photos/box-bottle/900x900/514988.png",
    "isTop5": false,
    "page": 21,
    "variant": "Rayhaan Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 21.",
    "retail": {
      "efectivo": 46610,
      "transferencia": 48190,
      "cuotas6": 49770
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 23,
        "priceArs": 36356
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 21.2,
        "priceArs": 33448
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 19.8,
        "priceArs": 31266
      }
    ]
  },
  {
    "id": "perfumes-arabes-rayhaan-stalion-53",
    "name": "STALION 53",
    "brand": "Rayhaan",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://fimgs.net/mdimg/perfume-thumbs/dark-375x500.106193.webp",
    "isTop5": false,
    "page": 21,
    "variant": "Rayhaan Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 21.",
    "retail": {
      "efectivo": 54510,
      "transferencia": 56090,
      "cuotas6": 57670
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 26.5,
        "priceArs": 41900
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 24,
        "priceArs": 37950
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 23,
        "priceArs": 36350
      }
    ]
  },
  {
    "id": "perfumes-arabes-rasasi-hawas-for-him",
    "name": "HAWAS FOR HIM",
    "brand": "Rasasi",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://elghazawy.b-cdn.net/275154/%D8%B9%D8%B7%D8%B1-%D8%A7%D9%84%D8%B1%D8%B5%D8%A7%D8%B5%D9%8A-%D9%87%D9%88%D8%B3-%D9%81%D9%88%D8%B1-%D9%87%D9%8A%D9%85-%D8%A8%D8%B1%D9%81%D9%8A%D9%88%D9%85-%D8%B1%D8%AC%D8%A7%D9%84%D9%8A-%D8%A7%D9%88-%D8%AF%D9%88-%D8%A8%D8%B1%D9%81%D8%A7%D9%86---100-%D9%85%D9%84%D9%84.webp",
    "isTop5": false,
    "page": 22,
    "variant": "Rasasi Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 22.",
    "retail": {
      "efectivo": 61620,
      "transferencia": 63990,
      "cuotas6": 66360
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 30.5,
        "priceArs": 48200
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 27.5,
        "priceArs": 43450
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 26,
        "priceArs": 41100
      }
    ]
  },
  {
    "id": "perfumes-arabes-rasasi-hawas-black",
    "name": "HAWAS BLACK",
    "brand": "Rasasi",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://i.imgur.com/GDe0aGv.png",
    "isTop5": false,
    "page": 22,
    "variant": "Rasasi Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 22.",
    "retail": {
      "efectivo": 79000,
      "transferencia": 81370,
      "cuotas6": 84530
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 40,
        "priceArs": 63200
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 36,
        "priceArs": 56900
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 34.5,
        "priceArs": 54550
      }
    ]
  },
  {
    "id": "perfumes-arabes-rasasi-hawas-for-her",
    "name": "HAWAS FOR HER",
    "brand": "Rasasi",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://rcperfumery.com.co/wp-content/uploads/2025/10/IMG_3707.WEBP.png",
    "isTop5": false,
    "page": 22,
    "variant": "Rasasi Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 22.",
    "retail": {
      "efectivo": 113760,
      "transferencia": 117710,
      "cuotas6": 121660
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 57.5,
        "priceArs": 90850
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 52,
        "priceArs": 82200
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 49.5,
        "priceArs": 78250
      }
    ]
  },
  {
    "id": "perfumes-arabes-rasasi-rasasi-hawas-tropical",
    "name": "RASASI HAWAS TROPICAL",
    "brand": "Rasasi",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://hadiyyeh.com/cdn/shop/files/processed_cms1gvmbg0333pqw36uoio2n9_1785050519013.webp?v=1785050523&width=1445",
    "isTop5": false,
    "page": 22,
    "variant": "Rasasi Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 22.",
    "retail": {
      "efectivo": 141410,
      "transferencia": 146150,
      "cuotas6": 150890
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 69.5,
        "priceArs": 109850
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 62.5,
        "priceArs": 98750
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 59.5,
        "priceArs": 94050
      }
    ]
  },
  {
    "id": "perfumes-arabes-rasasi-hawas-ice",
    "name": "HAWAS ICE",
    "brand": "Rasasi",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://cdn.billowshop.com/9ef84dda-32dd-4016-7da3-1c0a824fffb4/img/Producto/3081/Auricular-Devia-ANC-TWS-Pro-2-Wireless-con-pantalla-2026-10-01T154811-559-6abebc1eabf48-O.png",
    "isTop5": false,
    "page": 22,
    "variant": "Rasasi Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 22.",
    "retail": {
      "efectivo": 90850,
      "transferencia": 94010,
      "cuotas6": 96380
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 46,
        "priceArs": 72700
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 41.5,
        "priceArs": 65600
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 39.5,
        "priceArs": 62450
      }
    ]
  },
  {
    "id": "perfumes-arabes-rasasi-hawas-fire",
    "name": "HAWAS FIRE",
    "brand": "Rasasi",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://i.imgur.com/300Hk7h.png",
    "isTop5": false,
    "page": 22,
    "variant": "Rasasi Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 22.",
    "retail": {
      "efectivo": 90060,
      "transferencia": 93220,
      "cuotas6": 96380
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 44.5,
        "priceArs": 70350
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 40,
        "priceArs": 63200
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 38,
        "priceArs": 60050
      }
    ]
  },
  {
    "id": "perfumes-arabes-rasasi-rasasi-hawas-kobra",
    "name": "RASASI HAWAS KOBRA",
    "brand": "Rasasi",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://cdn.billowshop.com/9ef84dda-32dd-4016-7da3-1c0a824fffb4/img/Producto/3082/Auricular-Devia-ANC-TWS-Pro-2-Wireless-con-pantalla-2026-10-01T160840-892-6abebed5100fa-O.png",
    "isTop5": false,
    "page": 22,
    "variant": "Rasasi Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 22.",
    "retail": {
      "efectivo": 119290,
      "transferencia": 123240,
      "cuotas6": 127190
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 58.5,
        "priceArs": 92450
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 52.5,
        "priceArs": 82950
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 50,
        "priceArs": 79000
      }
    ]
  },
  {
    "id": "perfumes-arabes-rasasi-rasasi-hawas-malibu",
    "name": "RASASI HAWAS MALIBU",
    "brand": "Rasasi",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://cdn.fragrancenet.com/images/photos/box-bottle/900x900/509784.png",
    "isTop5": false,
    "page": 22,
    "variant": "Rasasi Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 22.",
    "retail": {
      "efectivo": 81370,
      "transferencia": 83740,
      "cuotas6": 86900
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 40,
        "priceArs": 63200
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 36,
        "priceArs": 56900
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 34.5,
        "priceArs": 54550
      }
    ]
  },
  {
    "id": "perfumes-arabes-rasasi-rasasi-hawas-diva",
    "name": "RASASI HAWAS DIVA",
    "brand": "Rasasi",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://www.quieropy.com/web/image/product.product/30588/image_1024/%5BHAWAS%20DIVA%5D%20RASASI%20HAWAS%20DIVA%20EDP%20100%20ML?unique=77af08d",
    "isTop5": false,
    "page": 22,
    "variant": "Rasasi Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 22.",
    "retail": {
      "efectivo": 108230,
      "transferencia": 111390,
      "cuotas6": 115340
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 57.5,
        "priceArs": 90850
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 52,
        "priceArs": 82200
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 49.5,
        "priceArs": 78250
      }
    ]
  },
  {
    "id": "perfumes-arabes-rasasi-hawas-verde",
    "name": "HAWAS VERDE",
    "brand": "Rasasi",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://eternalscent.co.za/wp-content/uploads/2026/07/hawas_verde-removebg-preview.png",
    "isTop5": false,
    "page": 23,
    "variant": "Rasasi Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 23.",
    "retail": {
      "efectivo": 93220,
      "transferencia": 96380,
      "cuotas6": 99540
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 46,
        "priceArs": 72712
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 42.3,
        "priceArs": 66895
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 39.6,
        "priceArs": 62532
      }
    ]
  },
  {
    "id": "perfumes-arabes-rasasi-hawas-pink",
    "name": "HAWAS PINK",
    "brand": "Rasasi",
    "categoryId": "perfumes-arabes",
    "categoryLabel": "Línea Árabe",
    "image": "https://www.quieropy.com/web/image/product.product/30588/image_1024/%5BHAWAS%20DIVA%5D%20RASASI%20HAWAS%20DIVA%20EDP%20100%20ML?unique=77af08d",
    "isTop5": false,
    "page": 23,
    "variant": "Rasasi Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 23.",
    "retail": {
      "efectivo": 82950,
      "transferencia": 85320,
      "cuotas6": 88480
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 41,
        "priceArs": 64701
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 37.7,
        "priceArs": 59525
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 35.3,
        "priceArs": 55643
      }
    ]
  },
  {
    "id": "perfumes-disenador-giorgio-armani-stronger-with-you-intensely",
    "name": "STRONGER WITH YOU INTENSELY",
    "brand": "Giorgio Armani",
    "categoryId": "perfumes-disenador",
    "categoryLabel": "Diseñador & Nicho",
    "image": "https://www.rp-luxury.com/4979-thickbox_default/armani-stronger-with-you-intensely-edp.jpg",
    "badge": "MÁS VENDIDO",
    "isTop5": true,
    "salesRank": 1,
    "page": 25,
    "variant": "Giorgio Armani Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 25.",
    "retail": {
      "efectivo": 225940,
      "transferencia": 228310,
      "cuotas6": 237000
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 110,
        "priceArs": 165000
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 101.2,
        "priceArs": 151800
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 96.8,
        "priceArs": 145200
      }
    ]
  },
  {
    "id": "perfumes-disenador-jean-paul-gaultier-jean-paul-scandal",
    "name": "JEAN PAUL SCANDAL",
    "brand": "Jean Paul Gaultier",
    "categoryId": "perfumes-disenador",
    "categoryLabel": "Diseñador & Nicho",
    "image": "https://i.imgur.com/wXGKnPS.png",
    "badge": "DESTACADO",
    "isTop5": true,
    "salesRank": 2,
    "page": 25,
    "variant": "Jean Paul Gaultier Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 25.",
    "retail": {
      "efectivo": 234630,
      "transferencia": 242530,
      "cuotas6": 249640
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 110,
        "priceArs": 160000
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 101.2,
        "priceArs": 147200
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 96.8,
        "priceArs": 140800
      }
    ]
  },
  {
    "id": "perfumes-disenador-jean-paul-gaultier-jean-paul-le-male-elixir",
    "name": "JEAN PAUL LE MALE ELIXIR",
    "brand": "Jean Paul Gaultier",
    "categoryId": "perfumes-disenador",
    "categoryLabel": "Diseñador & Nicho",
    "image": "https://acdn-us.mitiendanube.com/stores/001/206/031/products/post-14-873ae60585a14fb8c817640967115448-1024-1024.webp",
    "badge": "DESTACADO",
    "isTop5": true,
    "salesRank": 3,
    "page": 25,
    "variant": "Jean Paul Gaultier Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 25.",
    "retail": {
      "efectivo": 280450,
      "transferencia": 289930,
      "cuotas6": 298620
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 132,
        "priceArs": 185000
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 121.4,
        "priceArs": 170200
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 116.2,
        "priceArs": 162800
      }
    ]
  },
  {
    "id": "perfumes-disenador-jean-paul-gaultier-jean-paul-le-male-le-parfum",
    "name": "JEAN PAUL LE MALE LE PARFUM",
    "brand": "Jean Paul Gaultier",
    "categoryId": "perfumes-disenador",
    "categoryLabel": "Diseñador & Nicho",
    "image": "https://mopani.co.za/cdn/shop/files/245975.webp?v=1721287956",
    "badge": "DESTACADO",
    "isTop5": true,
    "salesRank": 4,
    "page": 25,
    "variant": "Jean Paul Gaultier Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 25.",
    "retail": {
      "efectivo": 168270,
      "transferencia": 169850,
      "cuotas6": 176960
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 105,
        "priceArs": 150000
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 96.6,
        "priceArs": 138000
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 92.4,
        "priceArs": 132000
      }
    ]
  },
  {
    "id": "perfumes-disenador-jean-paul-gaultier-jean-paul-le-bau-paradise-garden",
    "name": "JEAN PAUL LE BAU PARADISE GARDEN",
    "brand": "Jean Paul Gaultier",
    "categoryId": "perfumes-disenador",
    "categoryLabel": "Diseñador & Nicho",
    "image": "https://i.imgur.com/3rUJO0X.png",
    "badge": "DESTACADO",
    "isTop5": true,
    "salesRank": 5,
    "page": 25,
    "variant": "Jean Paul Gaultier Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 25.",
    "retail": {
      "efectivo": 252800,
      "transferencia": 260700,
      "cuotas6": 269390
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 123.5,
        "priceArs": 175000
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 113.6,
        "priceArs": 161000
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 108.7,
        "priceArs": 154000
      }
    ]
  },
  {
    "id": "perfumes-disenador-issey-miyake-issey-miyake-leau-dissey-pour-homme",
    "name": "ISSEY MIYAKE L.EAU D.ISSEY POUR HOMME",
    "brand": "Issey Miyake",
    "categoryId": "perfumes-disenador",
    "categoryLabel": "Diseñador & Nicho",
    "image": "https://i.imgur.com/5lQWLfw.png",
    "isTop5": false,
    "page": 25,
    "variant": "Issey Miyake Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 25.",
    "retail": {
      "efectivo": 83740,
      "transferencia": 84530,
      "cuotas6": 87690
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 53,
        "priceArs": 77250
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 48.8,
        "priceArs": 71070
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 46.6,
        "priceArs": 67980
      }
    ]
  },
  {
    "id": "perfumes-disenador-issey-miyake-issey-miyake-leau-dissey",
    "name": "ISSEY MIYAKE L.EAU D.ISSEY",
    "brand": "Issey Miyake",
    "categoryId": "perfumes-disenador",
    "categoryLabel": "Diseñador & Nicho",
    "image": "https://i.imgur.com/Hg6YBkH.png",
    "isTop5": false,
    "page": 25,
    "variant": "Issey Miyake Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 25.",
    "retail": {
      "efectivo": 88480,
      "transferencia": 89270,
      "cuotas6": 93220
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 49.5,
        "priceArs": 81750
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 45.5,
        "priceArs": 75210
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 43.6,
        "priceArs": 71940
      }
    ]
  },
  {
    "id": "perfumes-disenador-xerjoff-xerjoff-naxos",
    "name": "XERJOFF NAXOS",
    "brand": "Xerjoff",
    "categoryId": "perfumes-disenador",
    "categoryLabel": "Diseñador & Nicho",
    "image": "https://i.imgur.com/hUV9tvh.png",
    "isTop5": false,
    "page": 25,
    "variant": "Xerjoff Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 25.",
    "retail": {
      "efectivo": 399740,
      "transferencia": 414750,
      "cuotas6": 430550
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 230,
        "priceArs": 320000
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 211.6,
        "priceArs": 294400
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 202.4,
        "priceArs": 281600
      }
    ]
  },
  {
    "id": "perfumes-disenador-xerjoff-xerjoff-erba-pura",
    "name": "XERJOFF ERBA PURA",
    "brand": "Xerjoff",
    "categoryId": "perfumes-disenador",
    "categoryLabel": "Diseñador & Nicho",
    "image": "https://elghazawy.b-cdn.net/272083/%D8%B9%D8%B7%D8%B1-%D8%B2%D9%8A%D8%B1%D8%AC%D9%88%D9%81-%D8%A7%D9%8A%D8%B1%D8%A8%D8%A7-%D8%A8%D9%88%D8%B1%D8%A7%D8%8C-%D8%B9%D8%B7%D8%B1-%D8%B1%D8%AC%D8%A7%D9%84%D9%8A-%D9%88%D9%86%D8%B3%D8%A7%D8%A6%D9%8A%D8%8C-%D8%A7%D9%88-%D8%AF%D9%8A-%D8%A8%D8%A7%D8%B1%D9%81%D8%A7%D9%86%D8%8C-100-%D9%85%D9%84.webp",
    "isTop5": false,
    "page": 25,
    "variant": "Xerjoff Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 25.",
    "retail": {
      "efectivo": 425020,
      "transferencia": 439240,
      "cuotas6": 453460
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 224,
        "priceArs": 280000
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 206.1,
        "priceArs": 257600
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 197.1,
        "priceArs": 246400
      }
    ]
  },
  {
    "id": "perfumes-disenador-xerjoff-herjoff-erba-gold",
    "name": "HERJOFF ERBA GOLD",
    "brand": "Xerjoff",
    "categoryId": "perfumes-disenador",
    "categoryLabel": "Diseñador & Nicho",
    "image": "https://assets.goldenscent.com/catalog/product/8/0/8054320902522_-_xerjoff_-_xerjoff_erba_gold_unisex_eau_de_parfum_100_ml_-_100_ml_-_sd.png",
    "isTop5": false,
    "page": 26,
    "variant": "Xerjoff Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 26.",
    "retail": {
      "efectivo": 350000,
      "transferencia": 320000,
      "cuotas6": 402500
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 172.8,
        "priceArs": 273000
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 159,
        "priceArs": 251160
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 148.6,
        "priceArs": 234780
      }
    ]
  },
  {
    "id": "perfumes-disenador-montale-montale-starry-nights",
    "name": "MONTALE STARRY NIGHTS",
    "brand": "Montale",
    "categoryId": "perfumes-disenador",
    "categoryLabel": "Diseñador & Nicho",
    "image": "https://i.imgur.com/s44qHqU.png",
    "isTop5": false,
    "page": 26,
    "variant": "Montale Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 26.",
    "retail": {
      "efectivo": 274920,
      "transferencia": 284400,
      "cuotas6": 293090
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 135.7,
        "priceArs": 214438
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 124.8,
        "priceArs": 197283
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 116.7,
        "priceArs": 184417
      }
    ]
  },
  {
    "id": "perfumes-disenador-versace-versace-eros",
    "name": "VERSACE EROS",
    "brand": "Versace",
    "categoryId": "perfumes-disenador",
    "categoryLabel": "Diseñador & Nicho",
    "image": "https://nuestrasfragancias.com/wp-content/uploads/2018/11/Eros2.png",
    "isTop5": false,
    "page": 26,
    "variant": "Versace Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 26.",
    "retail": {
      "efectivo": 158000,
      "transferencia": 162740,
      "cuotas6": 169850
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 90,
        "priceArs": 155000
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 82.8,
        "priceArs": 142600
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 79.2,
        "priceArs": 136400
      }
    ]
  },
  {
    "id": "perfumes-disenador-jean-paul-gaultier-le-beau-parfum",
    "name": "LE BEAU PARFUM",
    "brand": "Jean Paul Gaultier",
    "categoryId": "perfumes-disenador",
    "categoryLabel": "Diseñador & Nicho",
    "image": "https://i.imgur.com/KXzeE1K.png",
    "isTop5": false,
    "page": 26,
    "variant": "Jean Paul Gaultier Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 26.",
    "retail": {
      "efectivo": 232260,
      "transferencia": 234630,
      "cuotas6": 244110
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 217,
        "priceArs": 190000
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 199.6,
        "priceArs": 174800
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 191,
        "priceArs": 167200
      }
    ]
  },
  {
    "id": "perfumes-disenador-versace-versace-eros-flame",
    "name": "VERSACE EROS Flame",
    "brand": "Versace",
    "categoryId": "perfumes-disenador",
    "categoryLabel": "Diseñador & Nicho",
    "image": "https://cdn.fragrancenet.com/images/photos/box-bottle/900x900/332213.png",
    "isTop5": false,
    "page": 26,
    "variant": "Versace Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 26.",
    "retail": {
      "efectivo": 136670,
      "transferencia": 140620,
      "cuotas6": 146940
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 90,
        "priceArs": 142200
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 82.8,
        "priceArs": 130824
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 79.2,
        "priceArs": 125136
      }
    ]
  },
  {
    "id": "perfumes-disenador-dolce-gabbana-dolce-y-gabana-ligh-blue-edt",
    "name": "DOLCE Y GABBANA LIGH BLUE EDT",
    "brand": "Dolce & Gabbana",
    "categoryId": "perfumes-disenador",
    "categoryLabel": "Diseñador & Nicho",
    "image": "https://media.ulta.com/i/ulta/2636284_alt01?w=800&h=800&fmt=auto",
    "isTop5": false,
    "page": 26,
    "variant": "Dolce & Gabbana Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 26.",
    "retail": {
      "efectivo": 198290,
      "transferencia": 205400,
      "cuotas6": 211720
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 82.5,
        "priceArs": 145000
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 75.9,
        "priceArs": 133400
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 72.6,
        "priceArs": 127600
      }
    ]
  },
  {
    "id": "perfumes-disenador-gianitech-import-importado-especial-vip-1-pg-26",
    "name": "Importado Especial VIP #1 (Pág. 26)",
    "brand": "Gianitech Import",
    "categoryId": "perfumes-disenador",
    "categoryLabel": "Diseñador & Nicho",
    "image": "/src/assets/images/product_dior_sauvage_1792105616995.jpg",
    "isTop5": false,
    "page": 26,
    "variant": "Gianitech Import Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 26.",
    "retail": {
      "efectivo": 395000,
      "transferencia": 408430,
      "cuotas6": 421860
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 195,
        "priceArs": 308100
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 179.4,
        "priceArs": 283452
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 167.7,
        "priceArs": 264966
      }
    ]
  },
  {
    "id": "perfumes-disenador-gianitech-import-importado-especial-vip-2-pg-26",
    "name": "Importado Especial VIP #2 (Pág. 26)",
    "brand": "Gianitech Import",
    "categoryId": "perfumes-disenador",
    "categoryLabel": "Diseñador & Nicho",
    "image": "/src/assets/images/product_dior_sauvage_1792105616995.jpg",
    "isTop5": false,
    "page": 26,
    "variant": "Gianitech Import Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 26.",
    "retail": {
      "efectivo": 316790,
      "transferencia": 327850,
      "cuotas6": 338120
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 156.4,
        "priceArs": 247096
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 143.9,
        "priceArs": 227328
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 134.5,
        "priceArs": 212503
      }
    ]
  },
  {
    "id": "perfumes-disenador-gianitech-import-importado-especial-vip-3-pg-26",
    "name": "Importado Especial VIP #3 (Pág. 26)",
    "brand": "Gianitech Import",
    "categoryId": "perfumes-disenador",
    "categoryLabel": "Diseñador & Nicho",
    "image": "/src/assets/images/product_dior_sauvage_1792105616995.jpg",
    "isTop5": false,
    "page": 26,
    "variant": "Gianitech Import Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 26.",
    "retail": {
      "efectivo": 268600,
      "transferencia": 278080,
      "cuotas6": 286770
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 132.6,
        "priceArs": 209508
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 122,
        "priceArs": 192747
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 114,
        "priceArs": 180177
      }
    ]
  },
  {
    "id": "perfumes-disenador-azzaro-azzaro-the-most-wanted",
    "name": "AZZARO THE MOST WANTED",
    "brand": "Azzaro",
    "categoryId": "perfumes-disenador",
    "categoryLabel": "Diseñador & Nicho",
    "image": "https://i.imgur.com/nYQ2JYE.png",
    "isTop5": false,
    "page": 27,
    "variant": "Azzaro Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 27.",
    "retail": {
      "efectivo": 191180,
      "transferencia": 197500,
      "cuotas6": 203820
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 94.4,
        "priceArs": 149120
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 86.8,
        "priceArs": 137190
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 81.2,
        "priceArs": 128243
      }
    ]
  },
  {
    "id": "perfumes-disenador-jo-milano-paris-game-of-spades-royale",
    "name": "GAME OF SPADES ROYALE",
    "brand": "Jo Milano Paris",
    "categoryId": "perfumes-disenador",
    "categoryLabel": "Diseñador & Nicho",
    "image": "https://cdn.fragrancenet.com/images/photos/box-bottle/900x900/462763.png",
    "isTop5": false,
    "page": 27,
    "variant": "Jo Milano Paris Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 27.",
    "retail": {
      "efectivo": 208560,
      "transferencia": 215670,
      "cuotas6": 222780
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 103,
        "priceArs": 162677
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 94.8,
        "priceArs": 149663
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 88.6,
        "priceArs": 139902
      }
    ]
  },
  {
    "id": "perfumes-disenador-azzaro-azzaro-wanted-by-night",
    "name": "AZZARO WANTED BY NIGHT",
    "brand": "Azzaro",
    "categoryId": "perfumes-disenador",
    "categoryLabel": "Diseñador & Nicho",
    "image": "https://modabodyshop.com/cdn/shop/files/3351500009848-1.png?v=1771523319&width=2000",
    "isTop5": false,
    "page": 27,
    "variant": "Azzaro Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 27.",
    "retail": {
      "efectivo": 174590,
      "transferencia": 180910,
      "cuotas6": 186440
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 86.2,
        "priceArs": 136180
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 79.3,
        "priceArs": 125286
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 74.1,
        "priceArs": 117115
      }
    ]
  },
  {
    "id": "perfumes-disenador-jo-milano-paris-game-of-spades-full-house",
    "name": "GAME OF SPADES FULL HOUSE",
    "brand": "Jo Milano Paris",
    "categoryId": "perfumes-disenador",
    "categoryLabel": "Diseñador & Nicho",
    "image": "https://cdn.fragrancenet.com/images/photos/900x900/498954.png",
    "isTop5": false,
    "page": 27,
    "variant": "Jo Milano Paris Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 27.",
    "retail": {
      "efectivo": 235420,
      "transferencia": 228310,
      "cuotas6": 222780
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 116.2,
        "priceArs": 183628
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 106.9,
        "priceArs": 168938
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 99.9,
        "priceArs": 157920
      }
    ]
  },
  {
    "id": "perfumes-disenador-jo-milano-paris-game-of-spades-wildcard",
    "name": "GAME OF SPADES WILDCARD",
    "brand": "Jo Milano Paris",
    "categoryId": "perfumes-disenador",
    "categoryLabel": "Diseñador & Nicho",
    "image": "https://cdn.fragrancenet.com/images/photos/box-bottle/600x600/507510.png",
    "isTop5": false,
    "page": 27,
    "variant": "Jo Milano Paris Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 27.",
    "retail": {
      "efectivo": 214880,
      "transferencia": 221990,
      "cuotas6": 229100
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 106.1,
        "priceArs": 167606
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 97.6,
        "priceArs": 154198
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 91.2,
        "priceArs": 144141
      }
    ]
  },
  {
    "id": "perfumes-disenador-montale-montale-sensual-instiinct",
    "name": "MONTALE SENSUAL INSTIINCT",
    "brand": "Montale",
    "categoryId": "perfumes-disenador",
    "categoryLabel": "Diseñador & Nicho",
    "image": "https://acdn-us.mitiendanube.com/stores/346/493/products/tmp_b64_f6fd33c3-c9b1-4332-af31-0ccb11ddbcaa_346493_351567-55f4b7c2ab75a3e2aa17475428546318-1024-1024.webp",
    "isTop5": false,
    "page": 27,
    "variant": "Montale Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 27.",
    "retail": {
      "efectivo": 261490,
      "transferencia": 252800,
      "cuotas6": 244900
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 129.1,
        "priceArs": 203962
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 118.8,
        "priceArs": 187645
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 111,
        "priceArs": 175407
      }
    ]
  },
  {
    "id": "body-splash-victorias-secret-body-splash-bare-vanilla-daydream",
    "name": "BODY SPLASH BARE VANILLA DAYDREAM",
    "brand": "Victoria's Secret",
    "categoryId": "body-splash",
    "categoryLabel": "Victoria's Secret & Splash",
    "image": "https://fimgs.net/mdimg/perfume-thumbs/dark-375x500.96479.webp",
    "badge": "MÁS VENDIDO",
    "isTop5": true,
    "salesRank": 1,
    "page": 29,
    "variant": "Victoria's Secret Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 29.",
    "retail": {
      "efectivo": 37000,
      "transferencia": 32000,
      "cuotas6": 42550
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 18.3,
        "priceArs": 28860
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 16.8,
        "priceArs": 26551
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 15.7,
        "priceArs": 24820
      }
    ]
  },
  {
    "id": "body-splash-victorias-secret-body-splash-bare-vanilla-starlit",
    "name": "BODY SPLASH BARE VANILLA STARLIT",
    "brand": "Victoria's Secret",
    "categoryId": "body-splash",
    "categoryLabel": "Victoria's Secret & Splash",
    "image": "https://fimgs.net/mdimg/perfume-thumbs/dark-375x500.100405.webp",
    "badge": "DESTACADO",
    "isTop5": true,
    "salesRank": 2,
    "page": 29,
    "variant": "Victoria's Secret Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 29.",
    "retail": {
      "efectivo": 37000,
      "transferencia": 32000,
      "cuotas6": 42550
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 18.3,
        "priceArs": 28860
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 16.8,
        "priceArs": 26551
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 15.7,
        "priceArs": 24820
      }
    ]
  },
  {
    "id": "body-splash-victorias-secret-body-splash-amber-romance",
    "name": "BODY SPLASH AMBER ROMANCE",
    "brand": "Victoria's Secret",
    "categoryId": "body-splash",
    "categoryLabel": "Victoria's Secret & Splash",
    "image": "https://i.imgur.com/z7IXARz.png",
    "badge": "DESTACADO",
    "isTop5": true,
    "salesRank": 3,
    "page": 29,
    "variant": "Victoria's Secret Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 29.",
    "retail": {
      "efectivo": 37000,
      "transferencia": 32000,
      "cuotas6": 42550
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 18.5,
        "priceArs": 29250
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 16.5,
        "priceArs": 26100
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 15.5,
        "priceArs": 24500
      }
    ]
  },
  {
    "id": "body-splash-victorias-secret-body-splash-love-spell-daydream",
    "name": "BODY SPLASH LOVE SPELL DAYDREAM",
    "brand": "Victoria's Secret",
    "categoryId": "body-splash",
    "categoryLabel": "Victoria's Secret & Splash",
    "image": "https://fimgs.net/mdimg/perfume-thumbs/dark-375x500.96485.webp",
    "badge": "DESTACADO",
    "isTop5": true,
    "salesRank": 4,
    "page": 29,
    "variant": "Victoria's Secret Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 29.",
    "retail": {
      "efectivo": 37000,
      "transferencia": 32000,
      "cuotas6": 42550
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 18.3,
        "priceArs": 28860
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 16.8,
        "priceArs": 26551
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 15.7,
        "priceArs": 24820
      }
    ]
  },
  {
    "id": "body-splash-victorias-secret-body-splash-love-spell-starlit",
    "name": "BODY SPLASH LOVE SPELL STARLIT",
    "brand": "Victoria's Secret",
    "categoryId": "body-splash",
    "categoryLabel": "Victoria's Secret & Splash",
    "image": "https://fimgs.net/mdimg/perfume-thumbs/dark-375x500.100408.webp",
    "badge": "DESTACADO",
    "isTop5": true,
    "salesRank": 5,
    "page": 29,
    "variant": "Victoria's Secret Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 29.",
    "retail": {
      "efectivo": 37000,
      "transferencia": 32000,
      "cuotas6": 42550
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 18.3,
        "priceArs": 28860
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 16.8,
        "priceArs": 26551
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 15.7,
        "priceArs": 24820
      }
    ]
  },
  {
    "id": "body-splash-victorias-secret-body-splash-love-spell",
    "name": "BODY SPLASH LOVE SPELL",
    "brand": "Victoria's Secret",
    "categoryId": "body-splash",
    "categoryLabel": "Victoria's Secret & Splash",
    "image": "https://dcdn-us.mitiendanube.com/stores/005/675/308/products/love-spell-47e78872eae633b8c017766879133400-480-0.webp",
    "isTop5": false,
    "page": 29,
    "variant": "Victoria's Secret Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 29.",
    "retail": {
      "efectivo": 37000,
      "transferencia": 32000,
      "cuotas6": 42550
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 18.5,
        "priceArs": 29250
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 16.5,
        "priceArs": 26100
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 15.5,
        "priceArs": 24500
      }
    ]
  },
  {
    "id": "body-splash-victorias-secret-body-splash-pure-seduction",
    "name": "BODY SPLASH PURE SEDUCTION",
    "brand": "Victoria's Secret",
    "categoryId": "body-splash",
    "categoryLabel": "Victoria's Secret & Splash",
    "image": "https://dcdn-us.mitiendanube.com/stores/005/675/308/products/pure-seduction-d2b3149f6a20c7569f17766878997838-480-0.webp",
    "isTop5": false,
    "page": 29,
    "variant": "Victoria's Secret Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 29.",
    "retail": {
      "efectivo": 37000,
      "transferencia": 32000,
      "cuotas6": 42550
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 18.5,
        "priceArs": 29250
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 16.5,
        "priceArs": 26100
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 15.5,
        "priceArs": 24500
      }
    ]
  },
  {
    "id": "body-splash-victorias-secret-body-splash-pure-seduction-daydream",
    "name": "BODY SPLASH PURE SEDUCTION DAYDREAM",
    "brand": "Victoria's Secret",
    "categoryId": "body-splash",
    "categoryLabel": "Victoria's Secret & Splash",
    "image": "https://fimgs.net/mdimg/perfume-thumbs/dark-375x500.96484.webp",
    "isTop5": false,
    "page": 29,
    "variant": "Victoria's Secret Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 29.",
    "retail": {
      "efectivo": 37000,
      "transferencia": 32000,
      "cuotas6": 42550
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 18.3,
        "priceArs": 28860
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 16.8,
        "priceArs": 26551
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 15.7,
        "priceArs": 24820
      }
    ]
  },
  {
    "id": "body-splash-victorias-secret-body-splash-pure-seduction-starlit",
    "name": "BODY SPLASH PURE SEDUCTION STARLIT",
    "brand": "Victoria's Secret",
    "categoryId": "body-splash",
    "categoryLabel": "Victoria's Secret & Splash",
    "image": "https://i.imgur.com/Mh5T2uN.png",
    "isTop5": false,
    "page": 29,
    "variant": "Victoria's Secret Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 29.",
    "retail": {
      "efectivo": 37000,
      "transferencia": 32000,
      "cuotas6": 42550
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 18.3,
        "priceArs": 28860
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 16.8,
        "priceArs": 26551
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 15.7,
        "priceArs": 24820
      }
    ]
  },
  {
    "id": "body-splash-victorias-secret-body-splash-velvet-petals-starlit",
    "name": "BODY SPLASH VELVET PETALS STARLIT",
    "brand": "Victoria's Secret",
    "categoryId": "body-splash",
    "categoryLabel": "Victoria's Secret & Splash",
    "image": "https://fimgs.net/mdimg/perfume-thumbs/dark-375x500.100406.webp",
    "isTop5": false,
    "page": 30,
    "variant": "Victoria's Secret Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 30.",
    "retail": {
      "efectivo": 37000,
      "transferencia": 32000,
      "cuotas6": 42550
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 18.3,
        "priceArs": 28860
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 16.8,
        "priceArs": 26551
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 15.7,
        "priceArs": 24820
      }
    ]
  },
  {
    "id": "body-splash-carolina-herrera-body-splash-rich-caramel-vanilla",
    "name": "BODY SPLASH RICH CARAMEL VANILLA",
    "brand": "Carolina Herrera",
    "categoryId": "body-splash",
    "categoryLabel": "Victoria's Secret & Splash",
    "image": "https://fimgs.net/mdimg/perfume-thumbs/dark-375x500.100400.webp",
    "isTop5": false,
    "page": 30,
    "variant": "Carolina Herrera Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 30.",
    "retail": {
      "efectivo": 37000,
      "transferencia": 32000,
      "cuotas6": 42550
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 18.3,
        "priceArs": 28860
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 16.8,
        "priceArs": 26551
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 15.7,
        "priceArs": 24820
      }
    ]
  },
  {
    "id": "body-splash-victorias-secret-body-splash-velvet-petals-daydream",
    "name": "BODY SPLASH VELVET PETALS DAYDREAM",
    "brand": "Victoria's Secret",
    "categoryId": "body-splash",
    "categoryLabel": "Victoria's Secret & Splash",
    "image": "https://fimgs.net/mdimg/perfume-thumbs/dark-375x500.96486.webp",
    "isTop5": false,
    "page": 30,
    "variant": "Victoria's Secret Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 30.",
    "retail": {
      "efectivo": 37000,
      "transferencia": 32000,
      "cuotas6": 42550
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 18.3,
        "priceArs": 28860
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 16.8,
        "priceArs": 26551
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 15.7,
        "priceArs": 24820
      }
    ]
  },
  {
    "id": "body-splash-victorias-secret-body-splash-velvet-petals",
    "name": "BODY SPLASH VELVET PETALS",
    "brand": "Victoria's Secret",
    "categoryId": "body-splash",
    "categoryLabel": "Victoria's Secret & Splash",
    "image": "https://fimgs.net/mdimg/perfume-thumbs/dark-375x500.96486.webp",
    "isTop5": false,
    "page": 30,
    "variant": "Victoria's Secret Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 30.",
    "retail": {
      "efectivo": 37000,
      "transferencia": 32000,
      "cuotas6": 42550
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 18.5,
        "priceArs": 29250
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 16.5,
        "priceArs": 26100
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 15.5,
        "priceArs": 24500
      }
    ]
  },
  {
    "id": "body-splash-gianitech-import-crema-corporal",
    "name": "CREMA CORPORAL",
    "brand": "Victoria's Secret",
    "categoryId": "body-splash",
    "categoryLabel": "Victoria's Secret & Splash",
    "image": "https://cdn.batitienda.com/baticloud/images/product_picture_b20967d2ff1c4b798e3c31f5fa4374fb_639112334524422200_0_m.webp",
    "isTop5": false,
    "page": 30,
    "variant": "Gianitech Import Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 30.",
    "retail": {
      "efectivo": 37000,
      "transferencia": 32000,
      "cuotas6": 42550
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 19,
        "priceArs": 28500
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 17.5,
        "priceArs": 26250
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 16,
        "priceArs": 24000
      }
    ]
  },
  {
    "id": "body-splash-victorias-secret-body-splash-shimmer",
    "name": "BODY SPLASH SHIMMER",
    "brand": "Victoria's Secret",
    "categoryId": "body-splash",
    "categoryLabel": "Victoria's Secret & Splash",
    "image": "https://fimgs.net/mdimg/perfume-thumbs/dark-375x500.89588.webp",
    "isTop5": false,
    "page": 30,
    "variant": "Victoria's Secret Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 30.",
    "retail": {
      "efectivo": 37000,
      "transferencia": 32000,
      "cuotas6": 42550
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 18.3,
        "priceArs": 28860
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 16.8,
        "priceArs": 26551
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 15.7,
        "priceArs": 24820
      }
    ]
  },
  {
    "id": "capilar-karseell-kit-de-viaje-karseell",
    "name": "KIT DE VIAJE KARSEELL",
    "brand": "Karseell",
    "categoryId": "capilar",
    "categoryLabel": "Línea Capilar Karseell",
    "image": "https://i.imgur.com/rYV3r4x.png",
    "badge": "MÁS VENDIDO",
    "isTop5": true,
    "salesRank": 1,
    "page": 32,
    "variant": "Karseell Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 32.",
    "retail": {
      "efectivo": 30000,
      "transferencia": 25000,
      "cuotas6": 34500
    },
    "wholesale": [
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 17.5,
        "priceArs": 26600
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 14.5,
        "priceArs": 22050
      }
    ]
  },
  {
    "id": "capilar-gianitech-import-combo-crema-y-aceite",
    "name": "COMBO CREMA Y ACEITE",
    "brand": "Karseell",
    "categoryId": "capilar",
    "categoryLabel": "Línea Capilar Karseell",
    "image": "https://i.imgur.com/Xno4CWv.png",
    "badge": "DESTACADO",
    "isTop5": true,
    "salesRank": 2,
    "page": 32,
    "variant": "Gianitech Import Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 32.",
    "retail": {
      "efectivo": 35000,
      "transferencia": 30000,
      "cuotas6": 40250
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 18.5,
        "priceArs": 27750
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 16.5,
        "priceArs": 24750
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 15,
        "priceArs": 23250
      }
    ]
  },
  {
    "id": "capilar-karseell-crema-karseell",
    "name": "CREMA KARSEELL",
    "brand": "Karseell",
    "categoryId": "capilar",
    "categoryLabel": "Línea Capilar Karseell",
    "image": "https://cdn.sistemauno.com.ar/productos/8/gWZPiURZP6PPSlPrMUVbsgDUd6KBvLI7FQUGV0NT.png",
    "badge": "DESTACADO",
    "isTop5": true,
    "salesRank": 3,
    "page": 32,
    "variant": "Karseell Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 32.",
    "retail": {
      "efectivo": 25000,
      "transferencia": 20000,
      "cuotas6": 28750
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 11,
        "priceArs": 17400
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 10,
        "priceArs": 15800
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 8.5,
        "priceArs": 13450
      }
    ]
  },
  {
    "id": "tecnologia-jbl-jbl-go-4",
    "name": "JBL GO 4",
    "brand": "JBL",
    "categoryId": "tecnologia",
    "categoryLabel": "Tecnología",
    "image": "https://acdn-us.mitiendanube.com/stores/005/311/762/products/1000254372-59d737cf8fe5b2e5bd17313268272968-640-0.webp",
    "badge": "MÁS VENDIDO",
    "isTop5": true,
    "salesRank": 4,
    "page": 34,
    "variant": "JBL Original Sellado",
    "description": "Parlante Bluetooth original JBL GO 4 ultra portátil con sonido JBL Pro Sound de alta nitidez, protección IP67 a prueba de agua y polvo, batería de hasta 7 hs. Pág. 34.",
    "retail": {
      "efectivo": 90000,
      "transferencia": 85000,
      "cuotas6": 103500
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 50.5,
        "priceArs": 79800
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 47.5,
        "priceArs": 75050
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 44,
        "priceArs": 69550
      }
    ]
  },
  {
    "id": "tecnologia-jbl-jbl-flip-7",
    "name": "JBL Flip 7",
    "brand": "JBL",
    "categoryId": "tecnologia",
    "categoryLabel": "Tecnología",
    "image": "https://media.hifi.lu/sys-master/products/9496416223262/2160x2160.33005325_01.webp",
    "badge": "DESTACADO",
    "isTop5": false,
    "page": 34,
    "variant": "JBL Original Sellado",
    "description": "Parlante Bluetooth original JBL Flip 7 con drivers optimizados para graves profundos, certificación sumergible IP67 y sonido dinámico estéreo. Pág. 34.",
    "retail": {
      "efectivo": 200000,
      "transferencia": 190000,
      "cuotas6": 230000
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 115,
        "priceArs": 181700
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 105,
        "priceArs": 165900
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 98,
        "priceArs": 154840
      }
    ]
  },
  {
    "id": "tecnologia-jbl-jbl-bombox",
    "name": "JBL BOMBOX",
    "brand": "JBL",
    "categoryId": "tecnologia",
    "categoryLabel": "Tecnología",
    "image": "https://www.jbl.com.ar/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw2bc1135d/JBL_BOOMBOX3_WIFI_HERO_37919_x4.png?sw=535&sh=535",
    "badge": "DESTACADO",
    "isTop5": true,
    "page": 34,
    "variant": "JBL Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 34.",
    "retail": {
      "efectivo": 630000,
      "transferencia": 6,
      "cuotas6": 724500
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 311,
        "priceArs": 491400
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 286.1,
        "priceArs": 452088
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 267.5,
        "priceArs": 422604
      }
    ],
    "salesRank": 5
  },
  {
    "id": "tecnologia-sony-ps5-digital",
    "name": "PS5 DIGITAL",
    "brand": "Sony",
    "categoryId": "tecnologia",
    "categoryLabel": "Tecnología",
    "image": "https://tienda.personal.com.ar/images/720/webp/Consola_Play_Station_5_Digital_565dcdfca9.png",
    "badge": "DESTACADO",
    "isTop5": false,
    "page": 34,
    "variant": "Sony Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 34.",
    "retail": {
      "efectivo": 1100000,
      "transferencia": 1250000,
      "cuotas6": 1265000
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 543,
        "priceArs": 858000
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 499.6,
        "priceArs": 789360
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 467,
        "priceArs": 737880
      }
    ]
  },
  {
    "id": "tecnologia-gianitech-import-tv-box",
    "name": "TV BOX",
    "brand": "Gianitech Import",
    "categoryId": "tecnologia",
    "categoryLabel": "Tecnología",
    "image": "/src/assets/images/product_tv_box_4k.png",
    "badge": "DESTACADO",
    "isTop5": false,
    "page": 34,
    "variant": "Gianitech Import Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 34.",
    "retail": {
      "efectivo": 40000,
      "transferencia": 35000,
      "cuotas6": 46000
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 18,
        "priceArs": 27000
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 16.5,
        "priceArs": 24750
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 15,
        "priceArs": 22500
      }
    ]
  },
  {
    "id": "tecnologia-sony-joystick-ps5",
    "name": "JOYSTICK PS5",
    "brand": "Sony",
    "categoryId": "tecnologia",
    "categoryLabel": "Tecnología",
    "image": "https://enviocompras.com.ar/wp-content/uploads/2025/10/cropped-dualsense.webp",
    "badge": "DESTACADO",
    "isTop5": false,
    "page": 34,
    "variant": "Sony Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 34.",
    "retail": {
      "efectivo": 135000,
      "transferencia": 145000,
      "cuotas6": 155250
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 85.5,
        "priceArs": 135100
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 74.5,
        "priceArs": 117750
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 70.5,
        "priceArs": 111400
      }
    ]
  },
  {
    "id": "tecnologia-sony-joystick-ps4",
    "name": "Joystick ps4",
    "brand": "Sony",
    "categoryId": "tecnologia",
    "categoryLabel": "Tecnología",
    "image": "https://enviocompras.com.ar/wp-content/uploads/2025/10/cropped-dualsense.webp",
    "isTop5": false,
    "page": 35,
    "variant": "Sony Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 35.",
    "retail": {
      "efectivo": 35000,
      "transferencia": 30000,
      "cuotas6": 40250
    },
    "wholesale": [
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 16,
        "priceArs": 25300
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 14.5,
        "priceArs": 22950
      }
    ]
  },
  {
    "id": "tecnologia-jbl-go-4-replica",
    "name": "JBL GO 4 REPLICA",
    "brand": "JBL",
    "categoryId": "tecnologia",
    "categoryLabel": "Tecnología",
    "image": "https://acdn-us.mitiendanube.com/stores/005/311/762/products/1000254372-59d737cf8fe5b2e5bd17313268272968-640-0.webp",
    "badge": "DESTACADO",
    "isTop5": false,
    "page": 35,
    "variant": "Réplica 1:1 Premium",
    "description": "Réplica calidad premium 1:1 JBL GO 4 con conectividad Bluetooth, sonido nítido y batería recargable. Pág. 35.",
    "retail": {
      "efectivo": 40000,
      "transferencia": 35000,
      "cuotas6": 46000
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 22,
        "priceArs": 34800
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 20,
        "priceArs": 31600
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 18.5,
        "priceArs": 29250
      }
    ]
  },
  {
    "id": "tecnologia-jbl-flip-7-replica",
    "name": "JBL FLIP 7 REPLICA",
    "brand": "JBL",
    "categoryId": "tecnologia",
    "categoryLabel": "Tecnología",
    "image": "https://media.hifi.lu/sys-master/products/9496416223262/2160x2160.33005325_01.webp",
    "badge": "DESTACADO",
    "isTop5": false,
    "page": 35,
    "variant": "Réplica 1:1 Premium",
    "description": "Réplica calidad premium 1:1 JBL Flip 7 con graves profundos, conexión inalámbrica y acabado resistente. Pág. 35.",
    "retail": {
      "efectivo": 50000,
      "transferencia": 45000,
      "cuotas6": 57500
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 30,
        "priceArs": 47400
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 27,
        "priceArs": 42700
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 25,
        "priceArs": 39500
      }
    ]
  },
  {
    "id": "tecnologia-gianitech-import-importado-especial-vip-4-pg-35",
    "name": "Importado Especial VIP #4 (Pág. 35)",
    "brand": "Gianitech Import",
    "categoryId": "tecnologia",
    "categoryLabel": "Tecnología",
    "image": "/src/assets/images/hero_iphone_new.webp",
    "isTop5": false,
    "page": 35,
    "variant": "Gianitech Import Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 35.",
    "retail": {
      "efectivo": 8500,
      "transferencia": 9500,
      "cuotas6": 9775
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 4.2,
        "priceArs": 6630
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 3.9,
        "priceArs": 6100
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 3.6,
        "priceArs": 5702
      }
    ]
  },
  {
    "id": "tecnologia-apple-airpods-max-replica",
    "name": "AIRPODS MAX REPLICA",
    "brand": "Apple",
    "categoryId": "tecnologia",
    "categoryLabel": "Tecnología",
    "image": "/src/assets/images/product_apple_airpods_1792106436167.jpg",
    "isTop5": false,
    "page": 36,
    "variant": "Apple Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 36.",
    "retail": {
      "efectivo": 30000,
      "transferencia": 28500,
      "cuotas6": 34500
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 14.8,
        "priceArs": 23400
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 13.6,
        "priceArs": 21528
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 12.7,
        "priceArs": 20124
      }
    ]
  },
  {
    "id": "tecnologia-gianitech-import-pistola-hidrogel",
    "name": "PISTOLA HIDROGEL",
    "brand": "Gianitech Import",
    "categoryId": "tecnologia",
    "categoryLabel": "Tecnología",
    "image": "/src/assets/images/hero_iphone_new.webp",
    "isTop5": false,
    "page": 36,
    "variant": "Gianitech Import Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 36.",
    "retail": {
      "efectivo": 24000,
      "transferencia": 22800,
      "cuotas6": 27600
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 11.8,
        "priceArs": 18720
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 10.9,
        "priceArs": 17222
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 10.1,
        "priceArs": 16099
      }
    ]
  },
  {
    "id": "tecnologia-gianitech-import-proyector",
    "name": "PROYECTOR",
    "brand": "Gianitech Import",
    "categoryId": "tecnologia",
    "categoryLabel": "Tecnología",
    "image": "/src/assets/images/hero_iphone_new.webp",
    "isTop5": false,
    "page": 36,
    "variant": "Gianitech Import Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 36.",
    "retail": {
      "efectivo": 67500,
      "transferencia": 64000,
      "cuotas6": 77625
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 33.3,
        "priceArs": 52650
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 30.6,
        "priceArs": 48438
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 28.6,
        "priceArs": 45279
      }
    ]
  },
  {
    "id": "tecnologia-gianitech-import-elfbar-40k",
    "name": "ELFBAR 40K",
    "brand": "Gianitech Import",
    "categoryId": "tecnologia",
    "categoryLabel": "Tecnología",
    "image": "/src/assets/images/hero_iphone_new.webp",
    "isTop5": false,
    "page": 36,
    "variant": "Gianitech Import Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 36.",
    "retail": {
      "efectivo": 26000,
      "transferencia": 26000,
      "cuotas6": 29900
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 12.8,
        "priceArs": 20280
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 11.8,
        "priceArs": 18658
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 11,
        "priceArs": 17441
      }
    ]
  },
  {
    "id": "tecnologia-carolina-herrera-blach-sheep-30k",
    "name": "BLACH SHEEP 30K",
    "brand": "Carolina Herrera",
    "categoryId": "tecnologia",
    "categoryLabel": "Tecnología",
    "image": "/src/assets/images/hero_iphone_new.webp",
    "isTop5": false,
    "page": 36,
    "variant": "Carolina Herrera Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 36.",
    "retail": {
      "efectivo": 27000,
      "transferencia": 27000,
      "cuotas6": 31050
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 13.3,
        "priceArs": 21060
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 12.2,
        "priceArs": 19375
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 11.4,
        "priceArs": 18112
      }
    ]
  },
  {
    "id": "tecnologia-gianitech-import-combo-cargador",
    "name": "COMBO CARGADOR",
    "brand": "Gianitech Import",
    "categoryId": "tecnologia",
    "categoryLabel": "Tecnología",
    "image": "/src/assets/images/product_apple_chargers_1792106436011.jpg",
    "isTop5": false,
    "page": 37,
    "variant": "Gianitech Import Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 37.",
    "retail": {
      "efectivo": 9000,
      "transferencia": 10000,
      "cuotas6": 10350
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 5,
        "priceArs": 7900
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 4.5,
        "priceArs": 7150
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 4,
        "priceArs": 6350
      }
    ]
  },
  {
    "id": "tecnologia-apple-cable-iphone",
    "name": "CABLE IPHONE",
    "brand": "Apple",
    "categoryId": "tecnologia",
    "categoryLabel": "Tecnología",
    "image": "/src/assets/images/product_apple_chargers_1792106436011.jpg",
    "isTop5": false,
    "page": 37,
    "variant": "Apple Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 37.",
    "retail": {
      "efectivo": 8000,
      "transferencia": 5000,
      "cuotas6": 9200
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 3.9,
        "priceArs": 6240
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 3.6,
        "priceArs": 5741
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 3.4,
        "priceArs": 5366
      }
    ]
  },
  {
    "id": "tecnologia-gianitech-import-base-cargador",
    "name": "BASE CARGADOR",
    "brand": "Gianitech Import",
    "categoryId": "tecnologia",
    "categoryLabel": "Tecnología",
    "image": "/src/assets/images/product_apple_chargers_1792106436011.jpg",
    "isTop5": false,
    "page": 37,
    "variant": "Gianitech Import Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 37.",
    "retail": {
      "efectivo": 8000,
      "transferencia": 5000,
      "cuotas6": 9200
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 3,
        "priceArs": 4750
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 3,
        "priceArs": 4750
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 2.5,
        "priceArs": 3950
      }
    ]
  },
  {
    "id": "tecnologia-apple-battery-pack-iphone",
    "name": "BATTERY PACK IPHONE",
    "brand": "Apple",
    "categoryId": "tecnologia",
    "categoryLabel": "Tecnología",
    "image": "/src/assets/images/hero_iphone_new.webp",
    "isTop5": false,
    "page": 37,
    "variant": "Apple Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 37.",
    "retail": {
      "efectivo": 20000,
      "transferencia": 25000,
      "cuotas6": 23000
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 8,
        "priceArs": 12650
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 7.5,
        "priceArs": 11850
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 7,
        "priceArs": 11100
      }
    ]
  },
  {
    "id": "tecnologia-gianitech-import-cargador-portatil",
    "name": "CARGADOR PORTATIL",
    "brand": "Gianitech Import",
    "categoryId": "tecnologia",
    "categoryLabel": "Tecnología",
    "image": "/src/assets/images/product_apple_chargers_1792106436011.jpg",
    "isTop5": false,
    "page": 37,
    "variant": "Gianitech Import Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 37.",
    "retail": {
      "efectivo": 25000,
      "transferencia": 20000,
      "cuotas6": 28750
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 12.3,
        "priceArs": 19500
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 11.3,
        "priceArs": 17940
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 10.6,
        "priceArs": 16770
      }
    ]
  },
  {
    "id": "tecnologia-gianitech-import-importado-especial-vip-5-pg-38",
    "name": "Importado Especial VIP #5 (Pág. 38)",
    "brand": "Gianitech Import",
    "categoryId": "tecnologia",
    "categoryLabel": "Tecnología",
    "image": "/src/assets/images/hero_iphone_new.webp",
    "isTop5": false,
    "page": 38,
    "variant": "Gianitech Import Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 38.",
    "retail": {
      "efectivo": 260000,
      "transferencia": 250000,
      "cuotas6": 299000
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 128.4,
        "priceArs": 202800
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 118.1,
        "priceArs": 186576
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 110.4,
        "priceArs": 174408
      }
    ]
  },
  {
    "id": "tecnologia-samsung-samsung-a07",
    "name": "SAMSUNG A07",
    "brand": "Samsung",
    "categoryId": "tecnologia",
    "categoryLabel": "Tecnología",
    "image": "/src/assets/images/product_samsung_galaxy_1792105263682.jpg",
    "isTop5": false,
    "page": 38,
    "variant": "Samsung Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 38.",
    "retail": {
      "efectivo": 220000,
      "transferencia": 235000,
      "cuotas6": 253000
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 108.6,
        "priceArs": 171600
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 99.9,
        "priceArs": 157872
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 93.4,
        "priceArs": 147576
      }
    ]
  },
  {
    "id": "tecnologia-samsung-samsung-a06-464",
    "name": "SAMSUNG A06 4/64",
    "brand": "Samsung",
    "categoryId": "tecnologia",
    "categoryLabel": "Tecnología",
    "image": "/src/assets/images/product_samsung_galaxy_1792105263682.jpg",
    "isTop5": false,
    "page": 38,
    "variant": "Samsung Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 38.",
    "retail": {
      "efectivo": 200000,
      "transferencia": 220000,
      "cuotas6": 230000
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 98.7,
        "priceArs": 156000
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 90.8,
        "priceArs": 143520
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 84.9,
        "priceArs": 134160
      }
    ]
  },
  {
    "id": "tecnologia-gianitech-import-importado-especial-vip-6-pg-38",
    "name": "Importado Especial VIP #6 (Pág. 38)",
    "brand": "Gianitech Import",
    "categoryId": "tecnologia",
    "categoryLabel": "Tecnología",
    "image": "/src/assets/images/hero_iphone_new.webp",
    "isTop5": false,
    "page": 38,
    "variant": "Gianitech Import Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 38.",
    "retail": {
      "efectivo": 250000,
      "transferencia": 240000,
      "cuotas6": 287500
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 123.4,
        "priceArs": 195000
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 113.5,
        "priceArs": 179400
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 106.1,
        "priceArs": 167700
      }
    ]
  },
  {
    "id": "tecnologia-samsung-samsung-a36-256gb",
    "name": "SAMSUNG A36 256GB",
    "brand": "Samsung",
    "categoryId": "tecnologia",
    "categoryLabel": "Tecnología",
    "image": "/src/assets/images/product_samsung_galaxy_1792105263682.jpg",
    "isTop5": false,
    "page": 38,
    "variant": "Samsung Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 38.",
    "retail": {
      "efectivo": 550000,
      "transferencia": 540000,
      "cuotas6": 632500
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 271.5,
        "priceArs": 429000
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 249.8,
        "priceArs": 394680
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 233.5,
        "priceArs": 368940
      }
    ]
  },
  {
    "id": "tecnologia-gianitech-import-importado-especial-vip-7-pg-38",
    "name": "Importado Especial VIP #7 (Pág. 38)",
    "brand": "Gianitech Import",
    "categoryId": "tecnologia",
    "categoryLabel": "Tecnología",
    "image": "/src/assets/images/hero_iphone_new.webp",
    "isTop5": false,
    "page": 38,
    "variant": "Gianitech Import Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 38.",
    "retail": {
      "efectivo": 520000,
      "transferencia": 530000,
      "cuotas6": 598000
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 256.7,
        "priceArs": 405600
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 236.2,
        "priceArs": 373152
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 220.8,
        "priceArs": 348816
      }
    ]
  },
  {
    "id": "tecnologia-motorola-motorola-g06",
    "name": "MOTOROLA G06",
    "brand": "Motorola",
    "categoryId": "tecnologia",
    "categoryLabel": "Tecnología",
    "image": "/src/assets/images/product_samsung_galaxy_1792105263682.jpg",
    "isTop5": false,
    "page": 38,
    "variant": "Motorola Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 38.",
    "retail": {
      "efectivo": 220000,
      "transferencia": 230000,
      "cuotas6": 253000
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 108.6,
        "priceArs": 171600
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 99.9,
        "priceArs": 157872
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 93.4,
        "priceArs": 147576
      }
    ]
  },
  {
    "id": "stanley-original-stanley-termo-mate-system",
    "name": "TERMO MATE SYSTEM",
    "brand": "Stanley",
    "categoryId": "stanley-original",
    "categoryLabel": "Stanley Original",
    "image": "https://stanley1913.ar/cdn/shop/files/MateSystem_1.2Hgreen.png?v=1781204164&width=1946",
    "badge": "MÁS VENDIDO",
    "isTop5": true,
    "salesRank": 1,
    "page": 40,
    "variant": "Stanley Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 40.",
    "retail": {
      "efectivo": 155000,
      "transferencia": 165000,
      "cuotas6": 178250
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 76.5,
        "priceArs": 120900
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 70.4,
        "priceArs": 111228
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 65.8,
        "priceArs": 103974
      }
    ]
  },
  {
    "id": "stanley-original-stanley-vaso-quencher-stanley",
    "name": "VASO QUENCHER STANLEY",
    "brand": "Stanley",
    "categoryId": "stanley-original",
    "categoryLabel": "Stanley Original",
    "image": "https://acdn-us.mitiendanube.com/stores/005/884/567/products/ecomerce_quencherprotour40ozcoffe1-8be99da51d5bb0cabd17842419739928-480-0.webp",
    "badge": "DESTACADO",
    "isTop5": true,
    "salesRank": 2,
    "page": 40,
    "variant": "Stanley Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 40.",
    "retail": {
      "efectivo": 199000,
      "transferencia": 210000,
      "cuotas6": 228850
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 10,
        "priceArs": 15800
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 8.5,
        "priceArs": 13450
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 8,
        "priceArs": 12650
      }
    ]
  },
  {
    "id": "stanley-original-stanley-termo-940ml",
    "name": "TERMO 940ML",
    "brand": "Stanley",
    "categoryId": "stanley-original",
    "categoryLabel": "Stanley Original",
    "image": "https://acdn-us.mitiendanube.com/stores/001/050/261/products/termo-stanley-classic-negro-950-ml-2-f760a50b1f1334c8ec17101928353111-480-0.webp",
    "badge": "DESTACADO",
    "isTop5": true,
    "salesRank": 3,
    "page": 40,
    "variant": "Stanley Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 40.",
    "retail": {
      "efectivo": 150000,
      "transferencia": 165000,
      "cuotas6": 172500
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 94,
        "priceArs": 148550
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 84.5,
        "priceArs": 133550
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 78.5,
        "priceArs": 124050
      }
    ]
  },
  {
    "id": "stanley-original-stanley-vaso-flip-stanley",
    "name": "VASO FLIP STANLEY",
    "brand": "Stanley",
    "categoryId": "stanley-original",
    "categoryLabel": "Stanley Original",
    "image": "/src/assets/images/product_stanley_iceflow_1792106129794.jpg",
    "badge": "DESTACADO",
    "isTop5": true,
    "salesRank": 4,
    "page": 40,
    "variant": "Stanley Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 40.",
    "retail": {
      "efectivo": 110000,
      "transferencia": 120000,
      "cuotas6": 126500
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 68,
        "priceArs": 107450
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 61,
        "priceArs": 96400
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 56.5,
        "priceArs": 89300
      }
    ]
  },
  {
    "id": "stanley-original-stanley-botella-stanley",
    "name": "BOTELLA STANLEY",
    "brand": "Stanley",
    "categoryId": "stanley-original",
    "categoryLabel": "Stanley Original",
    "image": "/src/assets/images/product_stanley_iceflow_1792106129794.jpg",
    "badge": "DESTACADO",
    "isTop5": true,
    "salesRank": 5,
    "page": 40,
    "variant": "Stanley Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 40.",
    "retail": {
      "efectivo": 110000,
      "transferencia": 120000,
      "cuotas6": 126500
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 68,
        "priceArs": 107450
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 61,
        "priceArs": 96400
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 56.5,
        "priceArs": 89300
      }
    ]
  },
  {
    "id": "stanley-original-stanley-botella-shimmer",
    "name": "BOTELLA SHIMMER",
    "brand": "Stanley",
    "categoryId": "stanley-original",
    "categoryLabel": "Stanley Original",
    "image": "/src/assets/images/product_stanley_iceflow_1792106129794.jpg",
    "isTop5": false,
    "page": 40,
    "variant": "Stanley Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 40.",
    "retail": {
      "efectivo": 120000,
      "transferencia": 130000,
      "cuotas6": 138000
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 76,
        "priceArs": 120100
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 68.5,
        "priceArs": 108250
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 63,
        "priceArs": 99550
      }
    ]
  },
  {
    "id": "stanley-original-stanley-termo-800ml",
    "name": "TERMO 800ML",
    "brand": "Stanley",
    "categoryId": "stanley-original",
    "categoryLabel": "Stanley Original",
    "image": "https://d22fxaf9t8d39k.cloudfront.net/76da8c9ec321ed4a32e32515163f64ad291f8f8215740bb7cbae0f3686887ddc40982.webp",
    "badge": "DESTACADO",
    "isTop5": false,
    "page": 40,
    "variant": "Stanley Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Termo Stanley 800ml térmico. Pág. 40.",
    "wholesaleOnly": true,
    "retail": {
      "efectivo": 153300,
      "transferencia": 165000,
      "cuotas6": 176295
    },
    "wholesale": [
      {
        "units": 1,
        "label": "1u",
        "priceUsd": 97,
        "priceArs": 153300
      },
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 87.5,
        "priceArs": 138250
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 81,
        "priceArs": 128000
      }
    ]
  },
  {
    "id": "bazar-segundas-bazar-premium-kit-completo",
    "name": "KIT COMPLETO",
    "brand": "Bazar Premium",
    "categoryId": "bazar-segundas",
    "categoryLabel": "Bazar Segundas Marcas",
    "image": "/src/assets/images/product_combo_matero_1792105239385.jpg",
    "badge": "MÁS VENDIDO",
    "isTop5": true,
    "salesRank": 1,
    "page": 42,
    "variant": "Bazar Premium Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 42.",
    "retail": {
      "efectivo": 34500,
      "transferencia": 32000,
      "cuotas6": 39675
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 25.5,
        "priceArs": 40300
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 21.5,
        "priceArs": 34000
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 20,
        "priceArs": 31600
      }
    ]
  },
  {
    "id": "bazar-segundas-stanley-vaso-quencher-stanley",
    "name": "VASO QUENCHER STANLEY",
    "brand": "Stanley",
    "categoryId": "bazar-segundas",
    "categoryLabel": "Bazar Segundas Marcas",
    "image": "/src/assets/images/product_stanley_tumbler_1792102623116.jpg",
    "badge": "DESTACADO",
    "isTop5": true,
    "salesRank": 2,
    "page": 42,
    "variant": "Stanley Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 42.",
    "retail": {
      "efectivo": 15000,
      "transferencia": 18000,
      "cuotas6": 17250
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 10,
        "priceArs": 15800
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 8.5,
        "priceArs": 13450
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 8,
        "priceArs": 12650
      }
    ]
  },
  {
    "id": "bazar-segundas-bazar-premium-importado-especial-vip-8-pg-42",
    "name": "Importado Especial VIP #8 (Pág. 42)",
    "brand": "Bazar Premium",
    "categoryId": "bazar-segundas",
    "categoryLabel": "Bazar Segundas Marcas",
    "image": "/src/assets/images/product_combo_matero_1792105239385.jpg",
    "badge": "DESTACADO",
    "isTop5": true,
    "salesRank": 3,
    "page": 42,
    "variant": "Bazar Premium Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 42.",
    "retail": {
      "efectivo": 27000,
      "transferencia": 25000,
      "cuotas6": 31050
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 13.3,
        "priceArs": 21060
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 12.2,
        "priceArs": 19375
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 11.4,
        "priceArs": 18112
      }
    ]
  },
  {
    "id": "bazar-segundas-bazar-premium-bolso-imantado",
    "name": "BOLSO IMANTADO",
    "brand": "Bazar Premium",
    "categoryId": "bazar-segundas",
    "categoryLabel": "Bazar Segundas Marcas",
    "image": "/src/assets/images/product_combo_matero_1792105239385.jpg",
    "badge": "DESTACADO",
    "isTop5": true,
    "salesRank": 4,
    "page": 42,
    "variant": "Bazar Premium Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 42.",
    "retail": {
      "efectivo": 15000,
      "transferencia": 20000,
      "cuotas6": 17250
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 7.4,
        "priceArs": 11700
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 6.8,
        "priceArs": 10764
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 6.4,
        "priceArs": 10062
      }
    ]
  },
  {
    "id": "bazar-segundas-bazar-premium-mate-metalico",
    "name": "MATE METALICO",
    "brand": "Bazar Premium",
    "categoryId": "bazar-segundas",
    "categoryLabel": "Bazar Segundas Marcas",
    "image": "/src/assets/images/product_combo_matero_1792105239385.jpg",
    "badge": "DESTACADO",
    "isTop5": true,
    "salesRank": 5,
    "page": 42,
    "variant": "Bazar Premium Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 42.",
    "retail": {
      "efectivo": 9750,
      "transferencia": 8000,
      "cuotas6": 11213
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 7,
        "priceArs": 11100
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 6,
        "priceArs": 9500
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 5.5,
        "priceArs": 8700
      }
    ]
  },
  {
    "id": "bazar-segundas-bazar-premium-termo-y-mate",
    "name": "TERMO Y MATE",
    "brand": "Bazar Premium",
    "categoryId": "bazar-segundas",
    "categoryLabel": "Bazar Segundas Marcas",
    "image": "/src/assets/images/product_combo_matero_1792105239385.jpg",
    "isTop5": false,
    "page": 42,
    "variant": "Bazar Premium Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 42.",
    "retail": {
      "efectivo": 25500,
      "transferencia": 20000,
      "cuotas6": 29325
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 18.5,
        "priceArs": 29250
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 15.5,
        "priceArs": 24500
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 14.5,
        "priceArs": 22950
      }
    ]
  },
  {
    "id": "bazar-segundas-bazar-premium-cafetero-con-medidor",
    "name": "CAFETERO CON MEDIDOR",
    "brand": "Bazar Premium",
    "categoryId": "bazar-segundas",
    "categoryLabel": "Bazar Segundas Marcas",
    "image": "/src/assets/images/product_combo_matero_1792105239385.jpg",
    "isTop5": false,
    "page": 42,
    "variant": "Bazar Premium Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 42.",
    "retail": {
      "efectivo": 15000,
      "transferencia": 20000,
      "cuotas6": 17250
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 7.4,
        "priceArs": 11700
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 6.8,
        "priceArs": 10764
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 6.4,
        "priceArs": 10062
      }
    ]
  },
  {
    "id": "bazar-segundas-bazar-premium-mate-listo",
    "name": "MATE LISTO",
    "brand": "Bazar Premium",
    "categoryId": "bazar-segundas",
    "categoryLabel": "Bazar Segundas Marcas",
    "image": "/src/assets/images/product_mate_autocebante_1792106129917.jpg",
    "isTop5": false,
    "page": 42,
    "variant": "Bazar Premium Oficial",
    "description": "Producto 100% auténtico con garantía y packaging sellado de importación. Pág. 42.",
    "retail": {
      "efectivo": 20000,
      "transferencia": 25000,
      "cuotas6": 23000
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 13,
        "priceArs": 20550
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 11,
        "priceArs": 17400
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 10,
        "priceArs": 15800
      }
    ]
  },
  {
    "id": "karseell-kit-shampoo-crema-aceite",
    "name": "Kit Karseell Trío Shampoo + Crema + Aceite",
    "brand": "Karseell",
    "categoryId": "capilar",
    "categoryLabel": "Línea Capilar Karseell",
    "image": "https://i.imgur.com/TtTHOgK.png",
    "badge": "DESTACADO",
    "isTop5": true,
    "salesRank": 4,
    "page": 32,
    "variant": "Shampoo 500ml + Baño + Aceite",
    "description": "Rutina completa de nutrición profunda con extracto de maca andina y colágeno.",
    "retail": {
      "efectivo": 52000,
      "transferencia": 48000,
      "cuotas6": 58000
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 28,
        "priceArs": 44250
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 24.5,
        "priceArs": 38750
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 23,
        "priceArs": 36350
      }
    ]
  },
  {
    "id": "karseell-aceite-reparador-argan",
    "name": "Aceite de Argán Karseell Puro 50ml",
    "brand": "Karseell",
    "categoryId": "capilar",
    "categoryLabel": "Línea Capilar Karseell",
    "image": "/src/assets/images/product_karseell_hair_1792102621168.jpg",
    "badge": "OFERTA",
    "isTop5": true,
    "salesRank": 5,
    "page": 32,
    "variant": "50ml Concentrado Gotas de Seda",
    "description": "Gotas de seda para puntas abiertas, brillo instantáneo y protección térmica anti-frizz.",
    "retail": {
      "efectivo": 22000,
      "transferencia": 19000,
      "cuotas6": 25000
    },
    "wholesale": [
      {
        "units": 5,
        "label": "5u",
        "priceUsd": 9.5,
        "priceArs": 14800
      },
      {
        "units": 10,
        "label": "10u",
        "priceUsd": 8.5,
        "priceArs": 13200
      },
      {
        "units": 30,
        "label": "30u",
        "priceUsd": 7.8,
        "priceArs": 12100
      }
    ]
  }
];
