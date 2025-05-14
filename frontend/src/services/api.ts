// src/services/api.ts

const API_BASE_URL = 'http://localhost:3001/api';

export const fetchLatestAnswer = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/get-latest-answer`);
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching latest answer:', error);
    throw error;
  }
};

export const createAnswer = async (answer: string) => {
  try {
    const response = await fetch(`${API_BASE_URL}/create-answer`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data: answer }),
    });
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error creating answer:', error);
    throw error;
  }
};