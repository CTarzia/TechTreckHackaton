import NetInfo from '@react-native-community/netinfo';
import axios, {AxiosResponse} from "axios";
import LocalStorageRepository from "../LocalStorageRepository";


class NetworkManager {
    get<T>(url: string, config: any, errorCode: number): Promise<AxiosResponse<T>>{
        return new Promise<AxiosResponse<T>>((resolve, reject) => {
            NetInfo.fetch().then(networkState => {
                if (networkState.isConnected){
                    axios.get<T>(url, config)
                        .then(response => {
                            resolve(response);
                        }).catch(() => {
                            reject(errorCode);
                        });
                } else {
                    reject("No hay conexion");
                }
            });
        });
    }

    post<T>(url: string, data: any, config: any, errorCode: number): Promise<T>{
        return new Promise<T>((resolve, reject) => {
            NetInfo.fetch().then(networkState => {
                if (networkState.isConnected){
                    axios.post<T>(url, data, config)
                        .then(response => {
                            resolve(response.data);
                        }).catch(error => {
                            reject(errorCode);
                        });
                } else {
                    reject("No hay conexion");
                }
            });
        });
    }

    put<T>(url: string, data: any, config: any, errorCode: number): Promise<AxiosResponse<T>>{
        return new Promise<AxiosResponse<T>>((resolve, reject) => {
            NetInfo.fetch().then(networkState => {
                if (networkState.isConnected){
                    axios.put<T>(url, data, config)
                        .then(response => {
                            resolve(response);
                        }).catch(() => {
                            reject(errorCode);
                        });
                } else {
                    reject("No hay conexion");
                }
            });
        });
    }
}

const networkManager = new NetworkManager();

export default networkManager;
