const BASE_URL = 'https://mercadona-api-cd87d0cdea3a.herokuapp.com/api';

export const getProducts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/product/all-products`);
    if (!response.ok) {
      throw new Error('Erreur lors de la récupération des produits');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getProductsByCategory = async (categoryName) => {
  try {
    const response = await fetch(`${BASE_URL}/product/category/${categoryName}`, {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error('Erreur lors de la récupération des produits de la catégorie');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erreur lors de la récupération des produits par catégorie:', error);
    throw error;
  }
};


export const createProduct = async (formData) => {
  console.log('Product being sent:', formData);
  try {
    const response = await fetch(`${BASE_URL}/product/create-product`, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Erreur lors de la création du produit');
    }

    const data = await response.json();
    console.log(response.data);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const updateProduct = async (productId, productData) => {
  try {
    const response = await fetch(`${BASE_URL}/api/product/${productId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(productData),
    });

    if (!response.ok) {
      throw new Error('Erreur lors de la mise à jour du produit');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};


export const deleteProduct = async (productId) => {
  try {
    const response = await fetch(`${BASE_URL}/api/product/${productId}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('Erreur lors de la suppression du produit');
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};
