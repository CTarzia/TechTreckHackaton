import AsyncStorage from '@react-native-async-storage/async-storage';
import UserModel from "../app/models/UserModel";

export default class LocalStorageRepository {
    storeUserSession(userSession: UserModel): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            Promise.resolve(AsyncStorage.setItem("user_session", JSON.stringify(userSession))).then(() => {
                resolve(true);
            }).catch(() => {
                reject("Error");
            });
        });
    }

    getUserSession() : Promise<UserModel> {
        return new Promise<UserModel>((resolve, reject) => {
            Promise.resolve(AsyncStorage.getItem("user_session")).then(value => {
                if (value !== null){
                    resolve((JSON.parse(value) as UserModel[])[0]);
                } else {
                    reject("Error");
                }
            }).catch(() => {
                reject("Error");
            });
        });
    }
}
