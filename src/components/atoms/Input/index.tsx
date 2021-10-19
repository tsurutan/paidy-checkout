import classNames from 'classnames';
import { ChangeEventHandler, HTMLInputTypeAttribute, VFC } from 'react';
import styles from './styles.module.scss';

type Props = {
  id: string;
  type?: HTMLInputTypeAttribute;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onBlur: () => void;
  value: string;
  placeholder?: string;
  className?: string;
  isError?: boolean;
};

export const Input: VFC<Props> = ({
  id,
  type,
  onChange,
  onBlur,
  value,
  placeholder,
  className,
  isError
}) => (
  <input
    id={id}
    className={classNames(styles.container, className, {
      [styles.error]: isError
    })}
    type={type}
    onChange={onChange}
    onBlur={onBlur}
    value={value}
    placeholder={placeholder}
  />
);
