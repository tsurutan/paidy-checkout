import { PrimaryButton } from 'components/atoms';
import { Dialog } from 'components/molecules';
import { VFC } from 'react';
import styles from './styles.module.scss';

type Props = {
  readonly isOpen: boolean;
  readonly onClose: () => void;
};

export const CheckoutDialog: VFC<Props> = ({ isOpen, onClose }) => (
  <Dialog isOpen={isOpen} onClose={onClose}>
    <p>Hoge</p>
    <PrimaryButton text="次へ" onClick={onClose} className={styles.submitButton} type="submit" />
  </Dialog>
);
