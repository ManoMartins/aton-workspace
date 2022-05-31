import { Box } from '@chakra-ui/react';
import MainLayout from 'layout/Main.layout';
import dynamic from 'next/dynamic';

const LineWithNoSSR = dynamic(() => import('components/Nivo/Line'), {
  ssr: false,
});

export default function HomePage() {
  return (
    <MainLayout>
      <Box bg="gray.800" borderRadius={8} w="1200px" h="400px">
        <LineWithNoSSR />
      </Box>
    </MainLayout>
  );
}
