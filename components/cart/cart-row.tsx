import { TableCell, TableRow } from "@material-ui/core";
import Image from 'next/image';
import styled from "styled-components";


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
          <ImageWrapper>
            <Image
              src={imageUrl}
              alt={'cart-picture'}
              width='50px'
              height='50px'
            />
          </ImageWrapper>
        </TableCell>
        <TableCell>{name}</TableCell>
        <TableCell>{amount}</TableCell>
        <TableCell>{price}</TableCell>
      </TableRow>
    </>
  );
}

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
`;