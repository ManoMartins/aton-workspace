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

interface IModalPaymentStatusProps {
  isOpen: boolean;
  orderId: string;
  onClose: () => void;
}

export default function ModalPaymentStatus({
  isOpen,
  onClose,
  orderId,
}: IModalPaymentStatusProps) {
  const [paymentStatus, setPaymentStatus] = useState('');

  const handlePaymentStatus = useCallback(async () => {
    try {
      if (paymentStatus === '') return;

      await api.patch(`order/${orderId}/payment-status`, {
        paymentStatus,
      });

      onClose();
    } catch (error) {
      alert(error);
    }
  }, [onClose, orderId, paymentStatus]);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />

      <ModalContent>
        <ModalHeader>Alterar status de pagamento</ModalHeader>

        <ModalCloseButton />

        <ModalBody>
          <Select
            placeholder="Selecione o status"
            onChange={e => setPaymentStatus(e.target.value)}
          >
            <option value="PAID">Pago</option>
            <option value="FAILED">Falha</option>
            <option value="NOT_AUTHORIZED">Não autorizado</option>
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
