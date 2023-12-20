const BASE_URL = 'https://mercadona-api-cd87d0cdea3a.herokuapp.com/api';

export const getAllDeals = async () => {
  try {
    const response = await fetch(`${BASE_URL}/deal/all-deals`, {
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
    const response = await fetch(`${BASE_URL}/deal/create-deal`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(deal),
    });

    if (!response.ok) {
      throw new Error('Erreur lors de la création de l\'offre');
    }

    const string = await response.text();
    const json = string === "" ? {} : JSON.parse(string);
    return json;
  } catch (error) {
    console.error(error);
    throw error;
  }
};


