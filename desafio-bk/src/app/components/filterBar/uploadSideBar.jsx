import React, { useState } from "react";
import { Sidebar, SidebarHeader, Form, Input, Select, Button, CloseButton } from "./styleSideBar";

const UploadSidebar = ({ onClose }) => {
  const [formData, setFormData] = useState({
    category: "",
    title: "",
    date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Media uploaded successfully!");
        onClose(); // Fechar a aba lateral após o upload
      } else {
        alert("Failed to upload media.");
      }
    } catch (error) {
      console.error("Error uploading media:", error);
    }
  };

  return (
    <Sidebar>
      <SidebarHeader>
        <h2>Upload Media</h2>
        <CloseButton onClick={onClose}>X</CloseButton>
      </SidebarHeader>
      <Form onSubmit={handleSubmit}>
        <Select name="category" value={formData.category} onChange={handleChange}>
          <option value="">Select category</option>
          <option value="Videogame">Videogame</option>
          <option value="Literary">Literary</option>
          <option value="Video">Video</option>
          <option value="Movie">Movie</option>
        </Select>
        <Input
          type="text"
          name="title"
          placeholder="Type your Title Media"
          value={formData.title}
          onChange={handleChange}
        />
        <Input
          type="text"
          name="date"
          placeholder="Type your data"
          value={formData.date}
          onChange={handleChange}
        />
        <Button type="submit">Upload Media</Button>
      </Form>
    </Sidebar>
  );
};

export default UploadSidebar;
