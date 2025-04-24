import {
  Verse,
  LyricsContainer,
  StyledBr,
  AnswerWord,
} from "../styles/LyricsStyles";

export default function LyricsAnswers({ lyrics }) {
  if (!lyrics) return null;

  return (
    <LyricsContainer>
      {lyrics.map((verse, verseIndex) => (
        <Verse key={verseIndex}>
          {verse.map((part, index) => {
            if (part.type === "text") {
              return <span key={index}>{part.text}</span>;
            } else if (part.type === "blank") {
              return <AnswerWord key={index}>{part.answer}</AnswerWord>;
            } else if (part.type === "newline") {
              return <StyledBr key={index} />;
            }
            return null;
          })}
        </Verse>
      ))}
    </LyricsContainer>
  );
}
