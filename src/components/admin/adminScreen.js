import React, { useState } from 'react';
import Pixel6A from "../../assets/pixel-6a-3.jpg"
import ProductList from '../commonComponents/ProductList';
import styled from 'styled-components';

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
  margin-right: 10px;
`;

const Input = styled.input`
  margin-bottom: 10px;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProductListContainer = styled.div`
  grid-column:2;
  width: 100%;
  margin-top: 20px;
  display: grid;
  grid-template-columns: 1fr; // Une seule colonne
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
            <Button onClick={handlePromotionClick}>Créer Promotion</Button>
            {showCategoryForm && (
            <FormContainer>
              <Input type="text" placeholder="Nouvelle Catégorie" />
              <Button>Créer</Button>
            </FormContainer>
          )}
          {showPromotionForm && (
            <FormContainer>
              <Input type="text" placeholder="Date de début" />
              <Input type="text" placeholder="Date de fin" />
              <Input type="text" placeholder="Nom de la promotion" />
              <Input type="text" placeholder="Produit en promotion" />
              <Input type="text" placeholder="Catégorie de produit en promotion" />
              <Button>Créer</Button>
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