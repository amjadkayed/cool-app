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

export const NavbarContainer = styled.nav`
  padding-right: var(--x-padding);
  padding-left: var(--x-padding);
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

export const NavbarItem = styled.div`
  transition: scale 0.1s ease;
  color: ${(props) => props.theme.layout.Navbar.textColor};
  font-size: ${(props) => props.theme.layout.Navbar.textSize};
  cursor: pointer;
  &:hover {
    font-weight: bold;
    background: linear-gradient(-45deg, #4a90e2, #6a1b9a, #d32f2f);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    scale: 1.05;
  }
`;
