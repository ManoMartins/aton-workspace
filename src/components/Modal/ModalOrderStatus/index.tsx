import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
} from '@chakra-ui/react';
import { useCallback, useState } from 'react';
import api from 'services';

interface IModalOrderStatusProps {
  isOpen: boolean;
  orderId: string;
  onClose: () => void;
}

export default function ModalOrderStatus({
  isOpen,
  onClose,
  orderId,
}: IModalOrderStatusProps) {
  const [orderStatus, setOrderStatus] = useState('');

  const handlePaymentStatus = useCallback(async () => {
    try {
      if (orderStatus === '') return;

      await api.patch(`order/${orderId}/status`, {
        status: orderStatus,
      });

      onClose();
    } catch (error) {
      alert(error);
    }
  }, [onClose, orderId, orderStatus]);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />

      <ModalContent>
        <ModalHeader>Alterar status do pedido</ModalHeader>

        <ModalCloseButton />

        <ModalBody>
          <Select
            placeholder="Selecione o status"
            onChange={e => setOrderStatus(e.target.value)}
          >
            <option value="SHIPPED">Enviado</option>
            <option value="PENDING">Pendente</option>
            <option value="DELIVERED">Entregue</option>
            <option value="CANCELLED">Cancelar</option>
          </Select>
        </ModalBody>

        <ModalFooter>
          <Button rounded="2" variant="outline" mr={3} onClick={onClose}>
            Fechar
          </Button>

          <Button rounded="2" bg="primary.900" onClick={handlePaymentStatus}>
            Salvar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
