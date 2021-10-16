---
to: <%= absPath %>/index.tsx
---
import { VFC } from 'react';
import styles from './styles.module.scss';

type Props = {};

export const <%= componentName %>: VFC<Props> = ({}) => {
  return (
    <div className={styles.container}>
    </div>
  );
}
