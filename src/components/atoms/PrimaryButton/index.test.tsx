import { fireEvent, render, screen } from 'testUtils';
import { PrimaryButton } from './index';

describe(PrimaryButton.name, () => {
  const text = 'Press me!';
  const className = 'paidy-class';
  const onClick = jest.fn();
  const type = 'submit';

  beforeEach(() => {
    render(
      <PrimaryButton
        text={text}
        className={className}
        onClick={onClick}
        type={type}
      />
    );
  });

  it('should show text', () => {
    expect(screen.getByRole('button')).toHaveTextContent(text);
  });

  it('should have type', () => {
    expect(screen.getByRole('button')).toHaveAttribute('type', type);
  });

  it('should have class', () => {
    expect(screen.getByRole('button')).toHaveClass(className);
  });

  describe('when button is clicked', () => {
    it('should call onClick', () => {
      fireEvent.click(screen.getByRole('button'));
      expect(onClick).toBeCalled();
    });
  });
});
