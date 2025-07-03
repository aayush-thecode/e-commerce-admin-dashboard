/* eslint-disable @typescript-eslint/no-explicit-any */

import api from '@/axios/api.axios'


export const addToCart = async(data:{
  foodId: string, 
  quantity: number
}) => {
    try 
    {
        const response = await api.post('/cart/add', data)
            return response.data;
    } 
    
    catch(error: any)
    {
        throw error.response.data;
    }
};

export const getCart = async(userId: string) => {
  try {
    const response = await api.get(`/cart/${userId}`);
    return response.data;
  } catch (error: any) {
    throw error?.response?.data || "Failed to fetch cart";
  }
};

export const removeItemFromCart = async (foodId: string) => {
  try {
    const response = await api.delete(`/cart/remove/${foodId}`);
    return response.data;
  } catch (error: any) {
    throw error?.response?.data || "Failed to remove item from cart";
  }
};

export const getCartByUserId = async (userId: string) => {
  try {
    const response = await api.get(`/cart/${userId}`);
    return response.data;
  } catch (error: any) {
    throw error.response?.data || error.message;
  }
};

export const clearCart = async () => {
  try {
    const response = await api.delete("/cart/clear");
    return response.data;
  } catch (error: any) {
    throw error?.response?.data || "Failed to delete cart";
  }
};