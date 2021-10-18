import { fireEvent, render, screen } from '@testing-library/react';
import { Input } from './index';

describe(Input.name, () => {
  const id = 'paidy-input';
  const value = 'Press me!';
  const className = 'paidy-class';
  const onChange = jest.fn();
  const onBlur = jest.fn();
  const type = 'email';
  const placeholder = 'some-placeholder';

  const renderInput = (isError: boolean = false) => {
    render(
      <Input
        id={id}
        type={type}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        className={className}
        placeholder={placeholder}
        isError={isError}
      />,
    );
  };

  it('should have id', () => {
    renderInput();
    expect(screen.getByRole('textbox')).toHaveAttribute('id', id);
  });

  it('should have value', () => {
    renderInput();
    expect(screen.getByRole('textbox')).toHaveAttribute('value', value);
  });

  it('should have class', () => {
    renderInput();
    expect(screen.getByRole('textbox')).toHaveAttribute('class', `container ${className}`);
  });

  it('should have type', () => {
    renderInput();
    expect(screen.getByRole('textbox')).toHaveAttribute('type', type);
  });

  it('should have placeholder', () => {
    renderInput();
    expect(screen.getByRole('textbox')).toHaveAttribute('placeholder', placeholder);
  });

  describe('when isError is true', () => {
    it('should have error class', () => {
      renderInput(true);
      expect(screen.getByRole('textbox')).toHaveAttribute('class', `container ${className} error`);
    });
  });

  describe('when user is typing', () => {
    it('should call onChange', () => {
      renderInput();
      fireEvent.change(screen.getByRole('textbox'), { target: { value: '090-' } });
      expect(onChange).toBeCalled();
    });
  });

  describe('when input focus is left', () => {
    it('should call onBlur', () => {
      renderInput();
      fireEvent.focusOut(screen.getByRole('textbox'));
      expect(onBlur).toBeCalled();
    });
  });
});
