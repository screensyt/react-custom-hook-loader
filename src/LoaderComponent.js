import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 200px;
  width: 160px;
`;

const Loader = styled.div`
  font-size: 72px;
`;

function LoaderComponent() {
  return (
    <Container>
      <Loader>⌛</Loader>
    </Container>
  );
}

export default LoaderComponent;
