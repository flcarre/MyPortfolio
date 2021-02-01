import styled from "styled-components";

export const LayoutContainer = styled.div`
  height: 100%;
  width: 100%;
`;

export const SwitcherContainer = styled.div`
  position: absolute;
  top: 40px;
  right: 40px;
`;

export const BackgroundContainer = styled.div`
  background-color: ${({ backgroundColor }) => backgroundColor};
  height: 100vh;
  width: 100vw;
`;

export const MainPartContainer = styled.div`
  display: flex;
  justify-items: auto;
`;

export const SideBarContainer = styled.div`
  position: fixed;
  height: 100vh;
  width: 10%;
`;

export const ChildrenContainer = styled.div`
  margin-left: 10%;
`;
