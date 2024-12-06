import styled from "styled-components";

export const Sidebar = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  width: 400px;
  background-color: #1c1c1c;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

export const SidebarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  h2 {
    font-size: 1.25rem;
  }
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;

  &:hover {
    color: #888;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #333;
  border-radius: 4px;
  background-color: #222;
  color: white;

  &:focus {
    outline: none;
    border-color: #1db954;
  }
`;

export const Select = styled.select`
  padding: 0.5rem;
  border: 1px solid #333;
  border-radius: 4px;
  background-color: #222;
  color: white;
`;

export const Button = styled.button`
  background-color: #1db954;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #17a44f;
  }
`;