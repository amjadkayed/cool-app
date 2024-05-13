import GlobalStyles from "./App.styles";
import MainLayout from "./components/Layout/MainLayout";
import { ThemeProvider } from "./context/ThemeContext";
import AppRoutes from "./routes";

function App() {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <MainLayout>
        <AppRoutes />
      </MainLayout>
    </ThemeProvider>
  );
}

export default App;
