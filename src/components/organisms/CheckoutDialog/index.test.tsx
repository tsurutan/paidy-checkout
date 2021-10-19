import { render, screen } from "testUtils";
import { CheckoutDialog } from "./index";

describe(CheckoutDialog.name, () => {
  const shopName = "SHOP NAME";
  const price = 2000;

  beforeEach(() => {
    render(
      <CheckoutDialog
        shopName={shopName}
        price={price}
        onClose={jest.fn()}
        isOpen
      />
    );
  });

  it("should show shopName", () => {
    expect(screen.queryByText(shopName)).toBeInTheDocument();
  });

  it("should show price", () => {
    expect(screen.queryByText("¥2,000")).toBeInTheDocument();
  });

  it("should show email label", () => {
    expect(screen.queryByText("メールアドレス")).toBeInTheDocument();
  });

  it("should have email input", () => {
    expect(screen.queryAllByRole("textbox")[0]).toHaveAttribute(
      "type",
      "email"
    );
  });

  it("should show phone number label", () => {
    expect(screen.queryByText("携帯電話番号")).toBeInTheDocument();
  });

  it("should have tel input", () => {
    expect(screen.queryAllByRole("textbox")[1]).toHaveAttribute("type", "tel");
  });

  it("should show submit button", () => {
    expect(screen.getByRole("button")).toHaveTextContent("次へ");
  });

  it("should show term link", () => {
    expect(screen.getByText("利用規約・個人情報取扱条項")).toHaveAttribute(
      "href",
      "/terms"
    );
  });
});
