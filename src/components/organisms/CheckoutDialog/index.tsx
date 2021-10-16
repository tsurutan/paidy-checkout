import { Dialog } from 'components/molecules';
import { VFC } from 'react';

type Props = {
  readonly isOpen: boolean;
  readonly onClose: () => void;
};

export const CheckoutDialog: VFC<Props> = ({ isOpen, onClose }) => (
  <Dialog isOpen={isOpen} onClose={onClose}>
    <p>Hoge</p>
  </Dialog>
);
