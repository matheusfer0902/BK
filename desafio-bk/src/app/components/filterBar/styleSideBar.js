import styled from "styled-components";

export const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 30%;
  height: 100%;
  background-color: #09090B;
  box-shadow: -4px 0 10px rgba(0, 0, 0, 0.2);
  padding: 20px;
  z-index: 1000;
  font-family: "Inter", sans-serif
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 20px;

  .label-title {
    margin-bottom: 8px;
  }
`;

export const Input = styled.input`
  padding: 16px;
  font-size: 1rem;
  border: 1px solid #27272A;
  border-radius: 8px;
  background: #09090B;
  color: #fff;
  width: 100%; 
`;

export const SubmitButton = styled.button`
  background: #2DD4BF;
  color: #042F2E;
  font-size: 1rem;
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin-left: 10px;
  height: 32px; 

  &:hover {
    background: #00a853;
  }
`;

export const ClearButton = styled.button`
  background: #09090B;
  color: #71717A;
  font-size: 1rem;
  padding: 8px 16px;
  border: 1px solid #27272A;
  border-radius: 6px;
  cursor: pointer;
  height: 32px;

  &:hover {
    background: #71717A;
    color: #09090B;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;  
`;

export const TextContainer = styled.div`
  margin-bottom: 10px; 
`;

