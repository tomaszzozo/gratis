import {useState} from "react";
import {Image, Text, View} from "react-native";
import {Center, VStack} from "native-base";
import {Feather} from "@expo/vector-icons";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootStackParamList} from "../../navigation/AppNavigation";
import {useNavigation} from "@react-navigation/native";

import CustomInput from "../../components/common/CustomInput";
import CustomButton from "../../components/common/CustomButton";

import Logo from "../../../assets/logo/logoMockWhite.png";

import COLORS from "../../constants/colors";
import styles from "./styles/PasswordReset.styles";

type PasswordResetScreenProp = NativeStackNavigationProp<RootStackParamList>;

const PasswordReset = () => {
    const [email, setEmail] = useState("");

    const navigation = useNavigation<PasswordResetScreenProp>();

    const handleTakeMeBackPress = () => {
        navigation.navigate("Login");
    };

    const handleEmailChange = (text: string) => {
        setEmail(text);
    };

    const handleResetButtonPress = () => {
        /*sendPasswordResetEmail(auth, email)
          .then((res) => console.log(res))
          .catch((error) => console.log(error));*/
        navigation.navigate("PasswordResetConfirmation");
    };

    return (
        <View style={styles.container}>
            <VStack>
                <Center marginTop="25%">
                    <Image source={Logo} style={styles.logo}/>
                    <Text style={styles.headerText}>Off-road</Text>
                    <Text style={styles.bloodyTextBold}>Let's Drive Together</Text>
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
                        state={email}
                        setState={handleEmailChange}
                        placeholder="Email"
                        icon={<Feather name="at-sign" color={COLORS.blood}/>}
                    />
                </Center>
                <Center marginTop="10%">
                    <CustomButton
                        text="RESET PASSWORD"
                        clickHandler={handleResetButtonPress}
                    />
                </Center>
                <Center marginTop="10%">
                    <Text style={styles.bloodyText} onPress={handleTakeMeBackPress}>
                        Nevermind, <Text style={styles.bloodyTextBold}>take me back</Text>
                    </Text>
                </Center>
            </VStack>
        </View>
    );
};

export default PasswordReset;
