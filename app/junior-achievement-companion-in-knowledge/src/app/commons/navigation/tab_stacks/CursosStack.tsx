import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SCREEN_NAMES from "../../values/ScreenNames";
import CursosComponent from "../../../screens/cursos/CursosComponent";
import CursoDetailComponent from "../../../screens/curso_detail/CursoDetailComponent";
import ClassComponent from "../../../screens/class/ClassComponent";

const DashboardStackNavigation = createStackNavigator();

export const CursosStack = () => {
    return  (
        <DashboardStackNavigation.Navigator initialRouteName={SCREEN_NAMES.cursos}>
            <DashboardStackNavigation.Screen name={SCREEN_NAMES.cursos} component={CursosComponent} options={{headerStyle: {backgroundColor: "#92BCEA"}, headerTitleStyle: {color: "#FFFFFF"}}}/>
            <DashboardStackNavigation.Screen name={SCREEN_NAMES.cursoDetail} component={CursoDetailComponent} options={{headerTintColor: "#FFFFFF", headerStyle: {backgroundColor: "#92BCEA"}, headerTitleStyle: {color: "#FFFFFF"}}}/>
            <DashboardStackNavigation.Screen name={SCREEN_NAMES.class} component={ClassComponent} options={{headerTintColor: "#FFFFFF", headerStyle: {backgroundColor: "#92BCEA"}, headerTitleStyle: {color: "#FFFFFF"}}}/>
        </DashboardStackNavigation.Navigator>
    );
}
