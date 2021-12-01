import { Container, Flex, Button, Heading, ThemeUIStyleObject } from 'theme-ui';
// import { keyframes } from '@emotion/core';


type HeaderProps = {
  className?: string;
}

export default function Header(props: HeaderProps) {
  return (
    <Heading sx={styles.header} className={props.className}>
      <Container sx={styles.container}>
        Hai
      </Container>
    </Heading>
  );
}

// const positionAnim = keyframes`
//   from {
//     position: fixed;
//     opacity: 1;
//   }

//   to {
//     position: absolute;
//     opacity: 1;
//     transition: all 0.4s ease;
//   }
// `;


const styles: any = {
  header: {
    color: 'text',
    fontWeight: 'body',
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'transparent',
    transition: 'all 0.4s ease',
    // animation: `${positionAnim} 0.4s ease`,
    '.donate__btn': {
      flexShrink: 0,
      marginRight: [15, 20, null, null, 0],
      marginLeft: ['auto', null, null, null, 0],
    },
    '&.sticky': {
      position: 'fixed',
      backgroundColor: 'background',
      color: '#000000',
      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.06)',
      py: 3,
      'nev > a': {
        color: 'text',
      },
    },
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  nav: {
    mx: 'auto',
    display: 'none',
    '@media screen and (min-width: 1024px)': {
      display: 'block',
    },
    a: {
      fontSize: 2,
      fontWeight: 'body',
      px: 5,
      cursor: 'pointer',
      lineHeight: '1.2',
      transition: 'all 0.15s',
      '&:hover': {
        color: 'primary',
      },
      '&.active': {
        color: 'primary',
      },
    },
  },
};