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