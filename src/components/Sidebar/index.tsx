import { Box, Stack } from '@chakra-ui/react';
import Image from 'next/image';
import { FiTag, FiShoppingBag, FiGrid } from 'react-icons/fi';
import SidebarItem from './SidebarItem';

export default function Sidebar() {
  return (
    <Stack shadow="2xl" w="60" h="100vh" px="4">
      <Box width="208px" height="32px" my="14">
        <Image
          alt="Maffei"
          width="208px"
          height="32px"
          objectFit="cover"
          src="/assets/logo.png"
        />
      </Box>

      <SidebarItem title="Dashboard" icon={FiGrid} href="/" />
      <SidebarItem title="Pedidos" icon={FiShoppingBag} href="/orders" />
      <SidebarItem title="Cupons" icon={FiTag} href="/coupons" />
    </Stack>
  );
}
