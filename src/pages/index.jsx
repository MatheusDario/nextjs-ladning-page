import styled from "styled-components";
const Paragraph = styled.h1`
  font-size: 16px;

  &:hover {
    color: ${(props) => props.$hovercolor};
  }
`;

export default function Home() {
  return (
    <Paragraph $hovercolor="red">
      I am a component made with Styled Components
    </Paragraph>
  );
}
