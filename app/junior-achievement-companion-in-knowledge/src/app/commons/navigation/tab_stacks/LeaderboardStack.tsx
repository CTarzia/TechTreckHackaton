import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SCREEN_NAMES from "../../values/ScreenNames";
import LeaderboardComponent from "../../../screens/leaderboard/LeaderboardComponent";

const DashboardStackNavigation = createStackNavigator();

export const LeaderboardStack = () => {
    return  (
        <DashboardStackNavigation.Navigator initialRouteName={SCREEN_NAMES.leaderboard}>
            <DashboardStackNavigation.Screen name={SCREEN_NAMES.leaderboard} component={LeaderboardComponent} options={{headerStyle: {backgroundColor: "#92BCEA"}, headerTitleStyle: {color: "#FFFFFF"}}}/>
        </DashboardStackNavigation.Navigator>
    );
}

