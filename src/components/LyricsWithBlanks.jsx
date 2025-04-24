import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import LyricsAnswers from "./LyricsAnswers";

import song1 from "../data/songs/song1.json";
import song2 from "../data/songs/song2.json";
import song3 from "../data/songs/song3.json";
import song4 from "../data/songs/song4.json";
import song5 from "../data/songs/song5.json";

import {
  VideoWrapper,
  Instruction,
  BlankWrapper,
  HintWrapper,
  HintIcon,
  Tooltip,
  FactHover,
  FactHoverWrapper,
  CheckAnswersButton,
  ToggleAnswersButton,
  StyledBr,
  Verse,
  LyricsContainer,
  BlankInput,
} from "../styles/LyricsStyles";

const songs = {
  song1,
  song2,
  song3,
  song4,
  song5,
};

export default function LyricsWithBlanks({ selected }) {
  const [inputs, setInputs] = useState({});
  const [feedback, setFeedback] = useState({});
  const [showAnswers, setShowAnswers] = useState(false);

  const songData = songs[selected];

  useEffect(() => {
    // Reset state when a new song is selected
    setInputs({});
    setFeedback({});
    setShowAnswers(false);
  }, [selected]);

  if (!songData) return null;

  const handleChange = (key, value) => {
    setInputs((prev) => ({ ...prev, [key]: value }));
  };

  const checkAnswers = () => {
    const newFeedback = {};

    songData.lyrics.forEach((verse, verseIndex) => {
      verse.forEach((part, index) => {
        if (part.type === "blank") {
          const userAnswer = inputs[`${verseIndex}-${index}`]?.toLowerCase();
          const correctAnswer = part.answer.toLowerCase();
          newFeedback[`${verseIndex}-${index}`] =
            userAnswer === correctAnswer ? "correct" : "incorrect";
        }
      });
    });

    setFeedback(newFeedback);
  };

  return (
    <>
      <VideoWrapper>
        <ReactPlayer
          url={songData.youtube}
          controls
          width="100%"
          height="180px"
        />
      </VideoWrapper>

      <LyricsContainer>
        {songData.lyrics.map((verse, verseIndex) => (
          <Verse key={verseIndex}>
            {verse.map((part, index) => {
              if (part.type === "instruction") {
                return <Instruction key={index}>{part.text}</Instruction>;
              } else if (part.type === "text") {
                if (part.fact) {
                  return (
                    <FactHoverWrapper key={index} tabIndex="0">
                      {/* <em>{part.text}</em> */}
                      <span>{part.text} ℹ️</span>
                      <FactHover>{part.fact}</FactHover>
                    </FactHoverWrapper>
                  );
                }
                return <span key={index}>{part.text}</span>;
              } else if (part.type === "blank") {
                const inputKey = `${verseIndex}-${index}`;
                return (
                  <BlankWrapper key={index}>
                    <BlankInput
                      value={inputs[inputKey] || ""}
                      onChange={(e) => handleChange(inputKey, e.target.value)}
                      isCorrect={feedback[inputKey] === "correct"}
                      isIncorrect={feedback[inputKey] === "incorrect"}
                    />

                    {part.hint && (
                      <HintWrapper>
                        <HintIcon>💡</HintIcon>
                        <Tooltip>{part.hint}</Tooltip>
                      </HintWrapper>
                    )}
                  </BlankWrapper>
                );
              } else if (part.type === "newline") {
                return <StyledBr key={index} />;
              }
              return null;
            })}
          </Verse>
        ))}
      </LyricsContainer>

      <CheckAnswersButton onClick={checkAnswers}>
        Check je antwoorden
      </CheckAnswersButton>

      <ToggleAnswersButton onClick={() => setShowAnswers(!showAnswers)}>
        {showAnswers ? "Verberg oplossing" : "Toon oplossing"}
      </ToggleAnswersButton>

      {showAnswers && <LyricsAnswers lyrics={songData.lyrics} />}
    </>
  );
}
