import { fireEvent, render, screen } from '@testing-library/react';
import { Dialog } from './index';

describe(Dialog.name, () => {
  const text = 'Press me!';
  const onClose = jest.fn();

  const renderDialog = (isOpen: boolean = true) => {
    render(
      <Dialog isOpen={isOpen} onClose={onClose}>
        {text}
      </Dialog>,
    );
  };

  it('should show text', () => {
    renderDialog();
    expect(screen.getByRole('dialog')).toHaveTextContent(text);
  });

  describe('when background is clicked', () => {
    it('should call onClose', () => {
      renderDialog();
      fireEvent.click(screen.getByRole('none'));
      expect(onClose).toBeCalled();
    });
  });

  describe('when isOpen is false', () => {
    it('should not display dialog', () => {
      renderDialog(false);
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });
  });
});
