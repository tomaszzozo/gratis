import {useState} from "react";
import {Image, Text, View} from "react-native";
import {Center, VStack} from "native-base";
import {Feather, Foundation, MaterialIcons} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootStackParamList} from "../../navigation/AppNavigation";
import {createUserWithEmailAndPassword} from "firebase/auth";
import {auth} from "../../../firebaseConfig";

import CustomInput from "../../components/common/CustomInput";
import CustomButton from "../../components/common/CustomButton";

import Logo from "../../../assets/logo/logoMockWhite.png";

import COLORS from "../../constants/colors";
import styles from "./styles/Register.styles";

type RegisterScreenProp = NativeStackNavigationProp<RootStackParamList>;

const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatedPassword, setRepeatedPassword] = useState("");

    const navigation = useNavigation<RegisterScreenProp>();

    const handleSignInPress = () => {
        navigation.navigate("Login");
    };

    const handleUsernameChange = (text: string) => {
        setUsername(text);
    };

    const handleEmailChange = (text: string) => {
        setEmail(text);
    };

    const handlePasswordChange = (text: string) => {
        setPassword(text);
    };

    const handleRepeatedPasswordChange = (text: string) => {
        setRepeatedPassword(text);
    };

    const registerUser = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredentials) => console.log(userCredentials))
            .catch((error) => console.log(error));
    };

    return (
        <View style={styles.container}>
            <VStack>
                <Center marginTop="15%">
                    <Image source={Logo} style={styles.logo}/>
                    <Text style={styles.headerText}>Off-road</Text>
                    <Text style={styles.textBold}>Let's Drive Together</Text>
                </Center>
                <Center marginTop="10%">
                    <Text style={styles.signUpText}>SIGN UP</Text>
                    <CustomInput
                        state={username}
                        setState={handleUsernameChange}
                        placeholder="Username"
                        icon={<MaterialIcons name="person"/>}
                        marginTop="10%"
                    />
                    <CustomInput
                        state={email}
                        setState={handleEmailChange}
                        placeholder="Email"
                        icon={<Feather name="at-sign" color={COLORS.blood}/>}
                        marginTop="5%"
                    />
                    <CustomInput
                        state={password}
                        setState={handlePasswordChange}
                        placeholder="Password"
                        icon={<Foundation name="key" color={COLORS.blood}/>}
                        marginTop="5%"
                        type="password"
                    />
                    <CustomInput
                        state={repeatedPassword}
                        setState={handleRepeatedPasswordChange}
                        placeholder="Repeat password"
                        icon={<Foundation name="key" color={COLORS.blood}/>}
                        marginTop="5%"
                        type="password"
                    />
                </Center>

                <Center marginTop="15%">
                    <CustomButton
                        text="SIGN UP"
                        marginBottom="5%"
                        clickHandler={registerUser}
                    />
                    <Text style={styles.text} onPress={handleSignInPress}>
                        Already have an account?{" "}
                        <Text style={styles.textBold}>Sign In</Text>
                    </Text>
                </Center>
            </VStack>
        </View>
    );
};

export default Register;
