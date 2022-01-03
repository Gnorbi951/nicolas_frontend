import styled from 'styled-components';
import Image from 'next/image';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import store from 'store';

import { CartItem, ShopItem } from 'lib/models';

// extend with WebshopProps if snackbar is needed
interface ShopItemProps {
  item: ShopItem;
}

export default function ShopItemElement(props: ShopItemProps) {
  const { item } = props;

  function addToCart() {
    let currentCart: CartItem[] | undefined = store.get('cart');
    const currentItem: CartItem = { id: item.id, amount: 1 };
    
    // case for empty cart
    if (currentCart == null) {
      store.set('cart', [currentItem]);
      return;
    }
  
    // If the item is already in the cart
    for (let i=0; i<currentCart?.length; i++) {
      if (currentCart[i].id === currentItem.id) {
        currentCart[i].amount = ++currentCart[i].amount;
        store.set('cart', currentCart);
        return;
      }
    }

    // Item is not in the cart
    currentCart.push(currentItem);
    store.set('cart', currentCart);
  }

  return (
    <>
      <CardWrapper>
        <Image
          src={item.imageUrl}
          alt={'item-picture'}
          width='250px'
          height='250px'
        />
        <CardName>{item.name}</CardName>
        <CardBottomRow>
          <span>{item.price} HUF</span>
          <ShoppingCartIcon onClick={() => addToCart()}/>
        </CardBottomRow>
      </CardWrapper>
    </>
  );
}

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  margin: 1rem auto;
  background: #fff;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  user-select: none;
`;

const CardName = styled.p`
  font-family: 'Menlo';
`;

const CardBottomRow = styled.div`
  display: flex;
  justify-content: space-between;
  svg {
    font-size: 2rem;
    margin-top: -1.5rem;
    cursor: pointer;
  }
`;