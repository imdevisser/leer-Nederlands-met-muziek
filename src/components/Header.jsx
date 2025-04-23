import styled from "styled-components";

export default function Header() {
  return (
    <Head>
      <h1>🎶 Leer Nederlands met muziek! 🎶</h1>
    </Head>
  );
}

const Head = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;

  h1 {
    font-size: 7rem;
    line-height: 6rem;
    padding: 2rem;
    background: linear-gradient(90deg, #ae1c28, #21468b, #ff9f00);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 900;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);

    @media (max-width: 768px) {
      font-size: 4rem;
      line-height: 4rem;
      padding: 1rem;
    }

    @media (max-width: 480px) {
      font-size: 3rem;
      line-height: 3.4rem;
      padding: 0.8rem;
    }
  }
`;
