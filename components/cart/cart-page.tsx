import { useState, useEffect } from 'react';
import { CircularProgress, Paper, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import styled from 'styled-components';
import store from 'store';

import { CartItem, ShopItem } from 'lib/models';
import ShopItems from "public/data/items.json";


export default function CartPage() {
  // Item state is handled on this level, other data is just passed down.

  const [cart, setCart] = useState<CartItem[] | undefined>();
  const [items, setItems] = useState<ShopItem[]>([]);
  const [cartItems, setCartItems] = useState<ShopItem[]>([]);
  const [fetching, setFetching] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(true);

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
              <TableContainer component={Paper}>
                <TableHead>
                  <TableRow>
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
                    cart.map((item: CartItem) => (
                    // You could move it to external component.
                    // id and item need to be moved together
                      <>
                        <TableRow>
                          <TableCell>Name</TableCell>
                          <TableCell>{item.amount}</TableCell>
                          <TableCell>{item.id}</TableCell>
                        </TableRow>
                      </>
                    ))
                  }
                </TableBody>
              </TableContainer>
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