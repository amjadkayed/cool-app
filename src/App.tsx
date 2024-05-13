import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "./App.styles";
import MainLayout from "./components/Layout/MainLayout";
import { ThemeProvider } from "./context/ThemeContext";
import AppRoutes from "./routes";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <GlobalStyles />
        <MainLayout>
          <AppRoutes />
        </MainLayout>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
