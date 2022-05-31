import {
  Td,
  Th,
  Tr,
  Box,
  Flex,
  Text,
  Badge,
  Tbody,
  Thead,
  Heading,
  useDisclosure,
  Table as ChakraTable,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  IconButton,
} from '@chakra-ui/react';

import ModalOrderStatus from 'components/Modal/ModalOrderStatus';
import ModalPaymentStatus from 'components/Modal/ModalPaymentStatus';

import useFetch from 'hooks/useFetch';

import { FiCreditCard, FiShoppingBag } from 'react-icons/fi';
import { FaEthereum } from 'react-icons/fa';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { useState } from 'react';

export default function OrderList() {
  const { response, fetchData } = useFetch<any[]>({ url: 'order' });

  const hasOrders = response?.length > 0;

  const [orderId, setOrderId] = useState<string | undefined>(undefined);

  const orderStatusDisclosure = useDisclosure({
    onClose() {
      fetchData();
    },
  });
  const paymentStatusDisclosure = useDisclosure({
    onClose() {
      fetchData();
    },
  });

  return (
    <Box flex="1" borderRadius="8" bg="gray.800" p="8" overflowX="auto">
      <ModalOrderStatus
        orderId={orderId}
        isOpen={orderStatusDisclosure.isOpen}
        onClose={orderStatusDisclosure.onClose}
      />

      <ModalPaymentStatus
        orderId={orderId}
        isOpen={paymentStatusDisclosure.isOpen}
        onClose={paymentStatusDisclosure.onClose}
      />

      <Flex mb="16">
        <Heading>Pedidos</Heading>
      </Flex>

      <ChakraTable whiteSpace="nowrap" colorScheme="whiteAlpha">
        <Thead>
          <Tr>
            <Th>Número do pedido</Th>
            <Th>Nome do comprador</Th>
            <Th>Produtos</Th>
            <Th>Valor</Th>
            <Th>Status do pedido</Th>
            <Th>Status do pagamento</Th>
            <Th w="20" />
          </Tr>
        </Thead>

        <Tbody>
          {hasOrders &&
            response.map((order, index) => (
              <Tr>
                <Td>{String(index + 1).padStart(4, '0')}</Td>
                <Td>{order.user.name}</Td>
                <Td>
                  {order.storeProducts
                    .map(product => product.storeProduct.name)
                    .join(', ')}
                </Td>
                <Td>
                  <Box display="flex" alignItems="center">
                    <FaEthereum />
                    <Text ml="1">{order.totalPrice}</Text>
                  </Box>
                </Td>
                <Td>
                  <Badge>{order.status}</Badge>
                </Td>
                <Td>
                  <Badge>{order.paymentStatus}</Badge>
                </Td>
                <Td>
                  <Menu>
                    <MenuButton
                      size="sm"
                      as={IconButton}
                      icon={<BsThreeDotsVertical />}
                    />

                    <MenuList>
                      <MenuItem
                        icon={<FiCreditCard />}
                        onClick={() => {
                          setOrderId(order.id);
                          paymentStatusDisclosure.onOpen();
                        }}
                      >
                        Alterar status de pagamento
                      </MenuItem>

                      <MenuItem
                        icon={<FiShoppingBag />}
                        onClick={() => {
                          setOrderId(order.id);
                          orderStatusDisclosure.onOpen();
                        }}
                      >
                        Alterar status do pedido
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </Td>
              </Tr>
            ))}
        </Tbody>
      </ChakraTable>
    </Box>
  );
}
