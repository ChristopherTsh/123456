// app/lib/api.js
const BASE_URL = 'https://next-ecommerce-api.vercel.app';

export const getProducts = async (page = 1, limit = 20, sort = '', category = '') => {
  const skip = (page - 1) * limit;
  const url = `${BASE_URL}/products?limit=${limit}&skip=${skip}&sort=${sort}&category=${category}`;
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Failed to fetch products');
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getProduct = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/products/${id}`);
    if (!response.ok) throw new Error('Failed to fetch product');
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};
