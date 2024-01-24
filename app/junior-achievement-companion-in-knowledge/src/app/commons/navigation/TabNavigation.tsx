import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SCREEN_NAMES from "../values/ScreenNames";
import {DashboardStack} from "./tab_stacks/DashboardStack";
import {CursosStack} from "./tab_stacks/CursosStack";
import {LeaderboardStack} from "./tab_stacks/LeaderboardStack";
import {Image} from "react-native";
import {ProfileStack} from "./tab_stacks/ProfileStack";

const Tab = createBottomTabNavigator();

const homeIcon = require("../../../../assets/ic-home.png");
const cursosIcon = require("../../../../assets/ic-cursos.png");
const leaderboardIcon = require("../../../../assets/ic-leaderboard.png");
const profileIcon = require("../../../../assets/ic-profile.png");

const BottomTab = () => {
    return  (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    switch (route.name) {
                        case SCREEN_NAMES.dashboard:
                            iconName = homeIcon;
                            break;
                        case SCREEN_NAMES.cursos:
                            iconName = cursosIcon;
                            break;
                        case SCREEN_NAMES.leaderboard:
                            iconName = leaderboardIcon;
                            break;
                        case SCREEN_NAMES.profile:
                            iconName = profileIcon;
                            break;
                    }

                    // You can return any component that you like here!
                    return <Image source={iconName} style={{tintColor: focused ? "#92BCEA" : "#000000", width: 24, height: 24, resizeMode: "contain"}}/>;
                },
            })}
            tabBarOptions={{
                activeTintColor: '#92BCEA',
                inactiveTintColor: '#000000',
            }}>
            <Tab.Screen name={SCREEN_NAMES.dashboard} component={DashboardStack}/>
            <Tab.Screen name={SCREEN_NAMES.cursos} component={CursosStack}/>
            <Tab.Screen name={SCREEN_NAMES.leaderboard} component={LeaderboardStack}/>
            <Tab.Screen name={SCREEN_NAMES.profile} component={ProfileStack}/>
        </Tab.Navigator>
    );
}

export default BottomTab;
