import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 200px;
  width: 160px;
`;

const Warning = styled.div`
  font-size: 72px;
`;

function ErrorComponent(props) {
  return (
    <Container>
      <Warning>⚠️</Warning>
      <p>Error {props.error.statusCode}</p>
    </Container>
  );
}

export default ErrorComponent;