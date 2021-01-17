import React from "react";
import Button from "../Button/Button";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer.create(<Button text="Some Text" onClick={() => { }} />).toJSON();
  expect(tree).toMatchSnapshot();
});
