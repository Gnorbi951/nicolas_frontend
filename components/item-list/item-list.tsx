import { useState, useEffect } from 'react';

import { ShopItem } from 'lib/models';
import ShopItems from "public/data/items.json";


function ItemList() {

  const [items, setItems] = useState<ShopItem[]>([]);

  useEffect(() => {
    // Right now json-loader module is being used.
    // TODO: Implement this with axios when backend service is ready
    setItems(ShopItems);
  }, []);

  return (
    <>
      asd
    </>
  );
}

export default ItemList;
