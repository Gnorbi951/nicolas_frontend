export interface MenuItem {
  path: string;
  label: string;
}

export interface WebshopProps {
  setErrorOpen: Function;
  setErrorMessage: Function;
}

export interface Item {
  id: string // uuid
  name: string;
  description: string;
  imageUrl: string;
}