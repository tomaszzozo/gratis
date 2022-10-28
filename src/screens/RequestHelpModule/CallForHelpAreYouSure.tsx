import React, {useState} from "react";
import {Text} from "react-native";
import {Center, View, WarningOutlineIcon} from "native-base";
import styles from "./styles/CallForHelpAreYouSure.styles";
import CustomInput from "./components/CustomInput";
import {Feather} from "@expo/vector-icons";
import COLORS from "../../constants/colors";
import CustomButton from "./components/CustomButton";

const helpMeClick = () => {
    throw new Error('Not implemented yet');
}

const goBackClick = () => {
    throw new Error('Not implemented yet');
}

const CallForHelpAreYouSure = () => {
    const [email, setEmail] = useState("");
    return (
        <View style={styles.wrapper}>
            <Center>
                <WarningOutlineIcon style={styles.warningIcon}/>
                <Text style={styles.warningHeader}>Warning</Text>
            </Center>

            <Center>
                <Text style={styles.paragraph}>
                    You are about to ask for the help of every user in 30km radius.
                    This action can be performed about once every hour. Abusing this action WILL get you banned.
                    Write your email to accept this operation.
                </Text>
                <CustomInput
                    state={email}
                    setState={(input: string) => setEmail(input)}
                    placeholder="Email"
                    icon={<Feather name="at-sign" color={COLORS.blood}/>}
                />
            </Center>

            <View>
                <CustomButton
                    margin={0}
                    text="OK, HELP ME!"
                    clickHandler={helpMeClick}
                />
                <CustomButton
                    text="GO BACK"
                    clickHandler={goBackClick}
                />
            </View>
        </View>
    );
}

export default CallForHelpAreYouSure;