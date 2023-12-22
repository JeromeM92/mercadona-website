import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Dropdown from '../commonComponents/DropDown';
import TextField from '../commonComponents/TextField';
import ImageUploader from '../commonComponents/ImageUploader';
import { COLORS } from '../../assets/colors/colors';
import { createProduct } from './api/productApi';
import { getCategories } from './api/categoryApi';
import { getAllDeals } from './api/dealApi';
import { useNavigate } from 'react-router-dom';




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
const DealLabel = styled.label`
    grid-row: 3;
    grid-column: 3 ;
`;
const DealContainer = styled.div`
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
  const navigate = useNavigate();
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedDeal, setSelectedDeal] = useState('');
  const [productImage, setProductImage] = useState(null);
  const [categories, setCategories] = useState([]);
  const [deals, setDeals] = useState([]);

  useEffect(() => {
    const fetchDeals = async () => {
      try {
        const dealsData = await getAllDeals();
        setDeals(dealsData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDeals();
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesData = await getCategories();
        setCategories(categoriesData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCategories();
  }, []); 
  const handleDealSelect = (dealName) => {
    const selectedDeal = deals.find(deal => deal.dealName === dealName);
    setSelectedDeal(selectedDeal ? selectedDeal.dealId : '');
  };

  const handleCategorySelect = (categoryName) => {
    const selectedCategory = categories.find(category => category.categoryName === categoryName);
    setSelectedCategory(selectedCategory ? selectedCategory.categoryId : '');
  };

  const handleCreateProduct = async() => {
    if (!productName || !productPrice || !selectedCategory) {
      console.error('Veuillez remplir tous les champs obligatoires');
      return;
    }
  
    const formData = new FormData();
    formData.append('productName', productName);
    formData.append('price', productPrice);
    formData.append('description', productDescription);
    formData.append('categoryId', selectedCategory);
    formData.append('dealId', selectedDeal);
    if (productImage) {
      formData.append('image', productImage);
    }
  
    try {
      await createProduct(formData);
  
        // Réinitialisez les champs après la création réussie du produit
        setProductName('');
        setProductPrice('');
        setProductDescription('');
        setSelectedCategory('');
        setSelectedDeal('');
        setProductImage(null);
        
        //Idéalement il faudrait créer une pop up pour avertir l'admin du succés ou de l'échec
        console.log('Produit créé avec succès!');
        navigate('/admin-board');
      } catch (error) {
        console.error('Erreur lors de la création du produit', error);
      }

  };

  return (
    <ProductCreationContainer>
            <ImageLabel>Photo du produit</ImageLabel>
            <ProductImageContainer>
            <ImageUploader onChange={(file) => setProductImage(file)} />
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
                        options={categories.map((category) => category.categoryName)}
                        selectedOption={selectedCategory ? selectedCategory.categoryName : ''}
                        onSelectOption={handleCategorySelect}
                        />
                </CategoryContainer>
                <DealLabel>Promotion</DealLabel>   
                <DealContainer>
                        <Dropdown
                        name="Promotion"
                        options={deals.map((deal) => deal.dealName)}
                        selectedOption={selectedDeal ? selectedDeal.dealName : ''}
                        onSelectOption={handleDealSelect}
                        />
                </DealContainer>
                <DescriptionField 
                    value={productDescription} 
                    onChange={(e) => setProductDescription(e.target.value)} 
                    placeholder="Entrez votre description ici..." /> 
                <CreateButton onClick={handleCreateProduct}>Créer</CreateButton>
        
    </ProductCreationContainer>
  );
};

export default CreateProductScreen;
