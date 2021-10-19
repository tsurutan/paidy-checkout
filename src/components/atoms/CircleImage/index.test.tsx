import { render, screen } from "testUtils";
import { CircleImage } from "./index";

describe(CircleImage.name, () => {
  const imageUrl = "/icons/paidy.png";
  const className = "paidy-class";
  const alt = "paidy-image";

  beforeEach(() => {
    render(<CircleImage imageUrl={imageUrl} className={className} alt={alt} />);
  });

  it("should have alt", () => {
    expect(screen.getByRole("img")).toHaveAttribute("alt", alt);
  });

  it("should have src", () => {
    expect(screen.getByRole("img")).toHaveAttribute("src", imageUrl);
  });

  it("should have class", () => {
    expect(screen.getByRole("img").parentNode).toHaveClass(className);
  });
});
