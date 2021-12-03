import { Item } from "lib/models";
import REST from "./rest-api-service";


const itemService = new REST<Item>('/items');

export { itemService };