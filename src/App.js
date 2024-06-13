import "./App.css";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import { createTheme,ThemeProvider,Container } from "@mui/material";

const theme = createTheme({
   palette : {
    primary : {
      main:'#80BFFF'
    }
   }
})


function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <NavBar/>
      <Container>
      <HeroSection />

      </Container>
    </ThemeProvider>
     
    </>
  );
}

export default App;
