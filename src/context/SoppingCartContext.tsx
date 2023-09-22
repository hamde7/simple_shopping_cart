import { createContext, useContext, ReactNode, useState } from "react";
type reactNodes = {
  children: ReactNode;
};

type FuncForItem = {
  getItem: (id: number) => number;
  increasItem: (id: number) => void;
  decreasItem: (id: number) => void;
  removeItem: (id: number) => void;
};
type ItemType = {
  id: number;
  quantity: number;
};

const ShoppingContext = createContext({} as FuncForItem);

export function useShoppingContext() {
  return useContext(ShoppingContext);
}

export function ShoppingCartProvider({ children }: reactNodes) {
  const [Item, setItem] = useState<ItemType[]>([]);
  function getItem(id: number) {
    return Item.find((item) => item.id === id)?.quantity || 0;
  }

  function increasItem(id: number) {
    setItem((currentItme) => {
      if (currentItme.find((item) => item.id === id) == null) {
        return [...currentItme, { id: id, quantity: 1 }];
      } else {
        const newItems: ItemType[] = currentItme.map((item) => {
          if (item.id === id) {
            return { id: item.id, quantity: item.quantity + 1 };
          } else {
            return { ...item };
          }
        });
        return newItems;
      }
    });
  }
  function decreasItem(id: number) {
    setItem((currentItme) => {
      let newItems: ItemType[]
      if (currentItme.find((item) => item.id === id)?.quantity === 1) {
         newItems = currentItme.filter((item) => {
          item.id !== id;
        });
        return newItems;
      } else {
        const newItems: ItemType[] = currentItme.map((item) => {
          if (item.id === id) {
            return { id: item.id, quantity: item.quantity -1 };
          } else {
            return { ...item };
          }
        });
        return newItems;
      }
    });
  }
  function removeItem(id : number){
    setItem((currentItme) => {
      let newItems: ItemType[]
         newItems = currentItme.filter((item) => {
          item.id !== id;
        });
        return newItems;
  })}

  return (
    <ShoppingContext.Provider value={{ getItem, increasItem ,decreasItem ,removeItem }}>
      {children}
    </ShoppingContext.Provider>
  );
}
