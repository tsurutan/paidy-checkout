import { VFC } from 'react';
import styles from './styles.module.scss';

export const HomeTemplate: VFC = () => (
  <div className={styles.container}>
    <button type="button">Show Dialog</button>
  </div>
);
