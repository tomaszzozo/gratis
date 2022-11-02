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

type FirstLoginAddress = NativeStackNavigationProp<RootStackParamList>;

const FirstLoginAddress = () => {
    const [address, setAddress] = useState("");

    const navigation = useNavigation<FirstLoginAddress>();

    const handleContinue = () => {
        //navigation.navigate("MainMenu");
    };

    const handleAddressChange = (text: string) => {
        setAddress(text);
    };


    

    return (
        <View style={styles.container}>
            <VStack>
                <Center marginTop="30%">
                    <Image source={Logo} style={styles.logo}/>
                    <Text style={styles.headerText}>Off-road</Text>
                    <Text style={styles.headerText2}>LOCATION</Text>
                    <Text style={styles.textInformation}>Since our app send push notifications based on available users in range of an accident, 
                                                        we need to know where you live. You can leave this field blank if you want, but you will 
                                                        not recieve any push notifications and won’t be able to help other users untill you provide this information.</Text>
                    <Text style={styles.textInformation}>Enter you address, including country, state, city, street, street number and flat number.</Text>
                </Center>
                <Center marginTop="15%">
                    <CustomInput
                        state={address}
                        setState={handleAddressChange}
                        placeholder="Address"
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

export default FirstLoginAddress;
