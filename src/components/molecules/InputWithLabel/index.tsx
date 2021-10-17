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
  placeholder,
  errorMessage,
  className,
}) => (
  <div className={classNames(styles.container, className)}>
    <InputLabel text={label} htmlFor={id} className={styles.label} />
    <Input
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      id={id}
      className={styles.input}
    />
    {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
  </div>
);
