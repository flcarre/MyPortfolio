import { mount } from "enzyme";
import React from "react";

import Home from "../../pages/index";

describe("Pages", () => {
  describe("Home", () => {
    it("should render without throwing an error", function () {
      mount(<Home />);
    });
  });
});
