import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { darkTheme } from "./utils/Theme";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

// Global styles to apply the dark theme across the entire application
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.text_primary};
    font-family: 'Arial', sans-serif;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background: ${({ theme }) => theme.bg};
  overflow-x: hidden;
  overflow-y: hidden;
  transition: all 0.3s ease;
`;

const Wrapper = styled.div`
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  display: flex;
  flex: 3;
  position: relative;
`;

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <Container>
        <Wrapper>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} exact />
              <Route path="/post" element={<CreatePost />} exact />
            </Routes>
          </BrowserRouter>
        </Wrapper>
      </Container>
    </ThemeProvider>
  );
}

export default App;
