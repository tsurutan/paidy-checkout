import classNames from 'classnames';
import { Input, InputLabel } from 'components/atoms';
import { ChangeEventHandler, HTMLInputTypeAttribute, VFC } from 'react';
import styles from './styles.module.scss';

type Props = {
  id: string;
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
  type,
  label,
  value,
  onChange,
  onBlur,
  placeholder,
  errorMessage,
  className
}) => (
  <div className={classNames(styles.container, className)}>
    <InputLabel text={label} htmlFor={id} className={styles.label} />
    <Input
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      placeholder={placeholder}
      type={type}
      id={id}
      className={styles.input}
      isError={errorMessage != null}
    />
    {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
  </div>
);
