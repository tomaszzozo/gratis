import React, { useState, useEffect } from "react";
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
import MainScreen from "../screens/Main/MainScreen";
import AccountSettings from "../screens/AccountSettings/AccountSettings";
import ChangePassword from "../screens/AccountSettings/ChangePassword";
import DeleteAccount from "../screens/AccountSettings/DeleteAccount";

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
    MainScreen: undefined;
    AccountSettings: undefined;
    ChangePassword: undefined;
    DeleteAccount:undefined;
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

const MainScreenStack = () => {
    return (
            <Stack.Screen name="MainScreen" component={MainScreen}/>
    )
}

const AccountSettingsStack = () => {
    return (<>
            <Stack.Screen name="AccountSettings" component={AccountSettings}/>
            <Stack.Screen name="ChangePassword" component={ChangePassword}/>
            <Stack.Screen name="DeleteAccount" component={DeleteAccount}/>
            </>
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
            <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{headerShown: false, animation: "none"}}
        >
          {isLoggedIn ? <Stack.Group>
            <Stack.Screen name="MainScreen" component={MainScreen}/>
            <Stack.Screen name="AccountSettings" component={AccountSettings}/>
            <Stack.Screen name="ChangePassword" component={ChangePassword}/>
            <Stack.Screen name="DeleteAccount" component={DeleteAccount}/>
            <Stack.Screen name="CallForHelpAreYouSure" component={CallForHelpAreYouSure}/>
            <Stack.Screen name="CallForHelp" component={CallForHelp}/>
            </Stack.Group> : 
            <Stack.Group>
             <Stack.Screen name="Login" component={Login}/>
             <Stack.Screen name="Register" component={Register}/>
             <Stack.Screen name="PasswordReset" component={PasswordReset}/>
             <Stack.Screen
                 name="PasswordResetConfirmation"
                 component={PasswordResetConfirmation}
             />
             </Stack.Group>
             }
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigation;
