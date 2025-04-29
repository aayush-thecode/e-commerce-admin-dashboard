/* eslint-disable @typescript-eslint/no-explicit-any */

import api from "@/axios/api.axios";
import { CreateProduct} from "@/interface/auth/product.interface";



export const getAllProducts = async() =>{
    try{
        const response = await api.get('/product')
        return response?.data

    }catch(error:any){
        throw error?.response?.data; 
    }
}

export const getAllTendingProduct = async() =>{
    try{
        const response = await api.get('/product')
        return response?.data

    }catch(error:any){
        throw error?.response?.data; 
    }
}

export const getAllSummerSale = async() =>{
    try{
        const response = await api.get('/product')
        return response?.data

    }catch(error:any){
        throw error?.response?.data; 
    }
}

export const getProductById = async(id:string) =>{
    try{
        const response = await api.get(`/product/${id}`)
        return response?.data

    }catch(error:any){
        throw error?.response?.data; 
    }
}

export const updateProductById = async (id: string, data: any, formData?: FormData) => {
    try {

      if (data) {
        await api.patch(`/product/${id}`, data);
      }
      
      if (formData) {
        const response = await api.put(`/product/${id}/images`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        return response?.data;
      }
    } catch (error: any) {
      throw error?.response?.data;
    }
  };
  
export const deleteProductById = async (id: string) => {
    try {
      const response = await api.delete(`/product/${id}`);
      return response?.data;
    } catch (error: any) {
      throw error?.response?.data;
    }
  };

  
  export const createProduct = async (payload: CreateProduct) => {
    try {
      const response = await api.post("/product", payload);
      return response.data;
    } catch (error: any) {
      throw error?.response?.data || { message: "Failed to create product" };
    }
  };
  