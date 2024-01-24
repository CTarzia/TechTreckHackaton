import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SCREEN_NAMES from "../../values/ScreenNames";
import LeaderboardComponent from "../../../screens/leaderboard/LeaderboardComponent";
import ProfileComponent from "../../../screens/profile/ProfileComponent";

const DashboardStackNavigation = createStackNavigator();

export const ProfileStack = () => {
    return  (
        <DashboardStackNavigation.Navigator initialRouteName={SCREEN_NAMES.profile}>
            <DashboardStackNavigation.Screen name={SCREEN_NAMES.profile} component={ProfileComponent} options={{headerStyle: {backgroundColor: "#92BCEA"}, headerTitleStyle: {color: "#FFFFFF"}}}/>
        </DashboardStackNavigation.Navigator>
    );
}

