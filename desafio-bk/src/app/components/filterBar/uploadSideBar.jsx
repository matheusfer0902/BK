import React from "react";
import { SidebarContainer, CloseButton, Form, Input, SubmitButton } from "./styleSideBar";

const UploadSidebar = ({ onClose }) => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Formulário enviado!");
    onClose();
  };

  return (
    <SidebarContainer>
      <CloseButton onClick={onClose}>X</CloseButton>
      <h2>Upload Media</h2>
      <p>Put the best files for BK Beta. 👋</p>
      <Form onSubmit={handleFormSubmit}>
        <label>
          Category:
          <Input type="text" placeholder="Select category" required />
        </label>
        <label>
          Title:
          <Input type="text" placeholder="Type your Title Media" required />
        </label>
        <label>
          Data:
          <Input type="text" placeholder="Type your data" required />
        </label>
        <SubmitButton type="submit">+ Upload Media</SubmitButton>
      </Form>
    </SidebarContainer>
  );
};

export default UploadSidebar;
