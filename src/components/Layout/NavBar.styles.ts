import styled from "styled-components";

export const StyledNavBar = styled.header`
  height: var(--navbar-height);
  width: 100%;
  background-color: ${(props) => props.theme.layout.navbar.backgroundColor};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
`;
