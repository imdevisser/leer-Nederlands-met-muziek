import styled from "styled-components";

export const VideoWrapper = styled.div`
  margin-top: 3.2rem;
  max-width: 35rem;
  margin-left: auto;
  margin-right: auto;
  border-radius: 1.2rem;
  overflow: hidden;
  box-shadow: 0 0.4rem 2rem rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    max-width: 50%;
    margin-top: 1.6rem;
  }
`;

export const LyricsContainer = styled.div`
  // background-color: #fffaf0;
  background: linear-gradient(90deg, #ae1c28, #21468b);
  color: #fffaf0;
  padding: 2.4rem;
  border-radius: 1.2rem;
  max-width: 120rem;
  margin: 4rem auto;
  font-size: 1.8rem;

  @media (max-width: 768px) {
    padding: 1rem;
    font-size: 1.6rem;
  }
`;

export const Verse = styled.div`
  line-height: 2.5;

  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }
`;

export const Instruction = styled.p`
  font-size: 2rem;
  font-weight: bold;
  color: #fffaf0;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

export const FactHover = styled.span`
  position: absolute;
  bottom: 100%;
  left: 0;
  transform: translateY(-4px);
  background-color: #f1f1f1;
  color: #333;
  font-size: 1.8rem;
  padding: 0.8rem 1rem;
  border-radius: 0.4rem;
  white-space: normal;
  max-width: 40rem;
  width: max-content;

  box-shadow: 0 0.2rem 0.6rem rgba(0, 0, 0, 0.1);

  visibility: hidden;
  opacity: 0;
  transition: opacity 0.2s ease;
  z-index: 10;

  /* Make sure it stays inside the viewport */
  overflow-wrap: break-word;
  word-break: break-word;
  box-sizing: border-box;

  /* Keep it from overflowing screen on mobile */
  @media (max-width: 768px) {
    font-size: 1.2rem;
    max-width: 90vw;
    left: 50%;
    transform: translateX(-50%) translateY(-4px);
  }
`;

export const FactHoverWrapper = styled.span`
  position: relative;
  cursor: help;
  display: inline-block;

  &:focus ${FactHover}, &:hover ${FactHover} {
    opacity: 1;
    visibility: visible;
  }
`;

export const BlankWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;

  @media (max-width: 768px) {
    gap: 0.2rem;
  }
`;

export const BlankInput = styled.input.attrs({
  autoCapitalize: "off",
  autoCorrect: "off",
})`
  padding: 0.6rem 0.8rem;
  font-size: 1.8rem;
  border: 0.2rem solid #ccc;
  border-radius: 0.6rem;
  text-align: center;
  transition: border-color 0.3s;

  ${(props) =>
    props.isCorrect &&
    `
      border-color: green;
      background-color: #e0f9e0;
    `}

  ${(props) =>
    props.isIncorrect &&
    `
      border-color: red;
      background-color: #f9e0e0;
    `}

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 0.4rem 0.6rem;
    width: 8rem;
  }
`;

export const HintWrapper = styled.span`
  position: relative;
  display: inline-block;
`;

export const HintIcon = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #888;
  font-size: 2rem;
  padding: 0;

  &:hover {
    color: #000;
  }
`;

export const Tooltip = styled.span`
  visibility: hidden;
  opacity: 0;
  width: max-content;
  max-width: 22rem;
  background-color: #333;
  color: #fff;
  font-size: 1.2rem;
  text-align: left;
  border-radius: 0.6rem;
  padding: 0.6rem 0.8rem;
  position: absolute;
  z-index: 1;
  bottom: 125%; /* Show above icon */
  left: 50%;
  transform: translateX(-50%);
  transition: opacity 0.2s ease-in-out;

  ${HintWrapper}:hover & {
    visibility: visible;
    opacity: 1;
  }

  &::after {
    content: "";
    position: absolute;
    top: 100%; /* Arrow pointing down */
    left: 50%;
    transform: translateX(-50%);
    border-width: 0.5rem;
    border-style: solid;
    border-color: #333 transparent transparent transparent;
  }
`;

export const CheckAnswersButton = styled.button`
  padding: 2rem 3rem;
  background-color: #ff9f00;
  color: white;
  font-size: 1.8rem;
  border: none;
  border-radius: 0.6rem;
  cursor: pointer;
  margin-top: 1rem;
  margin-bottom: 6rem;

  &:hover {
    background-color: #ff9f00;
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    padding: 0.8rem 1.6rem;
    font-size: 1.4rem;
  }
`;

export const StyledBr = styled.br`
  line-height: 2;
  margin-bottom: 0.8rem;
`;

export const AnswerWord = styled.span`
  font-weight: bold;
  text-decoration: underline dotted;
  color: #888;
  font-size: 2rem;
  margin: 0 2px;
`;

export const ToggleAnswersButton = styled.button`
  margin: 1.5rem;
  padding: 1rem 2rem;
  background-color: #888;
  color: white;
  border: none;
  border-radius: 0.8rem;
  font-size: 1.6rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1a3469;
  }
`;
