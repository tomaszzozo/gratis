import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../screens/Login/Login";
import Register from "../screens/Register/Register";
import PasswordReset from "../screens/PasswordReset/PasswordReset";
import PasswordResetConfirmation from "../screens/PasswordReset/PasswordResetConfirmation";

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
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false, animation: "none" }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="PasswordReset" component={PasswordReset} />
      <Stack.Screen
        name="PasswordResetConfirmation"
        component={PasswordResetConfirmation}
      />
    </Stack.Navigator>
  );
};

const AppNavigation = ({ navigationRef }: { navigationRef: any }) => {
  return (
    <NavigationContainer ref={navigationRef} theme={theme}>
      <AuthStack />
    </NavigationContainer>
  );
};

export default AppNavigation;
