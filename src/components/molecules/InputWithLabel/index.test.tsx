import { fireEvent, render, screen } from 'testUtils';
import { InputWithLabel } from './index';

describe(InputWithLabel.name, () => {
  const id = 'paidy-input';
  const value = 'Press me!';
  const label = 'paidy-label';
  const className = 'paidy-class';
  const onChange = jest.fn();
  const onBlur = jest.fn();
  const type = 'email';
  const placeholder = 'some-placeholder';

  const renderInputWithLabel = (errorMessage?: string) => {
    render(
      <InputWithLabel
        id={id}
        label={label}
        type={type}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        className={className}
        placeholder={placeholder}
        errorMessage={errorMessage}
      />
    );
  };

  it('should have id', () => {
    renderInputWithLabel();
    expect(screen.getByRole('textbox')).toHaveAttribute('id', id);
  });

  it('should have value', () => {
    renderInputWithLabel();
    expect(screen.getByRole('textbox')).toHaveAttribute('value', value);
  });

  it('should have class', () => {
    renderInputWithLabel();
    expect(screen.getByRole('textbox').parentNode).toHaveAttribute(
      'class',
      `container ${className}`
    );
  });

  it('should have type', () => {
    renderInputWithLabel();
    expect(screen.getByRole('textbox')).toHaveAttribute('type', type);
  });

  it('should have placeholder', () => {
    renderInputWithLabel();
    expect(screen.getByRole('textbox')).toHaveAttribute(
      'placeholder',
      placeholder
    );
  });

  it('should display label', () => {
    renderInputWithLabel();
    expect(screen.queryByText(label)).toBeInTheDocument();
  });

  describe('when error message is passed', () => {
    it('should show error message', () => {
      const errorMessage = 'Something error';
      renderInputWithLabel(errorMessage);
      expect(screen.queryByText(errorMessage)).toBeInTheDocument();
    });
  });

  describe('when user is typing', () => {
    it('should call onChange', () => {
      renderInputWithLabel();
      fireEvent.change(screen.getByRole('textbox'), {
        target: { value: '090-' }
      });
      expect(onChange).toBeCalled();
    });
  });

  describe('when input focus is left', () => {
    it('should call onBlur', () => {
      renderInputWithLabel();
      fireEvent.focusOut(screen.getByRole('textbox'));
      expect(onBlur).toBeCalled();
    });
  });
});
