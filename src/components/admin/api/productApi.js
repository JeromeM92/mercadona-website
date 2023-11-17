const BASE_URL = 'http://localhost:8080';

export const getProducts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/api/product`);
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

// Fonction pour créer un nouveau produit
export const createProduct = async (productData) => {
  try {
    const response = await fetch(`${BASE_URL}/api/product`, {
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
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Fonction pour mettre à jour un produit existant
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

// Fonction pour supprimer un produit
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
