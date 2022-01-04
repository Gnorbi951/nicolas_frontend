import { useState, useEffect } from 'react';
import { CircularProgress, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import styled from 'styled-components';
import store from 'store';

import { CartItem, ShopItem } from 'lib/models';
import ShopItems from "public/data/items.json";
import CartRow from './cart-row';


export default function CartPage() {
  // Item state is handled on this level, other data is just passed down.

  const [cart, setCart] = useState<CartItem[] | undefined>();
  const [items, setItems] = useState<ShopItem[]>([]);
  const [cartItems, setCartItems] = useState<ShopItem[]>([]);
  const [fetching, setFetching] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(true);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    setCart(store.get('cart'));
    // with API fetch only the id list provided, this fetching/loading/cartItems solution is only for mocking.
    setItems(ShopItems); // axios call will be here.
    setFetching(false);
  }, []);

  useEffect(() => {
    // 
    if (!fetching) {
      let completeCartList: ShopItem[] = [];
      items.forEach((item: ShopItem) => {
        cart?.every((cartItem: CartItem) => {
          if (cartItem.id === item.id) {
            item.amount = cartItem.amount;
            completeCartList.push(item);
            return false; // break the loop when its found
          }
          return true;
        });
      });
      setCartItems(completeCartList);
      setLoading(false);
    }
  }, [fetching]);

  useEffect(() => {
    let price = 0;
    cartItems.forEach((item: ShopItem) => {
      price += item.price * (item.amount ?? 1);
    });
    setTotalPrice(price);
  }, [cartItems]);

  function changeItemAmount(amount: number, id: string) {
    // We need to change localstorage as well as state
    if (amount < 1) {
      return;
    }

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

  return (
    <>
      {loading ?
        (
          <CircularProgress />
        )
        :
        (
          cart != null && cart.length > 0 ?
            (
              <TableWrapper>
                <TableContainer component={Paper}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        {window.innerWidth > 1000 && (<TableCell></TableCell>)}
                        <TableCell>
                        Name
                        </TableCell>
                        <TableCell>
                        Amount
                        </TableCell>
                        <TableCell>
                        Price
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {
                        cartItems.map((item: ShopItem) => (
                        // You could move it to external component.
                        // id and item need to be moved together
                          <CartRow
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            amount={item.amount ?? 1}
                            price={item.price}
                            imageUrl={item.imageUrl}
                            amountCallback={(amount: number, id: string) => changeItemAmount(amount, id)}
                          />
                        ))
                      }
                      <TableRow>
                        <TableCell></TableCell>
                        {window.innerWidth > 1000 && (<TableCell></TableCell>)}
                        <TableCell>Total Price:</TableCell>
                        <TableCell>{totalPrice}</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </TableWrapper>
            )
            :
            (
              <EmptyHeader>No items in your cart</EmptyHeader>
            )
        )
      }
    </>
  );
}

const EmptyHeader = styled.h1`
  text-align: center;
  font-family: 'Menlo';
  margin-top: 20vh;
`;

const TableWrapper = styled.div`
  margin: auto;
  width: 80%;
  max-width: 1000px;
  margin-top: 5vh;
`;