import React, {useEffect} from "react";
import {Image, ScrollView, Text, View} from "react-native";
import LocalStorageRepository from "../../../data/LocalStorageRepository";
import UserModel from "../../models/UserModel";

const badge1 = require("../../../../assets/badge-1.png");
const badge2 = require("../../../../assets/badge-2.png");
const badge3 = require("../../../../assets/badge-3.png");
const badge4 = require("../../../../assets/badge-4.png");

const ProfileComponent = () => {
    useEffect(() => {
        new LocalStorageRepository().getUserSession().then(result => {
            setUser(result)
        })
    }, [])

    const [user, setUser] = React.useState<UserModel>();
    return (
        <ScrollView>
            <View style={{flex: 1, padding: 16}}>
                <View style={{flex: 1, padding: 16, borderRadius: 10, backgroundColor: "#FFFFFF", shadowColor: "#000000", elevation: 5, shadowOffset: {width: 0, height: 3}, shadowRadius: 5, shadowOpacity: 1.0}}>
                    <Text style={{fontSize: 16}}>Usuario: {user?.username}</Text>
                    <Text style={{fontSize: 16}}>Tenes {user?.points} puntos</Text>
                </View>
                <View style={{marginTop: 16}}>
                    <Text style={{fontSize: 30}}>Tus logros:</Text>
                    <Text style={{marginVertical: 8}}>Aca podes ver los logros que vas consiguiendo mientras te preparas para el futuro!</Text>
                    <View style={{padding: 16, marginVertical: 8, borderRadius: 10, backgroundColor: "#FFFFFF", shadowColor: "#000000", elevation: 5, shadowOffset: {width: 0, height: 3}, shadowRadius: 5, shadowOpacity: 1.0}}>
                        <View style={{flexDirection: "row"}}>
                            <Image source={badge1} style={{flex: 1, width: 64, height: 64, resizeMode: "contain"}}/>
                            <Image source={badge2} style={{flex: 1, width: 64, height: 64, resizeMode: "contain"}}/>
                            <Image source={badge3} style={{flex: 1, width: 64, height: 64, resizeMode: "contain"}}/>
                        </View>
                        <View style={{flexDirection: "row", marginTop: 16}}>
                            <Image source={badge2} style={{flex: 1, width: 64, height: 64, resizeMode: "contain"}}/>
                            <Image source={badge3} style={{flex: 1, width: 64, height: 64, resizeMode: "contain"}}/>
                            <Image source={badge4} style={{flex: 1, width: 64, height: 64, resizeMode: "contain"}}/>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default ProfileComponent;
