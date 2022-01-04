import { TableCell, TableRow } from "@material-ui/core";
import Image from 'next/image';


interface CartRowProps {
  name: string;
  amount: number;
  price: number;
  imageUrl: string;
}

export default function CartRow(props: CartRowProps) {

  const { name, amount, price, imageUrl } = props;

  return (
    <>
      <TableRow>
        <TableCell>
          <Image
            src={imageUrl}
            alt={'cart-picture'}
            width='50px'
            height='50px'
          />
        </TableCell>
        <TableCell>{name}</TableCell>
        <TableCell>{amount}</TableCell>
        <TableCell>{price}</TableCell>
      </TableRow>
    </>
  );
}
