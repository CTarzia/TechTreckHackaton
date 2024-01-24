import networkManager from "../../../data/axios/NetworkManager";
import AXIOS_CONFIGURATIONS from "../../../data/axios/config/AxiosConfiguration";
import LocalStorageRepository from "../../../data/LocalStorageRepository";
import UserModel from "../../models/UserModel";

export default class LoginPresenter {

    login(userId: string) : Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            networkManager.post<UserModel>("http://168.197.49.135/api/login", { "username" :  userId }, AXIOS_CONFIGURATIONS.applicationJsonHeaders, 0).then(result => {
                let test : any = result;

                test = test as UserModel[]
                if(test.length > 0){
                    new LocalStorageRepository().storeUserSession(result).then()

                    resolve(true);
                }
                else{
                    resolve(false);
                }
            }).catch(error => {
                reject(error);
            });
        });
    }
}
