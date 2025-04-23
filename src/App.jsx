import GlobalStyles from "./styles/GlobalStyles";
import styled from "styled-components";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import LyricsWithBlanks from "./components/LyricsWithBlanks";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [selectedSong, setSelectedSong] = useState("");

  return (
    <>
      <GlobalStyles />
      <Container>
        <Header />
        <SearchBar selected={selectedSong} setSelected={setSelectedSong} />
        {selectedSong && <LyricsWithBlanks selected={selectedSong} />}
      </Container>
      <LyricsWithBlanks />
      <Footer />
    </>
  );
}

export default App;

const Container = styled.div`
  text-align: center;
  padding: 2rem;
  min-height: 100vh;
  border-top: 10px solid #ae1c28;
  border-bottom: 10px solid #21468b;

  @media (max-width: 768px) {
    padding: 1rem;
  }

  @media (max-width: 390px) {
    padding: 0.5rem;
    max-width: 100vw;
  }
`;
