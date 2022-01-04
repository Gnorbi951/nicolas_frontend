import { useState, useEffect } from 'react';
import { CircularProgress } from '@material-ui/core';
import styled from 'styled-components';

import { ShopItem } from 'lib/models';
import ShopItems from "public/data/items.json";
import ShopItemElement from 'components/shop-item/shop-item';


export default function ShopItemList() {

  const [loading, setLoading] = useState<boolean>(true);
  const [items, setItems] = useState<ShopItem[]>([]);

  useEffect(() => {
    // Right now json-loader module is being used.
    // TODO: Implement this with axios when backend service is ready
    setItems(ShopItems);
    setLoading(false);
  }, []);

  return (
    <>
      <ItemContainer>
        <ItemWrapper>
          {!loading ?
            (
              <ItemListContainer>
                {
                  items.map((item: ShopItem) => (
                    <ShopItemElement key={item.id} item={item} />
                  ))
                }
              </ItemListContainer>
            )
            :
            (
              <CircularProgress />
            )
          }
        </ItemWrapper>
      </ItemContainer>
    </>
  );
}

const ItemListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 50px;
`;

const ItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
  max-width: 1500px;
`;

const ItemContainer = styled.div`
  display: flex;
  justify-content: center;
`;