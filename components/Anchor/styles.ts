import styled from "styled-components";

export const AnchorWrapper = styled.a`
  margin: auto;
  padding: 4px;
`;

export const AnchorText = styled.p`
  color: ${({ textColor }) => textColor};
`;
