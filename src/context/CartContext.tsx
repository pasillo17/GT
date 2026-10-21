import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  DualProduct,
  ALL_PRODUCTS,
  SalesChannel,
  GIANITECH_CONTACT,
  formatArs,
  formatUsd,
} from '../data/catalog';

export interface CartItem {
  product: DualProduct;
  quantity: number;
  channel: SalesChannel;
  wholesaleTierUnits?: number; // 5, 10, 30
}

export type CurrencyMode = 'USD' | 'ARS';

interface CartContextType {
  channel: SalesChannel;
  setChannel: (channel: SalesChannel) => void;
  toggleChannel: () => void;
  
  items: CartItem[];
  addToCart: (product: DualProduct, quantity?: number, wholesaleTierUnits?: number) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
  
  totalUnits: number;
  totalPriceArs: number;
  totalPriceUsd: number;
  
  currency: CurrencyMode;
  setCurrency: (currency: CurrencyMode) => void;
  toggleCurrency: () => void;
  
  // Favorites
  favorites: string[];
  toggleFavorite: (productId: string) => void;
  isFavorite: (productId: string) => boolean;
  
  // Modals & UI states
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  isFavoritesOpen: boolean;
  setIsFavoritesOpen: (open: boolean) => void;
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
  isUserModalOpen: boolean;
  setIsUserModalOpen: (open: boolean) => void;
  quickViewProduct: DualProduct | null;
  setQuickViewProduct: (product: DualProduct | null) => void;

