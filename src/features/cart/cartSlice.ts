import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface Item {
  name: string;
  quantity: number;
}

export interface CartState {
  items: Item[];
}

const initialState: CartState = {
  items: [],
};

function findItemByName(items: Item[], name: string): Item | undefined {
  return items.find((i) => i.name === name);
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<string>) => {
      const item = findItemByName(state.items, action.payload);

      if (item) {
        item.quantity += 1;
      } else {
        const newItem: Item = {
          name: action.payload,
          quantity: 1,
        };

        state.items.push(newItem);
      }
    },
    removeProduct: (state, action: PayloadAction<string>) => {
      const item = findItemByName(state.items, action.payload);

      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          state.items = state.items.filter((i) => i.name !== action.payload);
        }
      }
    },
    incrementProductQuantity: (state, action: PayloadAction<string>) => {
      const item = findItemByName(state.items, action.payload);

      if (item) {
        item.quantity++;
      }
    },
    decrementProductQuantity: (state, action: PayloadAction<string>) => {
      const item = findItemByName(state.items, action.payload);

      if (item) {
        if (item.quantity > 1) {
          item.quantity--;
        }
      }
    },
    // TODO 3: Do widoku dodaj przycisk z "-", który
    //           wywoła akcje decrement dla danego produktu
    // TODO 4: Do widoku dodaj przycisk z "+", który
    //           wywoła akcje increment dla danego produktu
  },
});

// HOMEWORK: Zmodyfikuj selektor tak zeby podliczal wszystkie produkty
export const selectQuantity = (state: RootState) => {
  return state.cart.items.reduce((acc, item) => {
    acc += item.quantity;
    return acc;
  }, 0);
};

export const selectItems = (state: RootState) => state.cart.items;

export const {
  addProduct,
  removeProduct,
  incrementProductQuantity,
  decrementProductQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
