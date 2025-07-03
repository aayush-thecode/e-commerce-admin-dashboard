
export interface ILogin {
    email:string;
    password:string

}

export interface ISignUp {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phoneNumber:string;
    gender?: {
        lable?: string, 
        value?:string,
    },
    confirm_password: string;
}