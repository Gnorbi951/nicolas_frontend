import { SetStateAction } from "react";
import swal from 'sweetalert';
import store from 'store';

import { CartItem, ShopItem } from "lib/models";


export function promptDelete(
  cartItems: ShopItem[],
  id: string,
  setCartItems: { (value: SetStateAction<ShopItem[]>): void; (arg0: ShopItem[]): void; }
) {
  swal({
    title: 'Delete Item?',
    icon: 'warning',
    buttons: [ 'Cancel', 'Confirm' ],
    dangerMode: true,
  })
    .then((willDelete) => {
      if (willDelete) {
        let newCartState: ShopItem[] = [];
        cartItems.forEach((item: ShopItem) => {
          if (item.id !== id) {
            newCartState.push(item);
          }
        });
        setCartItems(newCartState);
  
        let newCartStorage: CartItem[] = store.get('cart');
        for (let i = 0; i < newCartStorage.length; i++) {
          if (newCartStorage[ i ].id === id) {
            newCartStorage.splice(i, 1);
          }
        }
        store.set('cart', newCartStorage);
      }
    });
}


export function changeAmount(
  cartItems: ShopItem[],
  id: string,
  amount: number,
  setCartItems: { (value: SetStateAction<ShopItem[]>): void; (arg0: ShopItem[]): void; }
) {
  let newCartState: ShopItem[] = [];
  cartItems.forEach((item: ShopItem) => {
    if (item.id === id) {
      item.amount = amount;
    }
    newCartState.push(item);
  });
  setCartItems(newCartState);

  let newCartStorage: CartItem[] = store.get('cart');
  newCartStorage.every((item: CartItem) => {
    if (item.id === id) {
      item.amount = amount;
    }
    return true;
  });
  store.set('cart', newCartStorage);
}

  