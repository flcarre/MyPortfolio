import React from "react";
import { mount } from "enzyme";
import Layout from "../Layout/Layout";

describe("Layout", () => {
  it("should render without throwing an error", function () {
    const wrap = mount(<Layout>Test text</Layout>);
    expect(wrap.find("#children").text()).toBe("Test text");
  });
});
