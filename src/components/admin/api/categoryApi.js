const BASE_URL = 'http://localhost:8080/api';

export const createCategory = async (categoryName) => {
  try {
    const response = await fetch(`${BASE_URL}/category/create-category`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ categoryName }),
    });

    if (!response.ok) {
      throw new Error('Erreur lors de la création de la catégorie');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getCategories = async () => {
  try {
    const response = await fetch(`${BASE_URL}/category/all-categories`);

    if (!response.ok) {
      console.error('Error fetching categories. HTTP status:', response.status);
      throw new Error('Erreur lors de la récupération des catégories');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const updateCategory = async (categoryId, updatedCategory) => {
  try {
    const response = await fetch(`${BASE_URL}/category/update/${categoryId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedCategory),
    });

    if (!response.ok) {
      throw new Error('Erreur lors de la mise à jour de la catégorie');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deleteCategory = async (categoryId) => {
  try {
    const response = await fetch(`${BASE_URL}/category/delete/${categoryId}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('Erreur lors de la suppression de la catégorie');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
