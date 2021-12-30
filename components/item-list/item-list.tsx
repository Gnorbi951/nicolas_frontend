import { useState, useEffect } from 'react';
import { CircularProgress } from '@material-ui/core';
import styled from 'styled-components';

import { ShopItem } from 'lib/models';
import ShopItems from "public/data/items.json";


export default function ItemList() {

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
      <ItemWrapper>

        {!loading ?
          (
            <ItemListContainer>
              {
                items.map((item: ShopItem) => (
                  <p key={item.id}>{item.name}</p>
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
    </>
  );
}

// card items should be around flex: 0 1 25%
const ItemListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const ItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
`;