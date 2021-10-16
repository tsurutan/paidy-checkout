import { ReactNode, VFC } from 'react';
import styles from './styles.module.scss';

type Props = {
  readonly children: ReactNode;
  readonly onClose: () => void;
  readonly isOpen: boolean;
};

export const Dialog: VFC<Props> = ({ children, onClose, isOpen }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.container}>
      <div className={styles.background} />
      <div className={styles.content} role="dialog">
        <button onClick={onClose} type="button">
          close
        </button>
        {children}
      </div>
    </div>
  );
};
