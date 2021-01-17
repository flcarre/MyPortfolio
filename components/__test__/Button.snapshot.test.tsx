import React from "react";
import renderer from "react-test-renderer";

import Button from "../Button/Button";

it("renders correctly", () => {
  const tree = renderer.create(<Button text="Some Text" onClick={() => null} />).toJSON();
  expect(tree).toMatchSnapshot();
});
