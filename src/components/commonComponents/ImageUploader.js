import React, { useState } from 'react';
import styled from 'styled-components';
import { IoMdAdd,IoMdTrash } from 'react-icons/io';


const ImageUploadContainer = styled.div`
    margin-top: 10px;
  position: relative;
  width: 100%;
  height: 100%;
  border: 2px dashed #ddd; /* Bordure stylisée, vous pouvez ajuster la couleur et l'épaisseur selon vos préférences */
  border-radius: 8px;
  box-sizing: border-box;
`;

const StyledPlusIcon = styled(IoMdAdd)`
  font-size: 24px;
  color: #aaa;
`;

const ImagePreview = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
`;

const UploadButton = styled.label`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
  border: 1px solid #ccc;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  input {
    display: none;
  }
`;

const RemoveButton = styled(IoMdTrash)`
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: #fff;
  border: none;
  cursor: pointer;
`;

const ImageUploader = ({ onChange }) => {
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setImagePreview(reader.result);
        onChange(file);
      };

      reader.readAsDataURL(file);
    }
  };
  const handleRemoveImage = () => {
    setImagePreview(null);
    onChange(null);
  };

  return (
    <ImageUploadContainer>
        {imagePreview && (
        <RemoveButton onClick={handleRemoveImage}>
           <IoMdTrash size={20} />
        </RemoveButton>
      )}
      {imagePreview ? (
        <ImagePreview src={imagePreview} alt="Product" />
      ) : (
        <UploadButton>
          <input type="file" accept="image/*" onChange={handleImageChange} />
          <StyledPlusIcon />
        </UploadButton>
      )}
    </ImageUploadContainer>
  );
};

export default ImageUploader;
