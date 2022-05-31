import { Button } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { IconType } from 'react-icons';

interface ISidebarItemProps {
  title: string;
  icon: IconType;
  href: string;
}

export default function SidebarItem({
  href,
  title,
  icon: Icon,
}: ISidebarItemProps) {
  const { asPath } = useRouter();

  const isActive = asPath === href;

  return (
    <Link href={href}>
      <Button
        as="a"
        w="full"
        leftIcon={<Icon />}
        justifyContent="start"
        bg={isActive ? 'primary.900' : 'transparent'}
        _hover={{ filter: isActive ? 'brightness(0.85)' : 'brightness(1)' }}
        variant={isActive ? 'solid' : 'ghost'}
      >
        {title}
      </Button>
    </Link>
  );
}
