import { CheckoutDialog } from 'components/organisms';
import { useCallback, useState, VFC } from 'react';
import styles from './styles.module.scss';

export const HomeTemplate: VFC = () => {
  const [isOpenDialog, setIsOpenDialog] = useState(false);

  const showDialog = useCallback(() => {
    setIsOpenDialog(true);
  }, []);
  const closeDialog = useCallback(() => {
    setIsOpenDialog(false);
  }, []);

  return (
    <div className={styles.container}>
      <button type="button" onClick={showDialog}>
        Show Dialog
      </button>
      <CheckoutDialog isOpen={isOpenDialog} onClose={closeDialog} />
    </div>
  );
};
