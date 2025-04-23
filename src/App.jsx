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

  @media (max-width: 768px) {
    padding: 1rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem;
  }
`;
