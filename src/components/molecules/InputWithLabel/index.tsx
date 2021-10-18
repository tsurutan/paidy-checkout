import classNames from 'classnames';
import { Input, InputLabel } from 'components/atoms';
import { Id } from 'consts';
import { ChangeEventHandler, HTMLInputTypeAttribute, VFC } from 'react';
import styles from './styles.module.scss';

type Props = {
  id: Id;
  label: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onBlur?: () => void;
  errorMessage?: string;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  className?: string;
};

export const InputWithLabel: VFC<Props> = ({
  id,
  label,
  value,
  onChange,
  onBlur,
  placeholder,
  errorMessage,
  className,
}) => (
  <div className={classNames(styles.container, className)}>
    <InputLabel text={label} htmlFor={id} className={styles.label} />
    <Input
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      placeholder={placeholder}
      id={id}
      className={styles.input}
      isError={errorMessage != null}
    />
    {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
  </div>
);
