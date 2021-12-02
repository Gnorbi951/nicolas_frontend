import { Image } from '@theme-ui/components';
import { Link } from 'theme-ui';

type LogoProps = {
  src: any;
}

export default function Logo(props: LogoProps) {
  return (
    <>
      <Link
        path='/'
        sx={{
          variant: 'links.logo',
          display: 'flex',
          cursor: 'pointer',
          mr: 15,
        }}
      >
        <Image src={props.src} alt='logo'/>
      </Link>
    </>
  );
}
