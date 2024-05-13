import styled from "styled-components";

export const StyledNavbar = styled.header`
  height: var(--navbar-height);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.layout.Navbar.backgroundColor};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
`;

export const NavbarContainer = styled.div`
  padding-right: var(--x-padding);
  padding-left: var(--x-padding);
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 50px;
  align-items: center;
  height: 100%;
`;

export const NavbarItem = styled.div`
  color: ${(props) => props.theme.layout.Navbar.textColor};
  font-size: ${(props) => props.theme.layout.Navbar.textSize};
  cursor: pointer;
`;
