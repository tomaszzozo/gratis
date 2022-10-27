import { View, Image, Text } from "react-native";
import { VStack, Center } from "native-base";
import { MaterialIcons, Foundation, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/AppNavigation";

import CustomInput from "../../components/common/CustomInput";
import CustomButton from "../../components/common/CustomButton";

import Logo from "../../../assets/logo/logoMockWhite.png";

import { ICONS_NAME } from "../../constants/dictionary";
import COLORS from "../../constants/colors";
import styles from "./styles/Register.styles";

type RegisterScreenProp = NativeStackNavigationProp<RootStackParamList>;

const Register = () => {
  const navigation = useNavigation<RegisterScreenProp>();

  const handleSignInPress = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <VStack>
        <VStack marginTop="15%">
          <Center>
            <Image source={Logo} style={styles.logo} />
            <Text style={styles.headerText}>Off-road</Text>
            <Text style={styles.textBold}>Let's Drive Together</Text>
          </Center>
          <Center marginTop="10%">
            <Text style={styles.signUpText}>SIGN UP</Text>
          </Center>
        </VStack>
        <VStack>
          <Center>
            <CustomInput
              placeholder="Username"
              icon={<MaterialIcons name={ICONS_NAME.person} />}
              marginTop="10%"
            />
            <CustomInput
              placeholder="Email"
              icon={<Feather name={ICONS_NAME.at} color={COLORS.blood} />}
              marginTop="5%"
            />
            <CustomInput
              placeholder="Password"
              icon={<Foundation name={ICONS_NAME.key} color={COLORS.blood} />}
              marginTop="5%"
              type="password"
            />
            <CustomInput
              placeholder="Repeat password"
              icon={<Foundation name={ICONS_NAME.key} color={COLORS.blood} />}
              marginTop="5%"
              type="password"
            />
          </Center>
        </VStack>
        <VStack marginTop="15%">
          <Center>
            <CustomButton text="SIGN UP" marginBottom="5%" />
            <Text style={styles.text} onPress={handleSignInPress}>
              Already have an account?{" "}
              <Text style={styles.textBold}>Sign In</Text>
            </Text>
          </Center>
        </VStack>
      </VStack>
    </View>
  );
};

export default Register;
