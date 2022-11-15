import { useState, useEffect } from "react";
import {DefaultTheme, NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { auth } from "../../firebaseConfig";
import { onAuthStateChanged} from "firebase/auth";

import Login from "../screens/Login/Login";
import Register from "../screens/Register/Register";
import PasswordReset from "../screens/PasswordReset/PasswordReset";
import PasswordResetConfirmation from "../screens/PasswordReset/PasswordResetConfirmation";
import CallForHelpAreYouSure from "../screens/RequestHelpModule/CallForHelpAreYouSure";
import CallForHelp from "../screens/RequestHelpModule/CallForHelp";

import COLORS from "../constants/colors";

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: COLORS["gamboge orange"],
    },
};

export type RootStackParamList = {
    Login: undefined;
    Register: undefined;
    PasswordReset: undefined;
    PasswordResetConfirmation: undefined;
    CallForHelpAreYouSure: undefined;
    CallForHelp: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AuthStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{headerShown: false, animation: "none"}}
        >
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Register" component={Register}/>
            <Stack.Screen name="PasswordReset" component={PasswordReset}/>
            <Stack.Screen
                name="PasswordResetConfirmation"
                component={PasswordResetConfirmation}
            />
        </Stack.Navigator>
    );
};

const HelpCallStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="CallForHelpAreYouSure"
            screenOptions={{headerShown: false, animation: "none"}}
        >
            <Stack.Screen name="CallForHelpAreYouSure" component={CallForHelpAreYouSure}/>
            <Stack.Screen name="CallForHelp" component={CallForHelp}/>
        </Stack.Navigator>
    )
}

const AppNavigation = ({navigationRef}: { navigationRef: any }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      })
    }, [auth]);

    return (
        <NavigationContainer ref={navigationRef} theme={theme}>
          {isLoggedIn ? <HelpCallStack /> : <AuthStack />}
        </NavigationContainer>
    );
};

export default AppNavigation;
