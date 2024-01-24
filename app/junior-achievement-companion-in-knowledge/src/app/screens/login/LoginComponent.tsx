import React, {useEffect} from "react";
import {Alert, Image, TextInput, View} from "react-native";
import SCREEN_NAMES from "../../commons/values/ScreenNames";
import { CommonActions, useNavigation } from "@react-navigation/native";
import AppButton from "../../commons/ui/AppButton";
import LoginPresenter from "./LoginPresenter";

const appLogo = require("../../../../assets/jack.png");

const LoginComponent = () => {
    const navigation = useNavigation();
    const presenter = new LoginPresenter();

    const [userId, setUserId] = React.useState("");


    function login() {
        presenter.login(userId).then(res => {
            if(res){
                navigation.dispatch(CommonActions.reset({
                    index: 0,
                    routes: [
                        {
                            name: SCREEN_NAMES.home
                        }
                    ]
                }));
            }
            else {
                Alert.alert("Usuario no encontrado", "Revisa que tu usuario este escrito correctamente");
            }
        }).catch(error => {

        });
    }

    return (
        <View style={{flex: 1, padding: 16, justifyContent: "center"}}>
            <View>
                <Image source={appLogo} style={{width: 120, height: 120, resizeMode: "contain", alignSelf: "center"}}/>
            </View>
            <View style={{paddingHorizontal: 24, marginBottom: 24}}>
                <TextInput
                    placeholder={"User ID..."}
                    onChangeText={(text => setUserId(text))}
                    style={{flexDirection: "row", marginBottom: 8, marginTop: 16, alignItems: "center", borderWidth: 1, justifyContent: "space-between", padding: 16, borderColor: "#000000", height: 50, borderRadius: 10}}/>
            </View>
            <AppButton disabled={userId.length == 0} text={"Login"} onPress={() => login()}/>
        </View>
    )
}

export default LoginComponent;
