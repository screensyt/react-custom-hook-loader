import React from "react";
import styled from "styled-components";

import UserComponent from "./UserComponent";
import FetchData from "./FetchData";
import { fetchUser } from "./api";

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

function App() {
  return (
    <Container>
      <FetchData action={fetchUser(1)}>
        {(data) => {
          return <UserComponent user={data.data} />;
        }}
      </FetchData>
      <FetchData action={fetchUser(2)}>
        {(data) => {
          return <UserComponent user={data.data} />;
        }}
      </FetchData>
      <FetchData action={fetchUser(30000)}>
        {(data) => {
          return <UserComponent user={data.data} />;
        }}
      </FetchData>
    </Container>
  );
}

export default App;
