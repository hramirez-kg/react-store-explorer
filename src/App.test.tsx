import { shallow } from "enzyme";

import App from "./App";

describe("App", () => {
  it("renders App Component", () => {
    shallow(<App />);
  });
});