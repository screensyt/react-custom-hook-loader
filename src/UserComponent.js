import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
  margin: 16px;
  height: 200px;
  width: 160px;
`;

const Name = styled.p`
  font-size: 20px;
  margin: 16px 0 4px 0;
  color: rgba(0, 0, 0, 0.87);
`;

const Email = styled.p`
  font-size: 14px;
  margin: 4px 0;
  color: rgba(0, 0, 0, 0.54);
`;

const Avatar = styled.img`
  height: 128px;
  width: 128px;
  border-radius: 50%;
`;

function UserComponent({ user }) {
  return (
    <Container>
      <Avatar src={user.avatar} />
      <Name>{`${user.first_name} ${user.last_name}`}</Name>
      <Email>{user.email}</Email>
    </Container>
  );
}

export default UserComponent;
