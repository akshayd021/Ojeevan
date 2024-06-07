import "./App.css";
import { Footer, Home, Navbar, theme } from "./componets";
import { CssBaseline, ThemeProvider } from "@mui/material";

function App() {
  return (

      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Home />
        <Footer />
      </ThemeProvider>
  );
}

export default App;
