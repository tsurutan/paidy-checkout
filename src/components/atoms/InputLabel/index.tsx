import classNames from 'classnames';
import { VFC } from 'react';
import styles from './styles.module.scss';

type Props = {
  text: string;
  htmlFor: string;
  className?: string;
};

export const InputLabel: VFC<Props> = ({ text, htmlFor, className }) => (
  <label className={classNames(styles.container, className)} htmlFor={htmlFor}>
    {text}
  </label>
);
