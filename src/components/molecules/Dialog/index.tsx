import { ReactNode, useEffect, useState, VFC } from 'react';
import { createPortal } from 'react-dom';
import styles from './styles.module.scss';

type Props = {
  readonly children: ReactNode;
  readonly onClose: () => void;
  readonly isOpen: boolean;
};

export const Dialog: VFC<Props> = ({ children, onClose, isOpen }) => {
  const [container, setContainer] = useState<HTMLElement | undefined>();

  useEffect(() => {
    setContainer(document.getElementById('dialog'));
  }, []);

  if (!isOpen) return null;

  // use createPortal to deal with parent node which uses position: relative
  return container
    ? createPortal(
        <div className={styles.container}>
          {/* If this background component is clicked, dialog is closed */}
          <div className={styles.background} onClick={onClose} role="none" />
          <div className={styles.content} role="dialog">
            {children}
          </div>
        </div>,
        container
      )
    : null;
};
