const BASE_URL = 'http://localhost:8080/api';

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

export const createProduct = async (productData) => {
  try {
    const response = await fetch(`${BASE_URL}/product/create-product`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(productData),
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
