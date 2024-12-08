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
import { FileArchive } from 'lucide-react';
import { Check } from 'lucide-react';
import { X } from 'lucide-react'; 

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
      <CloseButton onClick={onClose}><X /></CloseButton>
      <TitleContainer>
        <FileArchive size={24} color="#fff" /> 
        <span><h2>Upload Media</h2></span>
        <span>Put the best files for BK Beta, 🤘🏽.</span>
      </TitleContainer>
      <Form onSubmit={handleFormSubmit}>
        <label>
          <span className="label-title">Category</span>
          <Input
            type="text"
            value={category}
            onChange={(e) => console.log(e.target.value) }
            placeholder="Select category"
            required
          />
        </label>
        <label>
          <span>Title</span>
          <Input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Type your Title Media"
            required
          />
        </label>
        <label>
          <span>Data</span>
          <Input
            type="date"
            value={data}
            onChange={(e) => setData(e.target.value)}
            placeholder="Type your data"
            required
          />
        </label>
        <div className="buttons-container">
          <ClearButton type="button" onClick={clearInputs}>Clear All</ClearButton>
          <SubmitButton type="submit"><Check /> Upload Media</SubmitButton>
        </div>
      </Form>
    </SidebarContainer>
  );
};

export default UploadSidebar;
