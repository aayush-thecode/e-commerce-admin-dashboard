/* eslint-disable @typescript-eslint/no-explicit-any */

import api from '@/axios/api.axios'
import { ILogin, ISignUp } from '@/interface/auth-interface';

export const login = async(data: ILogin) => {
    try {
        const response = await api.post('/user/admin/login', data);
        console.log(response);
        return response.data;
    } catch(error: any) {
        throw error?.response?.data;
    }
};
   

export const signup = async(data: ISignUp) => {
    try {
        const response = await api.post('/user/', {...data, gender:data.gender?.value});
        console.log(response);
        return response.data;
    } catch(error: any) {
        console.log("auth error", error);
        throw error?.response?.data;
    }
}