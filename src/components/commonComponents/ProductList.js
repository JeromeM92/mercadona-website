import React, { useState } from 'react';
import Product from '../customer/product';
import Dropdown from './DropDown';
import Pixel6A from "../../assets/pixel-6a-3.jpg"
import styled from 'styled-components';

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

function ProductList({ products }) {
  
    return (
      <div>
          
          <ProductListContainer>
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
  
  
          </ProductListContainer>
        
      </div>
    );
  }
  
  export default ProductList;