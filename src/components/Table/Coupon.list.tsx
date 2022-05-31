import {
  Td,
  Th,
  Tr,
  Box,
  Flex,
  Badge,
  Tbody,
  Thead,
  Heading,
  ButtonGroup,
  Table as ChakraTable,
  IconButton,
  Tooltip,
} from '@chakra-ui/react';
import { FiEdit, FiMinusCircle } from 'react-icons/fi';

export default function CouponList() {
  return (
    <Box flex="1" borderRadius="8" bg="gray.800" p="8" overflowX="auto">
      <Flex mb="16">
        <Heading>Cupons</Heading>
      </Flex>

      <ChakraTable whiteSpace="nowrap" colorScheme="whiteAlpha">
        <Thead>
          <Tr>
            <Th>Código do cupom</Th>
            <Th>Data de inicio</Th>
            <Th>Data de termino</Th>
            <Th>Tipo de desconto</Th>
            <Th>Valor do desconto</Th>
            <Th>Status</Th>
            <Th w="20" />
          </Tr>
        </Thead>

        <Tbody>
          <Tr>
            <Td>FIRST</Td>
            <Td>20 de Abril de 2022</Td>
            <Td>20 de Maio de 2022</Td>
            <Td>Porcentagem</Td>
            <Td>15%</Td>
            <Td>
              <Badge colorScheme="green">Ativo</Badge>
            </Td>
            <Td>
              <ButtonGroup size="sm">
                <Tooltip label="Editar">
                  <IconButton
                    aria-label="Editar"
                    icon={<FiEdit />}
                    bg="primary.900"
                    _hover={{ filter: 'brightness(0.85)' }}
                    _active={{ filter: 'brightness(0.95)' }}
                  />
                </Tooltip>

                <Tooltip label="Deletar">
                  <IconButton
                    aria-label="Deletar"
                    icon={<FiMinusCircle />}
                    variant="outline"
                    colorScheme="red"
                  />
                </Tooltip>
              </ButtonGroup>
            </Td>
          </Tr>

          <Tr>
            <Td>FIRST</Td>
            <Td>20 de Abril de 2022</Td>
            <Td>20 de Maio de 2022</Td>
            <Td>Porcentagem</Td>
            <Td>15%</Td>
            <Td>
              <Badge colorScheme="red">Inativo</Badge>
            </Td>
            <Td>
              <ButtonGroup size="sm">
                <Tooltip label="Editar">
                  <IconButton
                    aria-label="Editar"
                    icon={<FiEdit />}
                    bg="primary.900"
                    _hover={{ filter: 'brightness(0.85)' }}
                    _active={{ filter: 'brightness(0.95)' }}
                  />
                </Tooltip>

                <Tooltip label="Deletar">
                  <IconButton
                    aria-label="Deletar"
                    icon={<FiMinusCircle />}
                    variant="outline"
                    colorScheme="red"
                  />
                </Tooltip>
              </ButtonGroup>
            </Td>
          </Tr>
        </Tbody>
      </ChakraTable>
    </Box>
  );
}
