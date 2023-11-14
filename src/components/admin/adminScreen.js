import React, { useState } from 'react';
import Pixel6A from "../../assets/pixel-6a-3.jpg"
import ProductList from '../commonComponents/ProductList';
import TextField from '../commonComponents/TextField';
import styled from 'styled-components';
import { COLORS } from '../../assets/colors/colors';
import Dropdown from '../commonComponents/DropDown';
import { Link } from 'react-router-dom';

const mockProduct = {
  id: 1,
  name: "Produit de test",
  title: "Pixel 6a",
  category: "Test",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras velit ex," 
  +"scelerisque vel felis a, malesuada lacinia mauris. Quisque gravida tristique nisl id pharetra. "
  +"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis est vitae ante auctor auctor. "
  +"Nam sapien augue, commodo nec odio sit amet, aliquet rhoncus felis. Vestibulum mollis turpis non felis suscipit vehicula. "
  +"Morbi ultricies ac massa eget porttitor. Donec nunc odio, porttitor non eros in, gravida feugiat metus. Morbi augue dui," 
  +"porttitor sed lectus id, pharetra bibendum nibh. Phasellus vel iaculis urna, "
  +"non efficitur lorem. Aenean id bibendum ante. Nulla nec volutpat dolor. Integer vitae auctor odio. Quisque interdum aliquam venenatis.",
  image: Pixel6A,
  price: 10.99,
  discount: "- 20%", // pourcentage de réduction
};

const products = [
  mockProduct, mockProduct, mockProduct
];

const AdminScreenContainer = styled.div`
  display: grid;
  grid-template-columns: 20% 60% 20%;

  @media (max-width: 1200px) {
    display: grid;
    grid-template-columns: 5vw 90vw 5vw;
  }
`;
const ConfigContainer = styled.div`
  margin-top: 6vh;
  grid-column: 2;

  @media (max-width: 1200px) {
    grid-column: 2;
    text-align: center; 
  }
`;

const Button = styled.button`
  

`;
const PromotionButton = styled.button`
  margin-left: 20px;

`;
const CreateProductButton = styled.button`
  margin-left: 20px;

`;

const CreateConfigButton = styled.button`
    width: 5vw;
    grid-column:1;
    background-color: ${COLORS.yellow};
    padding: 10px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    border: 1px solid ${COLORS.darkGreen};
    margin-top: 2vh;

    @media (max-width: 1200px) {
      width: auto;
    }
`;

const FormContainer = styled.div`
  margin-top: 2vh;
  display: grid;
  grid-template-columns: 20vw 20vw; 
  gap: 10px;

  @media (max-width: 1200px) {
    display: flex; 
    flex-direction: column; 
    align-items: center;
    width: 100%
    margin-top: 20px;
    gap: 1vh;
  }
`;

const ProductListContainer = styled.div`
  grid-column:2;
  width: 100%;
  margin-top: 20px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;

  @media (max-width: 1200px) {
    display: grid;
    grid-column: 2;
    width: 100%
    margin-top: 20px;
    gap: 1vh;
  }
`;

function AdminScreen (){
  const [showCategoryForm, setShowCategoryForm] = useState(false);
  const [showPromotionForm, setShowPromotionForm] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryClick = () => {
    setShowCategoryForm((prev) => !prev);
    setShowPromotionForm(false);
  };

  const handlePromotionClick = () => {
    setShowCategoryForm(false);
    setShowPromotionForm((prev) => !prev);
  };
  
  return (
        <AdminScreenContainer>
          <ConfigContainer>
            <Button onClick={handleCategoryClick}>Créer Catégorie</Button>
            <PromotionButton onClick={handlePromotionClick}>Créer Promotion</PromotionButton>
            <Link to="/admin-create-product">
            <CreateProductButton>Créer un produit</CreateProductButton>
            </Link>
            {showCategoryForm && (
            <FormContainer>
              <TextField name="Catégorie" value="" onChange={(value) => console.log(value)} />
              <CreateConfigButton>Créer</CreateConfigButton>
            </FormContainer>
          )}
          {showPromotionForm && (
            <FormContainer>
              <TextField name="Date de début" value="" onChange={(value) => console.log(value)} />
              <TextField name="Date de fin" value="" onChange={(value) => console.log(value)} />
              <TextField name="Nom de la promotion" value="" onChange={(value) => console.log(value)} />
              <TextField name="Produit en promotion" value="" onChange={(value) => console.log(value)} />
              <Dropdown
                        name="Catégorie"
                        options={['Category1', 'Category2', 'Category3']}
                        selectedOption={selectedCategory}
                        onSelectOption={(category) => setSelectedCategory(category)}
                        />
              <CreateConfigButton>Créer</CreateConfigButton>
            </FormContainer>
          )}
          
        </ConfigContainer>
          <ProductListContainer>
          <ProductList products={products}/>
          </ProductListContainer>
        </AdminScreenContainer>
  
  
      );
  }
  
  export default AdminScreen;