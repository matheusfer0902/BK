import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 16px 0 16px;
`;

export const UserProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end; 

  .username {
    font-weight: 500;
    color: #FAFAFA; 
  }

  .email {
    font-size: 0.9rem;
    color: gray; 
  }
`;

