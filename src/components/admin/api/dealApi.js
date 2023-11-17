const BASE_URL = 'http://localhost:8080/api';

export const getAllDeals = async () => {
  try {
    const response = await fetch(`${BASE_URL}/deal`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Erreur lors de la récupération des offres');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getDealById = async (dealId) => {
  try {
    const response = await fetch(`${BASE_URL}/deal/${dealId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Erreur lors de la récupération de l\'offre');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const createDeal = async (deal) => {
  try {
    const response = await fetch(`${BASE_URL}/deal`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(deal),
    });

    if (!response.ok) {
      throw new Error('Erreur lors de la création de l\'offre');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Ajoutez d'autres fonctions de requête selon vos besoins