import "./App.css";
import ViewportProvider from "./Context/ViewPortProvider";
import { About, Footer, Home, Navbar, theme } from "./componets";
import { CssBaseline, ThemeProvider } from "@mui/material";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ViewportProvider>
        <CssBaseline />
        <Navbar />
        {/* <Home /> */}
        <About />
        <Footer />
      </ViewportProvider>
    </ThemeProvider>
  );
}

export default App;
