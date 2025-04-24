import styled, { keyframes } from "styled-components";
import welcometext from "../data/welcometext.json";
import song1 from "../data/songs/song1.json";
import song2 from "../data/songs/song2.json";
import song3 from "../data/songs/song3.json";
import song4 from "../data/songs/song4.json";
import song5 from "../data/songs/song5.json";

export default function SearchBar({ selected, setSelected }) {
  return (
    <Dropdown>
      <Label htmlFor="dropdown">Kies een nummer uit de lijst:</Label>
      <Wrapper>
        <Select
          id="dropdown"
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
        >
          <option value="">--- Selecteer ⬇️ ---</option>

          <optgroup label="Makkelijk">
            <option value="song1">
              {song1.artist} - {song1.title}
            </option>
            <option value="song4">
              {song4.artist} - {song4.title}
            </option>
            <option value="song5">
              {song5.artist} - {song5.title}
            </option>
          </optgroup>

          <optgroup label="Moelijk">
            <option value="song2">
              {song2.artist} - {song2.title}
            </option>
            <option value="song3">
              {song3.artist} - {song3.title}
            </option>
          </optgroup>
        </Select>
      </Wrapper>
      {!selected && <WelcomeText>{welcometext.noSongSelected}</WelcomeText>}
    </Dropdown>
  );
}

const Dropdown = styled.div`
  p {
    line-height: 5rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 1rem;
  }
`;

const Label = styled.label`
  margin-bottom: 0.8rem;
  font-size: 2rem;
  display: block;
  font-weight: 600;
  line-height: 5rem;

  @media (max-width: 768px) {
    font-size: 1.6rem;
    line-height: 4rem;
  }
`;

const Wrapper = styled.div`
  display: inline-block;
  position: relative;
  font-family: sans-serif;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Select = styled.select`
  padding: 1rem 1.6rem;
  font-size: 1.6rem;
  border-radius: 0.8rem;
  border: 1px solid #ccc;
  background: white;
  appearance: none;
  cursor: pointer;
  text-align: center; //  (for Firefox)
  text-align-last: center; //  (for Chrome/Edge)

  &:hover {
    border-color: #888;
  }

  &:focus {
    outline: none;
    border-color: #555;
  }

  @media (max-width: 768px) {
    font-size: 1.4rem;
    padding: 0.8rem 1.2rem;
  }
`;

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const WelcomeText = styled.p`
  background: linear-gradient(90deg, #c66069, #647eae);
  color: #fffaf0;
  padding: 2.4rem;
  border-radius: 1.2rem;
  max-width: 50rem;
  margin: 8rem auto;
  font-size: 1.8rem;
  text-align: center;

  animation: ${fadeInUp} 1s ease-out both;

  @media (max-width: 768px) {
    padding: 1rem;
    font-size: 1.6rem;
  }
`;
