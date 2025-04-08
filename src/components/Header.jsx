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

  h1 {
    font-size: 50px;
    line-height: 70px;
    padding: 20px;

    @media (max-width: 768px) {
      font-size: 28px;
      line-height: 40px;
      padding: 10px;
    }

    @media (max-width: 480px) {
      font-size: 22px;
      line-height: 34px;
      padding: 8px;
    }
  }
`;
