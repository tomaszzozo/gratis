import {Image, Text, View} from "react-native";
import {Center, VStack} from "native-base";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootStackParamList} from "../../navigation/AppNavigation";
import {useNavigation} from "@react-navigation/native";

import CustomButton from "../../components/common/CustomButton";

import Logo from "../../../assets/logo/logoMockWhite.png";

import styles from "./styles/PasswordReset.styles";

type PasswordResetConfirmationScreenProp =
    NativeStackNavigationProp<RootStackParamList>;

const PasswordResetConfirmation = () => {
    const navigation = useNavigation<PasswordResetConfirmationScreenProp>();

    const handleGoBackButtonPress = () => {
        navigation.navigate("Login");
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
                    <Text style={styles.whiteTextBold}>All done!</Text>
                </Center>
                <Center marginTop="5%">
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
                <Center marginTop="15%">
                    <CustomButton text="GO BACK" clickHandler={handleGoBackButtonPress}/>
                </Center>
            </VStack>
        </View>
    );
};

export default PasswordResetConfirmation;
