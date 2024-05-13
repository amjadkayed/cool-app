import styled from "styled-components";

export const StyledFooter = styled.footer`
  min-height: var(--footer-height);
  max-width: 100vw;
  display: flex;
  background-color: ${(props) => props.theme.layout.footer.backgroundColor};
  color: ${(props) => props.theme.layout.footer.textColor};
  padding: 20px;
  padding-right: var(--x-padding);
  padding-left: var(--x-padding);
`;
