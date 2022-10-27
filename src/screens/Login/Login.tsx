import { View, Image, Text } from "react-native";
import { VStack, Center } from "native-base";
import { MaterialIcons, Foundation } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/AppNavigation";

import CustomInput from "../../components/common/CustomInput";
import CustomButton from "../../components/common/CustomButton";

import Logo from "../../../assets/logo/logoMockWhite.png";

import { ICONS_NAME } from "../../constants/dictionary";
import COLORS from "../../constants/colors";
import styles from "./styles/Login.styles";

type LoginScreenProp = NativeStackNavigationProp<RootStackParamList>;

const Login = () => {
  const navigation = useNavigation<LoginScreenProp>();

  const handleSignUpPress = () => {
    navigation.navigate("Register");
  };

  const handleForgotPasswordPress = () => {
    navigation.navigate("PasswordReset");
  };

  return (
    <View style={styles.container}>
      <VStack>
        <VStack marginTop="30%">
          <Center>
            <Image source={Logo} style={styles.logo} />
            <Text style={styles.headerText}>Off-road</Text>
            <Text style={styles.text}>Let's Drive Together</Text>
          </Center>
        </VStack>
        <VStack marginTop="15%">
          <Center>
            <CustomInput
              placeholder="Username"
              icon={<MaterialIcons name={ICONS_NAME.person} />}
            />
            <CustomInput
              placeholder="Password"
              icon={<Foundation name={ICONS_NAME.key} color={COLORS.blood} />}
              marginTop="5%"
            />
          </Center>
        </VStack>
        <VStack marginTop="10%">
          <Center>
            <CustomButton text="SIGN IN" marginBottom="5%" />
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
      </VStack>
    </View>
  );
};

export default Login;
