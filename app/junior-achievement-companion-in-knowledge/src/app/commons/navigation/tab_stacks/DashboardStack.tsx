import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SCREEN_NAMES from "../../values/ScreenNames";
import DashboardComponent from "../../../screens/dashboard/DashboardComponent";
import CursoDetailComponent from "../../../screens/curso_detail/CursoDetailComponent";

const DashboardStackNavigation = createStackNavigator();

export const DashboardStack = () => {
    return  (
        <DashboardStackNavigation.Navigator initialRouteName={SCREEN_NAMES.dashboard}>
            <DashboardStackNavigation.Screen name={SCREEN_NAMES.dashboard} component={DashboardComponent} options={{headerStyle: {backgroundColor: "#92BCEA"}, headerTitleStyle: {color: "#FFFFFF"}}}/>
            <DashboardStackNavigation.Screen name={SCREEN_NAMES.cursoDetail} component={CursoDetailComponent} options={{headerTintColor: "#FFFFFF", headerStyle: {backgroundColor: "#92BCEA"}, headerTitleStyle: {color: "#FFFFFF"}}}/>
        </DashboardStackNavigation.Navigator>
    );
}

