import styled from "styled-components";

export default function Footer() {
  return (
    <FooterWrapper>
      <p>Copyright © Irmarie de Visser</p>
      <a href="mailto:irmarie@nederlandsvoorafrikaans.nl">
        📧 irmarie@nederlandsvoorafrikaans.nl
      </a>
      <a
        href="https://www.nederlandsvoorafrikaans.nl"
        target="_blank"
        rel="noopener noreferrer"
      >
        🌐 www.nederlandsvoorafrikaans.nl
      </a>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.footer`
  display: flex;
  gap: 4rem;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background-color: #f8f8f8;

  p,
  a {
    font-size: 1.2rem;
    line-height: 1.5;
    padding: 0.5rem;
    text-align: center;
    color: #333;
    text-decoration: none;
  }

  a:hover {
    color: #0077cc;
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    p,
    a {
      font-size: 1rem;
    }
  }

  @media (max-width: 480px) {
    p,
    a {
      font-size: 0.9rem;
    }
  }
`;
