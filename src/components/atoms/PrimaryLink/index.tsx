import classNames from 'classnames';
import { VFC } from 'react';
import styles from './styles.module.scss';

type Props = {
  text: string;
  href: string;
  className?: string;
};

export const PrimaryLink: VFC<Props> = ({ text, href, className }) => (
  <a className={classNames(styles.container, className)} href={href}>
    {text}
  </a>
);
