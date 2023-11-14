// CustomerScreen.js
import React, { useState } from 'react';
import Dropdown from '../commonComponents/DropDown';
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
const CustomerScreenContainer = styled.div`
  display: grid;
  grid-template-columns: 20% 60% 20%;

  @media (max-width: 1200px) {
    display: grid;
    grid-template-columns: 5vw 90vw 5vw;
  }
`;

const CategoryDropdownContainer = styled.div`
    margin-top: 6vh;
    grid-column:2;

    @media (max-width: 1200px) {
      grid-column:2;
      text-align: center; 
    }
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


function CustomerScreen() {
  const [selectedCategory, setSelectedCategory] = useState('');

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <div>
      <CustomerScreenContainer>
        <CategoryDropdownContainer>
          <Dropdown
            name="Catégorie"
            options={['Category1', 'Category2', 'Category3']}
            selectedOption={selectedCategory}
            onSelectOption={(category) => setSelectedCategory(category)}
          />
        </CategoryDropdownContainer>
        <ProductListContainer>
          <ProductList products={products}/>
        </ProductListContainer>
        
      </CustomerScreenContainer>
      
    </div>
  );
}

export default CustomerScreen;
