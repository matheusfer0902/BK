import styled from "styled-components";

export const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 30%;
  height: 100%;
  background-color: #1f1f1f;
  box-shadow: -4px 0 10px rgba(0, 0, 0, 0.2);
  padding: 20px;
  z-index: 1000;
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
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #444;
  border-radius: 5px;
  background: #333;
  color: #fff;
`;

export const SubmitButton = styled.button`
  background: #00cc66;
  color: #fff;
  font-size: 1rem;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: #00a853;
  }
`;
