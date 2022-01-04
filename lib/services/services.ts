import { ShopItem } from "lib/models";
import REST from "./rest-api-service";


const itemService = new REST<ShopItem>('/items');

export { itemService };