/* eslint-disable @typescript-eslint/no-explicit-any */

import api from "@/axios/api.axios";

export const getAllCategories = async() => {
    try{
        const response = await api.get('/category')
        return response?.data

    }catch(error:any){
        throw error?.response?.data; 
    }
}

export const deleteCategory = async(id:string) => {
    try{
        const response = await api.delete(`/category/${id}`)
        return response?.data
    } catch(error:any) {
        throw error?.response?.data;
    }
}

export const createNewCategory = async() => {

}