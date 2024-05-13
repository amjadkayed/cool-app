import styled from "styled-components";

export const StyledFooter = styled.footer`
  height: var(--footer-height);
  width: 100%;
  background-color: ${(props) => props.theme.layout.footer.backgroundColor};
`;
