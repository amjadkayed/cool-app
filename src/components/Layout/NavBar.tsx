import { Link } from "react-router-dom";
import { NavItem } from "./types";
import { StyledNavbar, NavbarContainer, NavbarItem } from "./Navbar.styles";

const navItems: NavItem[] = [
  { name: "Home", path: "/" },
  { name: "Todo List", path: "/todo-list" },
  { name: "About me", path: "/about-me" },
];

function Navbar() {
  return (
    <StyledNavbar>
      <NavbarContainer>
        {navItems.map(({ path, name }) => (
          <Link to={path} key={name}>
            <NavbarItem>{name}</NavbarItem>
          </Link>
        ))}
      </NavbarContainer>
    </StyledNavbar>
  );
}

export default Navbar;
