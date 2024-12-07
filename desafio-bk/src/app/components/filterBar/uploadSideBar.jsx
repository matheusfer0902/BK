import React, { useState } from "react";
import {
  SidebarContainer,
  CloseButton,
  Form,
  Input,
  SubmitButton,
} from "./styleSideBar";
import api from "@/app/services/api"; 

const UploadSidebar = ({ onClose }) => {
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [data, setData] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/media", {
        category,
        title,
        data,
      });

      console.log("Mídia enviada com sucesso:", response.data);
      alert("Mídia enviada com sucesso!");

      setCategory("");
      setTitle("");
      setData("");

      onClose();
    } catch (error) {
      console.error("Erro ao enviar a mídia:", error);
      alert(`Erro ao enviar a mídia: ${error.response?.data?.message || "Verifique os dados enviados."}`);
    }
  };

  return (
    <SidebarContainer>
      <CloseButton onClick={onClose}>X</CloseButton>
      <h2>Upload Media</h2>
      <p>Put the best files for BK Beta. 👋</p>
      <Form onSubmit={handleFormSubmit}>
        <label>
          Category:
          <Input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Select category"
            required
          />
        </label>
        <label>
          Title:
          <Input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Type your Title Media"
            required
          />
        </label>
        <label>
          Data:
          <Input
            type="text"
            value={data}
            onChange={(e) => setData(e.target.value)}
            placeholder="Type your data"
            required
          />
        </label>
        <SubmitButton type="submit">+ Upload Media</SubmitButton>
      </Form>
    </SidebarContainer>
  );
};

export default UploadSidebar;
