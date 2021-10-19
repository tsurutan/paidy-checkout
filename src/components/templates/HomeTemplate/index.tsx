import { CheckoutDialog } from 'components/organisms';
import { useCallback, useState, VFC } from 'react';
import styles from './styles.module.scss';

// This component is responsible for layout.
export const HomeTemplate: VFC = () => {
  // This is the sample function to open dialog.
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
      <CheckoutDialog
        isOpen={isOpenDialog}
        onClose={closeDialog}
        shopName="SHOP NAME"
        price={99999}
      />
    </div>
  );
};
