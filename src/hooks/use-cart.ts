import { Sticker } from "@/types/stickerType";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type CartItem = {
  sticker: Sticker;
};

type CartState = {
  items: CartItem[];
  addItem: (product: Sticker) => void;
  removeItem: (productId: string) => void;
  clearCart: () => void;
};

export const useCart = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      addItem: (sticker) =>
        set((state) => {
          return { items: [...state.items, { sticker }] };
        }),
      removeItem: (id) =>
        set((state) => ({
          items: state.items.filter((item) => item.sticker.id !== id),
        })),
      clearCart: () => set({ items: [] }),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
