import Navbar from "./Navbar";
import Footer from "./Footer";
import { MainLayoutContainer, MainSection } from "./MainLayout.styles";

function MainLayout({ children }: { children: JSX.Element }) {
  return (
    <MainLayoutContainer>
      <Navbar />
      <MainSection>{children}</MainSection>
      <Footer />
    </MainLayoutContainer>
  );
}

export default MainLayout;
