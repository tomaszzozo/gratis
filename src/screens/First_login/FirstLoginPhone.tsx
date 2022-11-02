import {useState} from "react";
import {Image, Text, View} from "react-native";
import {Center, VStack} from "native-base";
import {Foundation} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootStackParamList} from "../../navigation/AppNavigation";
import { } from "firebase/auth"; // dodać funkcje do obsługi adresu

import CustomInput from "../../components/common/CustomInput";
import CustomButton from "../../components/common/CustomButton";

import Logo from "../../../assets/logo/logoMockWhite.png";

import COLORS from "../../constants/colors";
import styles from "./styles/FirstLogin.styles";

type FirstLoginPhone = NativeStackNavigationProp<RootStackParamList>;

const FirstLoginPhone = () => {
    const [phone, setPhone] = useState("");

    const navigation = useNavigation<FirstLoginPhone>();

    const handleContinue = () => {
        //navigation.navigate("MainMenu");
    };

    const handlePhoneChange = (text: string) => {
        setPhone(text);
    };


    

    return (
        <View style={styles.container}>
            <VStack>
                <Center marginTop="30%">
                    <Image source={Logo} style={styles.logo}/>
                    <Text style={styles.headerText}>Off-road</Text>
                    <Text style={styles.headerText2}>PHONE NUMBER</Text>
                    <Text style={styles.textInformation}>Text for phone number reason here</Text>
                </Center>
                <Center marginTop="15%">
                    <CustomInput
                        state={phone}
                        setState={handlePhoneChange}
                        placeholder="Phone number"
                        icon={<Foundation name="key" color={COLORS.blood}/>}
                        marginTop="5%"
                    />
                </Center>
                <Center marginTop="10%">
                    <CustomButton
                        text="CONTINUE"
                        marginBottom="5%"
                        clickHandler={handleContinue}
                    />
                </Center>
            </VStack>
        </View>
    );
};

export default FirstLoginPhone;