  // Checkout
  customerName: string;
  setCustomerName: (name: string) => void;
  customerCity: string;
  setCustomerCity: (city: string) => void;
  customerNotes: string;
  setCustomerNotes: (notes: string) => void;
  sendWhatsAppOrder: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_KEY = 'gt_cart_v4';
const FAVS_KEY = 'gt_favs_v4';
const CHANNEL_KEY = 'gt_channel_v4';

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [channel, setChannelState] = useState<SalesChannel>(() => {
    try {
      const saved = localStorage.getItem(CHANNEL_KEY);
      if (saved === 'minorista' || saved === 'mayorista') return saved;
    } catch {
      // ignore
    }
    return 'mayorista'; // Default or as user chooses
  });

  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(CART_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return parsed.filter((i: CartItem) =>
          ALL_PRODUCTS.some((p) => p.id === i.product.id)
        );
      }
    } catch {
      // ignore
    }
    return [
      { product: ALL_PRODUCTS[0], quantity: 5, channel: 'mayorista', wholesaleTierUnits: 5 }
    ];
  });

  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(FAVS_KEY);
      if (saved) return JSON.parse(saved);
    } catch {
      // ignore
    }
    return ['iphone-17-pro-max', 'afnan-9pm-black', 'stanley-termo-mate-system'];
  });

  const [currency, setCurrency] = useState<CurrencyMode>('ARS');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<DualProduct | null>(null);

  const [customerName, setCustomerName] = useState('');
  const [customerCity, setCustomerCity] = useState('');
  const [customerNotes, setCustomerNotes] = useState('');

  useEffect(() => {
    try {
      localStorage.setItem(CHANNEL_KEY, channel);
    } catch {
      // ignore
    }
  }, [channel]);

  useEffect(() => {
    try {
      localStorage.setItem(CART_KEY, JSON.stringify(items));
    } catch {
      // ignore
    }
  }, [items]);

  useEffect(() => {
    try {
      localStorage.setItem(FAVS_KEY, JSON.stringify(favorites));
    } catch {
      // ignore
    }
  }, [favorites]);

  const setChannel = (newChannel: SalesChannel) => {
    setChannelState(newChannel);
  };

  const toggleChannel = () => {
    setChannelState((prev) => (prev === 'mayorista' ? 'minorista' : 'mayorista'));
  };

  const toggleCurrency = () => {
    setCurrency((prev) => (prev === 'ARS' ? 'USD' : 'ARS'));
  };

  const addToCart = (product: DualProduct, quantity = 1, wholesaleTierUnits?: number) => {
    const minUnits = product.wholesale[0]?.units || 1;
    const initialUnits = wholesaleTierUnits || (channel === 'mayorista' ? minUnits : 1);

    setItems((prev) => {
      const existing = prev.find(
        (i) => i.product.id === product.id && i.channel === channel
      );
      if (existing) {
        return prev.map((i) =>
          i.product.id === product.id && i.channel === channel
            ? { ...i, quantity: i.quantity + quantity }
            : i
        );
      }
      return [
        ...prev,
        {
          product,
          quantity: channel === 'mayorista' ? Math.max(quantity, minUnits) : quantity,
          channel,
          wholesaleTierUnits: channel === 'mayorista' ? initialUnits : undefined,
        },
      ];
    });
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setItems((prev) =>
      prev.map((i) => (i.product.id === productId ? { ...i, quantity } : i))
    );
  };

  const removeFromCart = (productId: string) => {
    setItems((prev) => prev.filter((i) => i.product.id !== productId));
  };

  const clearCart = () => {
    setItems([]);
  };

  const toggleFavorite = (productId: string) => {
    setFavorites((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const isFavorite = (productId: string) => favorites.includes(productId);

  // Price calculations
  const getItemPrice = (item: CartItem) => {
    if (item.channel === 'minorista') {
      const priceArs = item.product.retail.efectivo;
      const priceUsd = Math.round(priceArs / 1250);
      return { priceArs, priceUsd };
    } else {
      // Wholesale: determine tier based on quantity
      const q = item.quantity;
      let tier = item.product.wholesale[0];
      for (let i = item.product.wholesale.length - 1; i >= 0; i--) {
        if (q >= item.product.wholesale[i].units) {
          tier = item.product.wholesale[i];
          break;
        }
      }
      return {
        priceArs: tier?.priceArs || item.product.retail.efectivo,
        priceUsd: tier?.priceUsd || Math.round(item.product.retail.efectivo / 1250),
      };
    }
  };

  const totalUnits = items.reduce((acc, curr) => acc + curr.quantity, 0);

  const totalPriceArs = items.reduce((acc, curr) => {
    const { priceArs } = getItemPrice(curr);
    return acc + priceArs * curr.quantity;
  }, 0);

  const totalPriceUsd = items.reduce((acc, curr) => {
    const { priceUsd } = getItemPrice(curr);
    return acc + priceUsd * curr.quantity;
  }, 0);

  const sendWhatsAppOrder = () => {
    if (items.length === 0) return;

    let message = `*ORDEN DE COMPRA — ${GIANITECH_CONTACT.fullName}*\n`;
    message += `📋 *Modo:* Catálogo ${channel.toUpperCase()}\n`;
    message += `────────────────────────────\n`;
    if (customerName.trim()) message += `👤 *Cliente:* ${customerName.trim()}\n`;
    if (customerCity.trim()) message += `📍 *Destino / Retiro:* ${customerCity.trim()}\n`;
    message += `📦 *Detalle del Pedido:*\n`;

    items.forEach((item, idx) => {
      const { priceArs, priceUsd } = getItemPrice(item);
      const subtotalArs = priceArs * item.quantity;
      const subtotalUsd = priceUsd * item.quantity;
      message += `${idx + 1}. *${item.product.name}*\n`;
      message += `   Marca: ${item.product.brand} · Pág. ${item.product.page}\n`;
      message += `   Cantidad: ${item.quantity}u × ${formatArs(priceArs)} (US$ ${priceUsd})\n`;
      message += `   Subtotal: ${formatArs(subtotalArs)} / ${formatUsd(subtotalUsd)}\n`;
    });

    message += `────────────────────────────\n`;
    message += `*TOTAL ESTIMADO:*\n`;
    message += `• *${formatArs(totalPriceArs)} ARS*\n`;
    message += `• *${formatUsd(totalPriceUsd)} USD*\n`;

    if (customerNotes.trim()) {
      message += `────────────────────────────\n`;
      message += `📝 *Observaciones:* ${customerNotes.trim()}\n`;
    }

    message += `\n_Hola Gianitech! Me comunico desde la web para coordinar disponibilidad y pago de este pedido ${channel}._`;

    const encoded = encodeURIComponent(message);
    const targetDigits = GIANITECH_CONTACT.whatsappDigits;
    window.open(`https://wa.me/${targetDigits}?text=${encoded}`, '_blank');
  };

  return (
    <CartContext.Provider
      value={{
        channel,
        setChannel,
        toggleChannel,
        items,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        totalUnits,
        totalPriceArs,
        totalPriceUsd,
        currency,
        setCurrency,
        toggleCurrency,
        favorites,
        toggleFavorite,
        isFavorite,
        isCartOpen,
        setIsCartOpen,
        isFavoritesOpen,
        setIsFavoritesOpen,
        isSearchOpen,
        setIsSearchOpen,
        isUserModalOpen,
        setIsUserModalOpen,
        quickViewProduct,
        setQuickViewProduct,
        customerName,
        setCustomerName,
        customerCity,
        setCustomerCity,
        customerNotes,
        setCustomerNotes,
        sendWhatsAppOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
