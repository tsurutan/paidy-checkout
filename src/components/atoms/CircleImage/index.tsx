import classNames from 'classnames';
import { VFC } from 'react';
import styles from './styles.module.scss';

type Props = {
  imageUrl: string;
  alt: string;
  className?: string;
};

export const CircleImage: VFC<Props> = ({ imageUrl, className, alt }) => (
  <div className={classNames(styles.container, className)}>
    <img src={imageUrl} className={styles.image} alt={alt} />
  </div>
);
