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
      {/* If this background component is clicked, dailog is closed */}
      <div className={styles.background} onClick={onClose} role="none" />
      <div className={styles.content} role="dialog">
        {children}
      </div>
    </div>
  );
};
