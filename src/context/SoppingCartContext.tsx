import { createContext, useContext, ReactNode, useState } from "react";
import ShoppingCartSection from "../components/ShoppingCartSection";
type reactNodes = {
  children: ReactNode;
};

type FuncForItem = {
  closeCart : ()=>void,
  openCart : ()=>void,
  getItem: (id: number) => number;
  increasItem: (id: number) => void;
  decreasItem: (id: number) => void;
  removeItem: (id: number) => void;
  cartQuantity : number;
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
  const [isOpen , setIsOpen] = useState<boolean>(false)
  const [Item, setItem] = useState<ItemType[]>([]);
  const cartQuantity = Item.reduce((acc,item)=>{
    return item.quantity + acc ;
  },0)
  function getItem(id: number) {
    return Item.find((item) => item.id === id)?.quantity || 0;
  }
  function closeCart(){
    setIsOpen(false);
  }
  function openCart(){
    setIsOpen(true);
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
    <ShoppingContext.Provider value={{
       getItem,
       increasItem,
       decreasItem,
       removeItem,
       openCart,
       closeCart,
       cartQuantity }}>
      {children}
      <ShoppingCartSection isOpen={isOpen}/>
    </ShoppingContext.Provider>
  );
}
