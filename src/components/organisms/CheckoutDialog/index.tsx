import { PrimaryButton } from 'components/atoms';
import { Dialog, InputWithLabel } from 'components/molecules';
import { Ids } from 'consts';
import { useInput } from 'hooks';
import { VFC } from 'react';
import { phoneValidator } from 'validators';
import styles from './styles.module.scss';

type Props = {
  readonly isOpen: boolean;
  readonly onClose: () => void;
};

export const CheckoutDialog: VFC<Props> = ({ isOpen, onClose }) => {
  const [email, onChangeEmail, emailErrorMessage] = useInput();
  const [phone, onChangePhone, phoneErrorMessage] = useInput(phoneValidator);

  return (
    <Dialog isOpen={isOpen} onClose={onClose}>
      <InputWithLabel
        id={Ids.INPUT_EMAIL}
        label="メールアドレス"
        value={email}
        onChange={onChangeEmail}
        placeholder="hello@paidy.com"
        className={styles.form}
        errorMessage={emailErrorMessage}
      />
      <InputWithLabel
        id={Ids.INPUT_PHONE}
        label="携帯電話番号"
        value={phone}
        onChange={onChangePhone}
        placeholder="090-1234-5678"
        className={styles.form}
        errorMessage={phoneErrorMessage}
      />
      <PrimaryButton text="次へ" onClick={onClose} className={styles.submitButton} type="submit" />
    </Dialog>
  );
};
