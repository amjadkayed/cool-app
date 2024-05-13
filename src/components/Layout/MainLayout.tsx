import NavBar from "./NavBar";
import Footer from "./Footer";
import { MainLayoutContainer, MainSection } from "./MainLayout.styles";

function MainLayout({ children }: { children: JSX.Element }) {
  return (
    <MainLayoutContainer>
      <NavBar />
      <MainSection>{children}</MainSection>
      <Footer />
    </MainLayoutContainer>
  );
}

export default MainLayout;
