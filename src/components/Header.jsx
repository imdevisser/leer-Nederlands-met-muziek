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
  }
`;
