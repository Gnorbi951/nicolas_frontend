import { useState, useEffect } from 'react';
import Link from 'next/link';
import { AppBar, Toolbar, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import menuItems from 'components/header/header.data';
import { MenuItem } from 'lib/models';
import styled from 'styled-components';


export default function Header() {

  const [width, setWidth] = useState<number>(1900);

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
            <IconButton edge='start' 
              color='inherit' aria-label='menu'>
              <MenuIcon />
            </IconButton>
          )
          :
          (
            <MenuItemWrapper>
              {menuItems.map((item: MenuItem, i: number) => (
                <Link
                  key={`${item}_${i}`}
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