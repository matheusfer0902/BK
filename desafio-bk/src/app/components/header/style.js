import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
`;

export const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

export const UserProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
`;
