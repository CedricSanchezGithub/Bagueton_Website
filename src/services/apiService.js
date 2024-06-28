// src/services/apiService.js
const BASE_URL = 'http://90.51.140.217:30001/bagueton';

export const fetchData = async (endpoint) => {
    try {
        const response = await fetch(`${BASE_URL}/${endpoint}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

export const fetchRecipes = async () => {
    return fetchData('readrecipes');
};

