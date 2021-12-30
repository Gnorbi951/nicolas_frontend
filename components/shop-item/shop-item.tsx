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
          width='100vw'
          height='100vh'
        />
        {item.name}
      </CardWrapper>
      <p></p>
    </>
  );
}

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  margin: 1rem;
  background: #fff;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;