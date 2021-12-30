import styled from 'styled-components';
import Image from 'next/image';

import { ShopItem } from 'lib/models';

// extend with WebshopProps if snackbar is needed
interface ShopItemProps {
  item: ShopItem;
}

export default function ShopItemElement(props: ShopItemProps) {
  const { item } = props;
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
        <span>{item.price} HUF</span>
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

`;

const CardName = styled.p`
  font-family: 'Menlo';
`;