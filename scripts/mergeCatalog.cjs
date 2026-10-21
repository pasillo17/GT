const fs = require('fs');
const path = require('path');

const text = fs.readFileSync('public/assets/aistudio/Paste_October_19__2026_-_4_29PM_fda2acf1', 'utf8');
const parts = text.split('CATÁLOGO MAYORISTA — LISTA LIMPIA');
const retailText = parts[0];
const wholesaleText = parts[1] || '';

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

function parseSections(rawText, isWholesale) {
  const pages = rawText.split(/--- PÁGINA\s+(\d+)\s+---/i);
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
        if (currentItem) {
          items.push(currentItem);
        }
        if (line.includes('Transcripción automática') || line.includes('CATÁLOGO MAYORISTA')) {
          currentItem = null;
          continue;
        }
        currentItem = {
          name: line,
          page: currentPage,
          lines: []
        };
      }
    }
    if (currentItem) items.push(currentItem);
  }
  return items;
}

const retailItems = parseSections(retailText, false);
const wholesaleItems = parseSections(wholesaleText, true);

console.log(`Parsed ${retailItems.length} retail items and ${wholesaleItems.length} wholesale items`);

// Category detector based on page and name
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

// Brand detector
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
  if (u.includes('JUNGLE VIBE') || u.includes('RAYHAAN') || u.includes('ITALIA POUR') || u.includes('VALHALLA') || u.includes('OCEAN RUSH') || u.includes('STALION')) return 'Rayhaan';
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
  if (u.includes('PS5') || u.includes('PS4') || u.includes('DUALSENSE') || u.includes('SONY')) return 'Sony';
  if (u.includes('IPHONE') || u.includes('AIRPODS') || u.includes('APPLE')) return 'Apple';
  if (u.includes('SAMSUNG')) return 'Samsung';
  if (u.includes('MOTOROLA')) return 'Motorola';
  if (u.includes('BODY SPLASH') || u.includes('BARE VANILLA') || u.includes('LOVE SPELL') || u.includes('PURE SEDUCTION') || u.includes('VELVET PETALS') || u.includes('AMBER ROMANCE')) return "Victoria's Secret";
  if (page === 40) return 'Stanley';
  if (page >= 41) return 'Bazar Premium';
  return 'Gianitech Import';
}

console.log('Script initialized successfully');
