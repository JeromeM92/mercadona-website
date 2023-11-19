import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../assets/colors/colors';

const ProductContainer = styled.div`
    border: 2px solid ${COLORS.grey};
    width: 100%;
    padding: 28px 50px 28px 14px;
    height: 130px;
    border-radius: 20px;
    background-color: white;
    display: flex; 
    justify-content: space-between;

    @media (max-width: 768px) {
        width: auto;
        height: 210px;
        padding: 10px;
        display: grid;
        grid-template-columns: 1fr 1fr; 
        grid-template-rows: 1fr 1fr; 
    }
`;

const ProductImage = styled.img`
  border: 1px solid ${COLORS.darkGreen};
  border-radius: 10px;
  margin-right: 1vh;
  width: 100%;
  flex:1;
  @media (max-width: 768px) {
    
    grid-row: 1 / 2;
    grid-column: 1/2;
    width: 100%;
  }
`;

const ProductTitle = styled.h2`
  align-self: start;
    @media (max-width: 768px) {
        grid-row: 1;
        grid-column: 1;
        align-self: start;
        margin:0;
        font-size: 18px;
    }
`;
const ProductDealPriceContainer = styled.div`
@media (min-width: 769px) {
  flex: 1;
  text-align: center;
}
    @media (max-width: 768px) {
        width: auto;
        grid-column: 2;
        display: grid;
        grid-template-columns: 1fr; 
        grid-template-rows: 1fr 1fr; 
        border-left: 1px dashed black;
        justify-content: center; // Aligner horizontalement
        align-items: center; // Aligner verticalement
        margin-left: 20px;
    }
`;
const ProductDeal = styled.h2`
  font-size: 24px;
  color: ${COLORS.red};
  background: black;
  border-radius: 10px;
  @media (max-width: 768px) {
    padding-right: 5px;
    grid-row: 1;
    grid-column: 2;
    text-align: center;
    background: black;
    width: 100%;
    background-size: 50% auto;
    margin:0;
    
  }
`;

const ProductPrice = styled.p`
color: ${COLORS.red};
@media (min-width: 769px) {
  font-size: 28px;
}
  @media (max-width: 768px) {
    font-size: 28px;
    grid-row: 2;
    grid-column: 2;
    text-align: center;
    align-self: end;
    
  }
`;
const ProductTitleDescriptionContainer = styled.div`
  flex: 5;
    display: grid;
    grid-template-columns: 1fr; 
    grid-template-rows: 1fr 1fr; 

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr; 
    grid-template-rows: auto auto; 
    grid-row: 2;
    grid-column: 1/4;

  }
`;
const ProductDescription = styled.p`
    font-size: 15px;
    text-align: justify;
    line-height: 20px;
    max-height: 100px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 5; /* Nombre de lignes avant d'afficher les points de suspension */
    -webkit-box-orient: vertical;
        @media (max-width: 768px) {
            grid-row: 2;
            grid-column: 1/2;
            text-align: justify;
            font-size: 12px;
            line-height: 1.5rem;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 3; /* Nombre de lignes avant d'afficher les points de suspension */
            -webkit-box-orient: vertical;
        }
`;

function Product({ product }) {
  return (
    <ProductContainer>
        <ProductImage src={product.image} alt={product.title} />
        <ProductTitleDescriptionContainer>
            <ProductTitle>{product.title}</ProductTitle>
            <ProductDescription>{product.description}</ProductDescription>
        </ProductTitleDescriptionContainer>
       
        <ProductDealPriceContainer>
             <ProductDeal>{product.discount}</ProductDeal>
            <ProductPrice>{product.price} €</ProductPrice>
        </ProductDealPriceContainer>
    </ProductContainer>
  );
}

export default Product;
