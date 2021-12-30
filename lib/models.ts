export interface MenuItem {
    path: string;
    label: string;
}

export interface ShopItem {
    id: string;
    name: string;
    price: number;
    description?: string;
    imageUrl: string;
}

export interface WebshopProps {
  setErrorOpen: Function;
  setErrorMessage: Function;
}
