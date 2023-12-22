import React, { useState, useEffect } from 'react';
import ProductList from '../commonComponents/ProductList';
import TextField from '../commonComponents/TextField';
import styled from 'styled-components';
import { COLORS } from '../../assets/colors/colors';
import Dropdown from '../commonComponents/DropDown';
import { Link } from 'react-router-dom';
import { createCategory, getCategories } from './api/categoryApi';
import { createDeal } from './api/dealApi';
import { getProducts } from '../admin/api/productApi';

/*const mockProduct = {
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

const listMockProducts = [
  mockProduct, mockProduct, mockProduct
];*/

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
const DealButton = styled.button`
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
  // Initialisation des états pour stocker les valeurs des champs du formulaire et gérer l'affichage des formulaires
  const [categoryName, setCategoryName] = useState('');

  // État pour stocker les catégories récupérées depuis l'API
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [dealName, setDealName] = useState('');
  const [discountPercentage, setDiscountPercentage] = useState('');

  // Indique si le formulaire de catégorie doit être affiché
  const [showCategoryForm, setShowCategoryForm] = useState(false);

  // Indique si le formulaire de promotion doit être affiché
  const [showDealForm, setShowDealForm] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');

  // Fonction pour basculer l'affichage du formulaire de catégorie
  const handleCategoryClick = () => {

      setShowCategoryForm((prev) => !prev);
      setShowDealForm(false);
  };

  // Effet utilisé pour récupérer les catégories depuis l'API lors du chargement initial du composant
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesData = await getCategories();
        setCategories(categoriesData);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchProducts = async () => {
      try {
        const productsData = await getProducts();
        setProducts(productsData);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();

    fetchCategories();
  }, []);

  // Fonction pour gérer la création d'une catégorie
  const createCategoryHandler = async () => {
    try {
      const response = await createCategory(categoryName);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  // Fonction pour basculer l'affichage du formulaire de promotion
  const handleDealClick = () => {
    setShowCategoryForm(false);
    setShowDealForm((prev) => !prev);
  };

  // Fonction pour gérer la création d'une promotion
  const createDealHandler = async () => {
    try {
      const newDeal = {
        dealName: dealName,
        startDate: startDate,
        endDate: endDate,
        discountPercentage: discountPercentage,
      };

      const response = await createDeal(newDeal);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
        <AdminScreenContainer>
          <ConfigContainer>
            <Button onClick={handleCategoryClick}>Créer Catégorie</Button>
            <DealButton onClick={handleDealClick}>Créer Promotion</DealButton>
            <Link to="/admin-create-product">
            <CreateProductButton >Créer un produit</CreateProductButton>
            </Link>
            {showCategoryForm && (
            <FormContainer>
              <TextField name="Catégorie" value={categoryName} onChange={setCategoryName} />
              <CreateConfigButton onClick={createCategoryHandler}>Créer</CreateConfigButton>
            </FormContainer>
          )}
          {showDealForm && (
            <FormContainer>
              <TextField name="la Date de début" value={startDate} onChange={setStartDate} />
              <TextField name="la Date de fin" value={endDate} onChange={setEndDate} />
              <TextField name="le Nom de la promotion" value={dealName} onChange={setDealName} />
              <TextField name="la Promotion" value={discountPercentage} onChange={setDiscountPercentage} />
              <CreateConfigButton onClick={createDealHandler}>Créer</CreateConfigButton>
            </FormContainer>
          )}
          
        </ConfigContainer>
          <ProductListContainer>
          {/* Pour mocker un appel api */}
          <ProductList products={products}/>

          {/* A utiliser pour l'appel api */}
          {/*<ProductList products={filteredProducts}/>*/}
          </ProductListContainer>
        </AdminScreenContainer>
  
  
      );
  }
  
  export default AdminScreen;