import { TableCell, TableRow } from "@material-ui/core";


interface CartRowProps {
  name: string;
  amount: number;
  price: number;
}

export default function CartRow(props: CartRowProps) {

  const { name, amount, price } = props;

  return (
    <>
      <TableRow>
        <TableCell>{name}</TableCell>
        <TableCell>{amount}</TableCell>
        <TableCell>{price}</TableCell>
      </TableRow>
    </>
  );
}
