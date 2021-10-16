import classNames from 'classnames';
import { VFC } from 'react';
import styles from './styles.module.scss';

type Props = {
  readonly text: string;
  readonly onClick: () => void;
  readonly className?: string;
  readonly type?: 'button' | 'submit' | 'reset';
};
export const PrimaryButton: VFC<Props> = ({ text, onClick, className, type = 'button' }) => (
  <button onClick={onClick} type={type} className={classNames(styles.button, className)}>
    {text}
  </button>
);
