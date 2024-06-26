import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "./App.styles";
import MainLayout from "./components/Layout/MainLayout";
import { ThemeProvider } from "./context/ThemeContext";
import AppRoutes from "./routes";
import { useOverlayScrollbars } from "overlayscrollbars-react";
import { useEffect } from "react";
import "overlayscrollbars/overlayscrollbars.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  const [initBodyOverlayScrollbars] = useOverlayScrollbars({
    defer: true,
    options: {
      scrollbars: {
        autoHide: "scroll",
        autoHideDelay: 500,
        visibility: "auto",
        theme: "os-theme-light",
      },
    },
  });

  useEffect(() => {
    initBodyOverlayScrollbars(document.body);
  }, [initBodyOverlayScrollbars]);

  return (
    <BrowserRouter>
      <DndProvider backend={HTML5Backend}>
        <ThemeProvider>
          <GlobalStyles />
          <MainLayout>
            <AppRoutes />
          </MainLayout>
        </ThemeProvider>
      </DndProvider>
    </BrowserRouter>
  );
}

export default App;
