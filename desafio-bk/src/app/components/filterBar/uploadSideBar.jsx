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
} from "./styleSideBar";
import api from "@/app/services/api";
import { FileArchive, Check, X } from "lucide-react";

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
      <CloseButton onClick={onClose}>
        <X />
      </CloseButton>
      <TitleContainer>
        <FileArchive size={24} color="#fff" />
        <TextContainer>
          <h2>Upload Media</h2>
          <span>Put the best files for BK Beta, 🤘🏽.</span>
        </TextContainer>
      </TitleContainer>
      <Form onSubmit={handleFormSubmit}>
        <label>
          <span className="label-title">Category</span>
          <Input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Select category"
            required
          />
        </label>
        <label>
          <span className="label-title">Title</span>
          <Input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Type your Title Media"
            required
          />
        </label>
        <label>
          <span className="label-title">Data</span>
          <Input
            type="date"
            value={data}
            onChange={(e) => setData(e.target.value)}
            required
          />
        </label>
        <div className="buttons-container">
          <ClearButton type="button" onClick={clearInputs}>
            Clear All
          </ClearButton>
          <SubmitButton type="submit">
            <Check /> Upload Media
          </SubmitButton>
        </div>
      </Form>
    </SidebarContainer>
  );
};

export default UploadSidebar;
