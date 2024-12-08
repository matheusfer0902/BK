import React, { useState } from "react";
import {
  SidebarContainer,
  CloseButton,
  Form,
  Input,
  SubmitButton,
  ClearButton,
  TitleContainer,
  TextContainer,
} from "./styleSideBar"; // Adicionamos novos componentes de estilo para os títulos
import api from "@/app/services/api"; 
import { FileArchive } from 'lucide-react'; // Importando o ícone

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
    }
  };

  const clearInputs = () => {
    setCategory("");
    setTitle("");
    setData("");
  };

  return (
    <SidebarContainer>
      <CloseButton onClick={onClose}>X</CloseButton>
      <TitleContainer>
        <FileArchive size={24} color="#fff" /> 
        <h2>Upload Media</h2>
        <p>Put the best files for BK Beta, 🤘🏽.</p>
      </TitleContainer>
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
        <div className="buttons-container">
          <SubmitButton type="submit">+ Upload Media</SubmitButton>
          <ClearButton type="button" onClick={clearInputs}>Clear</ClearButton>
        </div>
      </Form>
    </SidebarContainer>
  );
};

export default UploadSidebar;
