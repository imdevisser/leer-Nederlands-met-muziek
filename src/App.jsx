import GlobalStyles from "./styles/GlobalStyles";
import styled from "styled-components";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import LyricsWithBlanks from "./components/LyricsWithBlanks";
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
    </>
  );
}

export default App;

const Container = styled.div`
  text-align: center;
  padding: 20px;
`;
