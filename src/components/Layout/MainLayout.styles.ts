import styled from "styled-components";

export const MainLayoutContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 100vw;
`;

export const MainSection = styled.main`
  margin-top: var(--navbar-height);
  padding-top: 20px;
  padding-bottom: 20px;
  padding-right: var(--x-padding);
  padding-left: var(--x-padding);
`;
