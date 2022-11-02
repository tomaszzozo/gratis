import {DefaultTheme, NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import Login from "../screens/Login/Login";
import Register from "../screens/Register/Register";
import PasswordReset from "../screens/PasswordReset/PasswordReset";
import PasswordResetConfirmation from "../screens/PasswordReset/PasswordResetConfirmation";
import FirstLogin from "../screens/First_login/FirstLogin";

import COLORS from "../constants/colors";
import CallForHelpAreYouSure from "../screens/RequestHelpModule/CallForHelpAreYouSure";
import CallForHelp from "../screens/RequestHelpModule/CallForHelp";

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: COLORS["gamboge orange"],
    },
};

export type RootStackParamList = {
    Login: undefined;
    FirstLogin: undefined;
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
    return (
        <NavigationContainer ref={navigationRef} theme={theme}>
            {/*<AuthStack />*/}
            <HelpCallStack/>
        </NavigationContainer>
    );
};

export default AppNavigation;
