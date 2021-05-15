import { ILoginResponse } from './../types/ILoginResponse';
import Axios, { AxiosError } from 'axios';
import { ApiBaseUrl } from '../configuration';
import { IMessages } from '../types/IMessages';
import { IFetchResponse } from '../types/IFetchService';
import { IRegisterDto } from '../dto/IRegisterDto';

export abstract class IdentityService {
    protected static axios = Axios.create({
        baseURL: ApiBaseUrl,
        headers: {
            'Content-Type': 'application/json'
        }
    });

    static async Login(apiEndpoint: string, loginData: {email: string, password:string}): Promise<IFetchResponse<ILoginResponse>> {
        let loginDataJson = JSON.stringify(loginData);
        try {
            let response = await this.axios.post<ILoginResponse>(apiEndpoint, loginDataJson);
            return {
                ok: response.status <= 299,
                statusCode: response.status,
                data: response.data
            };    
        }
        catch (err) {
            let error = err as AxiosError;
            return {
                ok: false,
                statusCode: error.response?.status ?? 500,
                messages: (error.response?.data as IMessages).messages,
            }
        }

    }

    static async Register(apiEndpoint: string, registerData: IRegisterDto): Promise<IFetchResponse<ILoginResponse>> {
        let registerDataJson = JSON.stringify(registerData);
        try {
            let response = await this.axios.post<ILoginResponse>(apiEndpoint, registerDataJson);
            return {
                ok: response.status <= 299,
                statusCode: response.status,
                data: response.data
            };    
        }
        catch (err) {
            let error = err as AxiosError;
            return {
                ok: false,
                statusCode: error.response?.status ?? 500,
                messages: (error.response?.data as IMessages).messages,
            }
        }

    }

}
