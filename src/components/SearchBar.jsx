import styled from "styled-components";
import song1 from "../data/songs/song1.json";
import song2 from "../data/songs/song2.json";
import song3 from "../data/songs/song3.json";

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
          <option value="song1">
            {song1.artist} - {song1.title}
          </option>
          <option value="song2">
            {song2.artist} - {song2.title}
          </option>
          <option value="song3">
            {song3.artist} - {song3.title}
          </option>
        </Select>
      </Wrapper>
    </Dropdown>
  );
}

const Dropdown = styled.div`
  p {
    line-height: 50px;
  }
`;

const Label = styled.label`
  margin-bottom: 8px;
  display: block;
  font-weight: 600;
  line-height: 50px;
`;

const Wrapper = styled.div`
  display: inline-block;
  position: relative;
  font-family: sans-serif;
`;

const Select = styled.select`
  padding: 10px 16px;
  font-size: 16px;
  border-radius: 8px;
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
`;
