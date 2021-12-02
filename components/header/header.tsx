import Link from 'next/link';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import menuItems from 'components/header/header.data';
import { MenuItem } from 'lib/models';
import styled from 'styled-components';


type HeaderProps = {
  className?: string;
}

export default function Header(props: HeaderProps) {
  return (
    <NavbarContainer>
      <AppBar position='static'>
        <Toolbar variant='dense'>
          <IconButton edge='start' 
            color='inherit' aria-label='menu'>
            <MenuIcon />
          </IconButton>
          {menuItems.map((item: MenuItem, i: number) => (
            <Link
              key={`${item}_${i}`}
              href={item.path}
            >
              {item.label}
            </Link>
          ))}
        </Toolbar>
      </AppBar>
    </NavbarContainer>
  );
}

const NavbarContainer = styled.div`
  display: flex;
  flex-direction: row;

`;