import { useState, useEffect } from 'react';
import Link from 'next/link';
import { AppBar, Toolbar, IconButton } from '@material-ui/core';

import menuItems from 'components/header/header.data';
import { MenuItem } from 'lib/models';
import styled from 'styled-components';
import HeaderDrawer from './header-drawer';


export default function Header() {

  const [width, setWidth] = useState<number>(1900);
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener('resize', () => updateWindowWidth());

    return window.removeEventListener('resize', updateWindowWidth);
  }, []);

  function updateWindowWidth() {
    setWidth(window.innerWidth);
  }

  return (
    <NavbarContainer position='static'>
      <Toolbar variant='regular'>
        {/* TODO: Adjust width later on */}
        {width < 1000 ? 
          (
            <HeaderDrawer
              open={open}
              handleOpen={() => setOpen(true)}
              handleClose={() => setOpen(false)}
            />
          )
          :
          (
            <MenuItemWrapper>
              {menuItems.map((item: MenuItem) => (
                <Link
                  key={item.label}
                  href={item.path}
                >
                  {item.label}
                </Link>
              ))}
            </MenuItemWrapper>
          )
        }
      </Toolbar>
    </NavbarContainer>
  );
}

const NavbarContainer = styled(AppBar)`
  background: #202131 !important;
`;

const MenuItemWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 1.5rem;

  a {
    font-weight: bold;
    font-size: larger;
  }

  a:hover {
    color: #9e0e2e;
    transition: 400ms;
  }
`;