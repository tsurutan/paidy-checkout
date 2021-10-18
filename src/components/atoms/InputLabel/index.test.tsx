import { render, screen } from '@testing-library/react';
import { InputLabel } from './index';

describe(InputLabel.name, () => {
  const text = 'Press me!';
  const className = 'paidy-class';
  const id = 'label-id';

  beforeEach(() => {
    render(<InputLabel text={text} className={className} htmlFor={id} />);
  });

  it('should show text', () => {
    expect(screen.queryByText(text)).toBeInTheDocument();
  });

  it('should have htmlFor', () => {
    expect(screen.queryByText(text)).toHaveAttribute('for', id);
  });

  it('should have class', () => {
    expect(screen.queryByText(text)).toHaveClass(className);
  });
});
