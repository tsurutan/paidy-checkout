import classNames from 'classnames';
import { Id } from 'consts';
import { ChangeEventHandler, HTMLInputTypeAttribute, VFC } from 'react';
import styles from './styles.module.scss';

type Props = {
  id: Id;
  type?: HTMLInputTypeAttribute;
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: string;
  placeholder?: string;
  className?: string;
  isError?: boolean;
};

export const Input: VFC<Props> = ({
  id,
  type,
  onChange,
  value,
  placeholder,
  className,
  isError,
}) => (
  <input
    id={id}
    className={classNames(styles.container, className, { [styles.error]: isError })}
    type={type}
    onChange={onChange}
    value={value}
    placeholder={placeholder}
  />
);