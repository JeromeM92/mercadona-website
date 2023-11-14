import React, { useState } from 'react';
import styled from 'styled-components';
import Dropdown from '../commonComponents/DropDown';
import TextField from '../commonComponents/TextField';
import ImageUploader from '../commonComponents/ImageUploader';
import { COLORS } from '../../assets/colors/colors';

const ProductCreationContainer = styled.div`
    width: 60%;
    margin: auto;
    margin-top: 5vh;
    padding: 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 3vh 5vh 5vh 3vh; 
    grid-gap: 3vh;
`;
const ImageLabel = styled.label`
    grid-row: 1;
    grid-column: 1;
`;
const ProductImageContainer = styled.div`
    height: auto;
    grid-row: 2 / 5;
    grid-column: 1;
    box-sizing: border-box;
`;
const NameContainer = styled.div`
    grid-row: 2;
    grid-column: 2;
`;
const NameLabel = styled.label`
    grid-row: 1;
    grid-column: 2 ;
`;
// PRICE
const PriceLabel = styled.label`
    grid-row: 3;
    grid-column: 2 ;
`;
const PriceContainer = styled.div`
    grid-row: 4;
    grid-column: 2;
`;
// CATEGORY
const CategoryLabel = styled.label`
    grid-row: 1;
    grid-column: 3 ;
`;
const CategoryContainer = styled.div`
    grid-row: 2;
    grid-column: 3;
`;
// PROMOTION
const PromotionLabel = styled.label`
    grid-row: 3;
    grid-column: 3 ;
`;
const PromotionContainer = styled.div`
    grid-row: 4;
    grid-column: 3;
`;

const DescriptionField = styled.textarea`
    grid-row: 6;
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
    width: 5vw;
    grid-row: 7;
    grid-column:2;
    background-color: ${COLORS.yellow};
    padding: 10px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    border: 1px solid ${COLORS.darkGreen};
    justify-self: center;
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
            <ImageLabel>Photo du produit</ImageLabel>
            <ProductImageContainer>
            <ImageUploader onChange={(file) => console.log('Fichier sélectionné :', file)} />
            </ProductImageContainer>
            
                <NameLabel>Nom du produit</NameLabel>
                <NameContainer>
                    <TextField 
                        name="Nom du produit" 
                        value={productName} 
                        onChange={setProductName} 
                    />
                </NameContainer>
                <PriceLabel>Prix du produit</PriceLabel>
                <PriceContainer>
                    <TextField 
                        name="Prix du produit" 
                        value={productPrice} 
                        onChange={setProductPrice} 
                    />
                </PriceContainer>
                <CategoryLabel>Catégorie</CategoryLabel>
                 <CategoryContainer>
                    <Dropdown
                        name="Catégorie"
                        options={['Category1', 'Category2', 'Category3']}
                        selectedOption={selectedCategory}
                        onSelectOption={(category) => setSelectedCategory(category)}
                        />
                </CategoryContainer>
                <PromotionLabel>Promotion</PromotionLabel>   
                <PromotionContainer>
                        <Dropdown
                        name="Promotion"
                        options={['Promo1', 'Promo2', 'Promo3']}
                        selectedOption={selectedPromotion}
                        onSelectOption={(promotion) => setSelectedPromotion(promotion)}
                        />
                </PromotionContainer>
                <DescriptionField 
                    value={productDescription} 
                    onChange={(e) => setProductDescription(e.target.value)} 
                    placeholder="Entrez votre description ici..." /> 
                <CreateButton onClick={handleCreateProduct}>Créer</CreateButton>
        
    </ProductCreationContainer>
  );
};

export default CreateProductScreen;
