import { render, screen } from 'testUtils';
import { PrimaryLink } from './index';

describe(PrimaryLink.name, () => {
  const text = 'Press me!';
  const href = 'https://paidy.com';
  const className = 'paidy-class';

  beforeEach(() => {
    render(<PrimaryLink text={text} href={href} className={className} />);
  });

  it('should show text', () => {
    expect(screen.getByRole('link')).toHaveTextContent(text);
  });

  it('should have href', () => {
    expect(screen.getByRole('link')).toHaveAttribute('href', href);
  });

  it('should have class', () => {
    expect(screen.getByRole('link')).toHaveClass(className);
  });
});
