import { ShopItem, WebshopProps } from 'lib/models';

// extend with WebshopProps if snackbar is needed
interface ShopItemProps {
  item: ShopItem;
}

export default function ShopItemElement(props: ShopItemProps) {
  const { item } = props;
  return (
    <>
      <p>{item.name}</p>
      <p>{item.id}</p>
      <p>{item.imageUrl}</p>
    </>
  );
}
