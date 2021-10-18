import { CircleImage, PrimaryButton, PrimaryLink } from 'components/atoms';
import { Dialog, InputWithLabel } from 'components/molecules';
import { ErrorMessages, Ids } from 'consts';
import { useInput } from 'hooks';
import { VFC } from 'react';
import { phoneValidator } from 'validators';
import { stringLengthValidator } from 'validators/stringLengthValidator';
import styles from './styles.module.scss';

type Props = {
  readonly isOpen: boolean;
  readonly onClose: () => void;
};

const focusLeavePhoneValidator = stringLengthValidator(
  13,
  ErrorMessages.PLEASE_INPUT_CORRECT_PHONE_NUMBER,
);

export const CheckoutDialog: VFC<Props> = ({ isOpen, onClose }) => {
  const [email, onChangeEmail, emailErrorMessage] = useInput();
  const [phone, onChangePhone, phoneErrorMessage, onBlurPhone] = useInput({
    inputValidator: phoneValidator,
    focusLeaveValidator: focusLeavePhoneValidator,
  });

  return (
    <Dialog isOpen={isOpen} onClose={onClose}>
      <div className={styles.header}>
        <div className={styles.itemInformation}>
          <p className={styles.itemTitle}>SHOP NAME</p>
          <p className={styles.itemPrice}>¥99,999</p>
        </div>
        <CircleImage imageUrl="/logos/paidy.png" alt="paidy logo" className={styles.paidyLogo} />
      </div>
      <InputWithLabel
        id={Ids.INPUT_EMAIL}
        type="email"
        label="メールアドレス"
        value={email}
        onChange={onChangeEmail}
        placeholder="hello@paidy.com"
        className={styles.form}
        errorMessage={emailErrorMessage}
      />
      <InputWithLabel
        id={Ids.INPUT_PHONE}
        type="tel"
        label="携帯電話番号"
        value={phone}
        onChange={onChangePhone}
        onBlur={onBlurPhone}
        placeholder="090-1234-5678"
        className={styles.form}
        errorMessage={phoneErrorMessage}
      />
      <p className={styles.term}>
        <PrimaryLink href="/terms" text="利用規約・個人情報取扱条項" />
        に同意して
      </p>
      <PrimaryButton text="次へ" onClick={onClose} className={styles.submitButton} type="submit" />
    </Dialog>
  );
};
