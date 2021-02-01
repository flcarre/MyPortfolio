import styled from "styled-components";

export const SideBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  border-right: 1px solid ${({ borderColor }) => borderColor};
`;

export const AnchorContainer = styled.div`
  display: grid;
  justify-content: center;
  text-align: center;
  margin: auto;
`;
