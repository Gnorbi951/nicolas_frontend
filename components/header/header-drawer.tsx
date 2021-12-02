import { IconButton, Drawer, Toolbar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

import menuItems from 'components/header/header.data';
import { MenuItem } from 'lib/models';
import NicolasDrawer from 'public/nicolas-drawer.png';

type HeaderDrawerProps = {
  open: boolean;
  handleClose: Function;
  handleOpen: Function;
}

export default function HeaderDrawer(props: HeaderDrawerProps) {
  return (
    <>
      <IconButton edge='start' aria-label='menu' style={{marginLeft: 'auto'}} onClick={() => props.handleOpen()}>
        <MenuIcon style={{color: '#fff', fontSize: '2.2rem'}}/>
      </IconButton>
      <Drawer
        anchor={"right"}
        open={props.open}
        onClose={() => props.handleClose()}
      >
        <DrawerContainer>
          <Image
            src={NicolasDrawer}
            alt={"nicolas_logo"}
            className={"drawer-logo"}
            height='100px'
            width='188px'
          />
          {menuItems.map((item: MenuItem) => (
            <DrawerElement
              key={item.label}
              onClick={() => props.handleClose()}
            >
              <Link
                href={item.path}
              >
                {item.label}
              </Link>
            </DrawerElement>
          ))}
        </DrawerContainer>
      </Drawer>
    </>
  );
}

const DrawerContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f0f0f0;
  height: 100vh;
`;

const DrawerElement = styled.div`
  text-decoration: none;
  font-size: 1.4rem;
  color: #202131;
  padding: 1rem 1.5rem 1rem .8rem;
  font-weight: bold;
  font-family: 'Menlo';
`;