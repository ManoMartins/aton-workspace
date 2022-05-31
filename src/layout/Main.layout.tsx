import { Box, Flex } from '@chakra-ui/react';
import Sidebar from 'components/Sidebar';
import { ReactNode } from 'react';

interface IMainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: IMainLayoutProps) {
  return (
    <Flex>
      <Sidebar />

      <Box mt="14" maxW="1200px" w="1200px" mx="auto">
        {children}
      </Box>
    </Flex>
  );
}
