import { View, Text, Image } from "react-native";
import { VStack, Center } from "native-base";
import { Feather } from "@expo/vector-icons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/AppNavigation";
import { useNavigation } from "@react-navigation/native";

import CustomInput from "../../components/common/CustomInput";
import CustomButton from "../../components/common/CustomButton";

import Logo from "../../../assets/logo/logoMockWhite.png";

import { ICONS_NAME } from "../../constants/dictionary";
import COLORS from "../../constants/colors";
import styles from "./styles/PasswordReset.styles";

type PasswordResetScreenProp = NativeStackNavigationProp<RootStackParamList>;

const PasswordReset = () => {
  const navigation = useNavigation<PasswordResetScreenProp>();

  const handleTakeMeBackPress = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <VStack>
        <Center marginTop="25%">
          <Image source={Logo} style={styles.logo} />
          <Text style={styles.headerText}>Off-road</Text>
          <Text style={styles.textBold}>Let's Drive Together</Text>
        </Center>
        <Center marginTop="10%">
          <Text style={styles.signUpText}>PASSWORD RESET</Text>
        </Center>
        <Center marginTop="10%">
          <Text style={styles.whiteText}>Enter your email addres.</Text>
          <Text style={styles.whiteText}>
            If this is the email associated with your
          </Text>
          <Text style={styles.whiteText}>
            account, we will send you a temporary
          </Text>
          <Text style={styles.whiteText}>
            password that you can use to log in and set
          </Text>
          <Text style={styles.whiteText}>your new password.</Text>
        </Center>
        <Center marginTop="10%">
          <CustomInput
            placeholder="Email"
            icon={<Feather name={ICONS_NAME.at} color={COLORS.blood} />}
          />
        </Center>
        <Center marginTop="10%">
          <CustomButton text="RESET PASSWORD" />
        </Center>
        <Center marginTop="10%">
          <Text style={styles.bloodyText} onPress={handleTakeMeBackPress}>
            Nevermind, <Text style={styles.textBold}>take me back</Text>
          </Text>
        </Center>
      </VStack>
    </View>
  );
};

export default PasswordReset;
