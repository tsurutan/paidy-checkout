import { render } from "@testing-library/react";

const Wrapper = ({ children }) => (
  <div>
    <div id="dialog" />
    <div>{children}</div>
  </div>
);

const customRender = (ui, options?) =>
  render(ui, { wrapper: Wrapper, ...options });

export * from "@testing-library/react";

export { customRender as render };
