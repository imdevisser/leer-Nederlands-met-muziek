import styled from "styled-components";

export const VideoWrapper = styled.div`
  margin-top: 32px;
  max-width: 350px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    max-width: 100%;
    margin-top: 16px;
  }
`;

export const Instruction = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const BlankWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;

  @media (max-width: 768px) {
    gap: 2px;
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
  font-size: 1rem;
  padding: 0;

  &:hover {
    color: #000;
  }
`;

export const Tooltip = styled.span`
  visibility: hidden;
  opacity: 0;
  width: max-content;
  max-width: 220px;
  background-color: #333;
  color: #fff;
  font-size: 0.75rem;
  text-align: left;
  border-radius: 6px;
  padding: 6px 8px;
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
    border-width: 5px;
    border-style: solid;
    border-color: #333 transparent transparent transparent;
  }
`;

export const FactHover = styled.span`
  position: absolute;
  bottom: 100%;
  left: 0;
  transform: translateY(-4px);
  background-color: #f1f1f1;
  color: #333;
  font-size: 0.8rem;
  padding: 8px 10px;
  border-radius: 4px;
  white-space: normal;
  max-width: 400px;
  width: max-content;

  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);

  visibility: hidden;
  opacity: 0;
  transition: opacity 0.2s ease;
  z-index: 10;

  @media (max-width: 768px) {
    font-size: 0.7rem;
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

export const CheckAnswersButton = styled.button`
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #45a049;
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 14px;
  }
`;

export const StyledBr = styled.br`
  line-height: 2;
  margin-bottom: 8px;
`;

export const Verse = styled.div`
  margin-bottom: 60px;
  line-height: 2;

  @media (max-width: 768px) {
    margin-bottom: 30px;
  }
`;

export const LyricsContainer = styled.div`
  background-color: #fffaf0;
  padding: 24px;
  border-radius: 12px;
  max-width: 1200px;
  margin: 40px auto;
  font-size: 20px;

  @media (max-width: 768px) {
    padding: 16px;
    font-size: 16px;
  }
`;

export const BlankInput = styled.input`
  padding: 6px 8px;
  margin: 0 6px;
  font-size: 18px;
  border: 2px solid #ccc;
  border-radius: 6px;
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
    font-size: 14px;
    padding: 4px 6px;
    width: 80px;
  }
`;
