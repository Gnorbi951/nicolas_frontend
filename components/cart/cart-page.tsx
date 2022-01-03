import { CartItem } from 'lib/models';
import { useState, useEffect } from 'react';
import { Paper, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import styled from 'styled-components';
import store from 'store';

export default function CartPage() {

  const [cart, setCart] = useState<CartItem[] | undefined>();

  useEffect(() => {
    setCart(store.get('cart'));
  }, []);

  return (
    <>
      {cart != null && cart.length > 0 ?
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
                    <TableCell>Name</TableCell>
                    <TableCell>{item.amount}</TableCell>
                    <TableCell>{item.id}</TableCell>
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
      }
    </>
  );
}

const EmptyHeader = styled.h1`
  text-align: center;
  font-family: 'Menlo';
  margin-top: 20vh;
`;