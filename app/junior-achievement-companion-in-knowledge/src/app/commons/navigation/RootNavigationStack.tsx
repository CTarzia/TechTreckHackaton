import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {StatusBar} from "expo-status-bar";
import SCREEN_NAMES from "../values/ScreenNames";
import LoginComponent from "../../screens/login/LoginComponent";
import BottomTab from "./TabNavigation";

const AppStackNavigation = createStackNavigator();

export const AppRootStack = () => {
    return  (
        <NavigationContainer>
            <StatusBar style="light" backgroundColor={"#000000"}/>
            <AppStackNavigation.Navigator initialRouteName={SCREEN_NAMES.login}>
                <AppStackNavigation.Screen name={SCREEN_NAMES.login} component={LoginComponent} options={{headerStyle: {backgroundColor: "#92BCEA"}, headerTitleStyle: {color: "#FFFFFF"}}}/>
                <AppStackNavigation.Screen name={SCREEN_NAMES.home} component={BottomTab} options={{headerShown: false}}/>
            </AppStackNavigation.Navigator>
        </NavigationContainer>
    );
}
