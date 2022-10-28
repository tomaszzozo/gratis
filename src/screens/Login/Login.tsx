import { useState } from "react";
import { View, Image, Text } from "react-native";
import { VStack, Center } from "native-base";
import { Feather, Foundation } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/AppNavigation";
import { auth } from "../../../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

import CustomInput from "../../components/common/CustomInput";
import CustomButton from "../../components/common/CustomButton";

import Logo from "../../../assets/logo/logoMockWhite.png";

import COLORS from "../../constants/colors";
import styles from "./styles/Login.styles";

type LoginScreenProp = NativeStackNavigationProp<RootStackParamList>;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation<LoginScreenProp>();

  const handleSignUpPress = () => {
    navigation.navigate("Register");
  };

  const handleForgotPasswordPress = () => {
    navigation.navigate("PasswordReset");
  };

  const handleEmailChange = (text: string) => {
    setEmail(text);
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text);
  };

  const loginUser = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => console.log(userCredentials))
      .catch((error) => console.log(error));
  };

  return (
    <View style={styles.container}>
      <VStack>
        <Center marginTop="30%">
          <Image source={Logo} style={styles.logo} />
          <Text style={styles.headerText}>Off-road</Text>
          <Text style={styles.text}>Let's Drive Together</Text>
        </Center>
        <Center marginTop="15%">
          <CustomInput
            state={email}
            setState={handleEmailChange}
            placeholder="Email"
            icon={<Feather name="at-sign" color={COLORS.blood} />}
          />
          <CustomInput
            state={password}
            setState={handlePasswordChange}
            placeholder="Password"
            icon={<Foundation name="key" color={COLORS.blood} />}
            marginTop="5%"
          />
        </Center>
        <Center marginTop="10%">
          <CustomButton
            text="SIGN IN"
            marginBottom="5%"
            clickHandler={loginUser}
          />
          <Text style={styles.text} onPress={handleSignUpPress}>
            Don't have an account?{" "}
            <Text style={styles.textBold}>Sign Up Now</Text>
          </Text>
        </Center>
        <Center marginTop="5%">
          <Text style={styles.text} onPress={handleForgotPasswordPress}>
            Forgot password?
          </Text>
        </Center>
      </VStack>
    </View>
  );
};

export default Login;
