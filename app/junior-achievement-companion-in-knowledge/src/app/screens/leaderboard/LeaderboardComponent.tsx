import React, {useEffect} from "react";
import {Image, ScrollView, Text, View} from "react-native";
import UserModel from "../../models/UserModel";
import LocalStorageRepository from "../../../data/LocalStorageRepository";
import networkManager from "../../../data/axios/NetworkManager";
import AXIOS_CONFIGURATIONS from "../../../data/axios/config/AxiosConfiguration";
import {useIsFocused} from "@react-navigation/native";

const confetti = require("../../../../assets/confetti.png");

const LeaderboardComponent = () => {

    const [user, setUser] = React.useState<UserModel>();
    const [users, setUsers] = React.useState<UserModel[]>([]);

    const isFocused = useIsFocused();

    useEffect(() => {
        if(isFocused){
            new LocalStorageRepository().getUserSession().then(result => {
                setUser(result);
            });

            networkManager.get<UserModel[]>("http://168.197.49.135/api/leaderboard", AXIOS_CONFIGURATIONS.applicationJsonHeaders, 0).then(result => {
                setUsers(result.data)
            })
        }
    }, [isFocused]);

    return (
        <View style={{flex: 1, padding: 16}}>
            <Text style={{textAlign: "center"}}>Gana puntos y convertite en el mejor estudiante de Junior Achievement!</Text>
            <View>
                <View style={{marginTop: 16}}>
                    <Text>Tus Puntos:</Text>
                    <View style={{flexDirection: "row"}}>
                        <Text style={{marginLeft: 16, flex: 1, marginTop: 8}}>{user?.username}:</Text>
                        <Text style={{marginRight: 16, marginTop: 8}}>{user?.points}</Text>
                    </View>
                </View>
                <ScrollView>
                    {
                        users.map((user, index) => {
                            return (
                                <View key={user.userid+"-"+index} style={{padding: 4, marginTop: 16}}>

                                    <View style={{flexDirection: "row", padding: 4}}>
                                        {
                                            index == 0 &&
                                            <Image source={confetti} style={{width: 24, height: 24, marginLeft: 4, resizeMode: "contain"}}/>
                                        }
                                        <Text style={{flex: 1, padding: 8}}>{index+1}. {user.username}</Text>
                                        <Text style={{padding: 8}}>{user.points}</Text>
                                        {
                                            index == 0 &&
                                            <Image source={confetti} style={{width: 24, height: 24, marginLeft: 4, resizeMode: "contain"}}/>
                                        }
                                    </View>
                                    <View style={{height: 1, width: "100%", backgroundColor: "#000000"}}/>
                                </View>
                            )
                        })
                    }
                </ScrollView>
            </View>
        </View>
    )
}

export default LeaderboardComponent;
