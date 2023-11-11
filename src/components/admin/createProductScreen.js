import React, { useState } from 'react';
import styled from 'styled-components';
import Dropdown from '../commonComponents/DropDown';
import TextField from '../commonComponents/TextField';
import LabeledField from '../commonComponents/LabelField';
import ImageUploader from '../commonComponents/ImageUploader';
import { COLORS } from '../../assets/colors/colors';

const ProductCreationContainer = styled.div`
    width: 60%;
    margin: 0 auto;
    padding: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr; 
    align-items: center;
`;
const ProductImageAndFieldsContainer = styled.div`
    height: auto;
    display:grid;
    grid-row: 1;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr; 
    grid-column: 1/ span 2;
    gap: 40px;
`;
const ProductImageContainer = styled.div`
    height: auto;
    grid-row: 1 / span 2;
    grid-column: 1;
`;
const NameContainer = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr; 
    grid-row: 1;
    grid-column: 2;
`;

const PriceContainer = styled.div`
    grid-row: 2;
    grid-column: 2;
`;
const CategoryContainer = styled.div`
    grid-row: 1;
    grid-column: 3;
`;
const PromotionContainer = styled.div`
    grid-row: 2;
    grid-column: 3;
`;
const DescriptionField = styled.textarea`
    grid-row: 2;
    grid-column: 1/-1;
    height: 280px; // Hauteur arbitraire, ajustez selon vos besoins
    border: 1px solid ${COLORS.darkGreen};
    padding: 12px 16px;
    background: ${COLORS.softGrey};
    border-radius: 10px;

  &:focus {
    outline: none;
    border-color: ${COLORS.darkGreen};
  }
`;

const CreateButton = styled.button`
    grid-row: 3;
    background-color: yellow;
    padding: 10px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
`;

function CreateProductScreen() {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedPromotion, setSelectedPromotion] = useState('');

  const handleCreateProduct = {

  }

  return (
    <ProductCreationContainer>
        <ProductImageAndFieldsContainer>
            <ProductImageContainer>
            <label>Photo du produit</label>
            <ImageUploader onChange={(file) => console.log('Fichier sélectionné :', file)} />
                
            </ProductImageContainer>
                <NameContainer>
                    <TextField 
                        name="Nom du produit" 
                        value={productName} 
                        onChange={setProductName} 
                    />
                </NameContainer>
                <PriceContainer>
                    <TextField 
                        name="Prix du produit" 
                        value={productPrice} 
                        onChange={setProductPrice} 
                    />
                </PriceContainer>
                 <CategoryContainer>
                    <Dropdown
                        name="Catégorie"
                        options={['Category1', 'Category2', 'Category3']}
                        selectedOption={selectedCategory}
                        onSelectOption={(category) => setSelectedCategory(category)}
                        />
                </CategoryContainer>   
                <PromotionContainer>
                        <Dropdown
                        name="Promotion"
                        options={['Promo1', 'Promo2', 'Promo3']}
                        selectedOption={selectedPromotion}
                        onSelectOption={(promotion) => setSelectedPromotion(promotion)}
                        />
                </PromotionContainer>

            
        </ProductImageAndFieldsContainer>
        <DescriptionField
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
            placeholder="Entrez votre description ici..."
        />
        
        <CreateButton onClick={handleCreateProduct}>Créer</CreateButton>
    </ProductCreationContainer>
  );
};

export default CreateProductScreen;
