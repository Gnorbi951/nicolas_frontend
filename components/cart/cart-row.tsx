import { TableCell, TableRow } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Image from 'next/image';
import styled from "styled-components";


interface CartRowProps {
  id: string;
  name: string;
  amount: number;
  price: number;
  imageUrl: string;
  amountCallback: Function;
}

export default function CartRow(props: CartRowProps) {

  const { id, name, amount, price, imageUrl, amountCallback } = props;

  return (
    <>
      <TableRow>
        {window.innerWidth > 1000 ?
          (
            <>
              <ImageCell>
                <ImageWrapper>
                  <Image
                    src={imageUrl}
                    alt={'cart-picture'}
                    width='50px'
                    height='50px'
                  />
                </ImageWrapper>
              </ImageCell>
            </>
          )
          :
          (
            <></>
          )
        }
        <TableCell>{name}</TableCell>
        <TableCell>
          <AmountWrapper>
            <AddIcon onClick={() => amountCallback(amount+1, id)}/>
            <p>{amount}</p>
            <RemoveIcon onClick={() => amountCallback(amount-1, id)}/>
          </AmountWrapper>
        </TableCell>
        <TableCell>{price}</TableCell>
      </TableRow>
    </>
  );
}

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const ImageCell = styled(TableCell)`
  width: 10%;
`;

const AmountWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  svg {
    cursor: pointer;
  }
  svg:active {
    transform: translateY(4px);
  }
`;