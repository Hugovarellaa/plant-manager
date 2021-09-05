import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;

  scroll-snap-type: Y mandatory;
  overflow-y: scroll;
`;

export const OverlayRoot = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;
