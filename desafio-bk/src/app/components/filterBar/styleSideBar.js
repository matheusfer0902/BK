import styled from "styled-components";

export const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 30%;
  height: 100%;
  background-color: #09090b;
  box-shadow: -4px 0 10px rgba(0, 0, 0, 0.2);
  padding: 20px;
  z-index: 1000;
  font-family: "Inter", sans-serif;
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

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  h2 {
    margin: 0;
    font-size: 1.25rem;
    color: #fff;
  }

  span {
    font-size: 0.875rem;
    color: #71717a;
    display: block;
    margin-top: 4px;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;

  .label-title {
    margin-bottom: 8px;
    font-size: 0.875rem;
    color: #ccc;
  }

  .buttons-container {
    display: flex;
    justify-content: flex-end;
    gap: 10px; /* Espaço entre os botões */
  }
`;

export const Input = styled.input`
  padding: 16px;
  font-size: 1rem;
  border: 1px solid #27272a;
  border-radius: 8px;
  background: #09090b;
  color: #fff;
  width: 100%;
`;

export const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: #2dd4bf;
  color: #042f2e;
  font-size: 1rem;
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  height: 40px;

  &:hover {
    background: #00a853;
  }

  svg {
    font-size: 1.2rem;
  }
`;

export const ClearButton = styled.button`
  background: #09090b;
  color: #71717a;
  font-size: 1rem;
  padding: 8px 16px;
  border: 1px solid #27272a;
  border-radius: 6px;
  cursor: pointer;
  height: 40px;

  &:hover {
    background: #71717a;
    color: #09090b;
  }
`;
