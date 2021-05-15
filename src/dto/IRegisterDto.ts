export interface IRegisterDto {
    email: string;
    password: string;
    idNumber: string;
    firstName: string;
    lastName: string;
    confirmPassword?: string;
}