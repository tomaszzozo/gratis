import {Box, ScrollView} from "native-base";
import styles from "./styles/CallForHelp.styles";
import Ribbon from "./components/Ribbon";
import React from "react";
import {Dimensions, Text} from "react-native";
import LineSeparator from "../../components/common/LineSeparator";
import CustomButton from "./components/CustomButton";
import {MaterialIcons} from '@expo/vector-icons';
import COLORS from "../../constants/colors";
import HelpingUserCard from "./components/HelpingUserCard";

const RenderUsersWhoWantToHelp = () => {
    return (
        <Box style={styles.cardsSection}>
            <HelpingUserCard username={"gigachad"} phoneIconClickHandler={() => {
                throw new Error("Not implemented")
            }} cancelIconClickHandler={() => {
                throw new Error("Not implemented")
            }}/>
            <HelpingUserCard username={"janusz"} phoneIconClickHandler={() => {
                throw new Error("Not implemented")
            }} cancelIconClickHandler={() => {
                throw new Error("Not implemented")
            }}/>
            <HelpingUserCard username={"1337"} phoneIconClickHandler={() => {
                throw new Error("Not implemented")
            }} cancelIconClickHandler={() => {
                throw new Error("Not implemented")
            }}/>
            <HelpingUserCard username={"bogdanBoner"} phoneIconClickHandler={() => {
                throw new Error("Not implemented")
            }} cancelIconClickHandler={() => {
                throw new Error("Not implemented")
            }}/>
            <HelpingUserCard username={"megawonsz9"} phoneIconClickHandler={() => {
                throw new Error("Not implemented")
            }} cancelIconClickHandler={() => {
                throw new Error("Not implemented")
            }}/>
        </Box>
    )
}

const CallForHelp = () => {
    return (
        <>
            <Ribbon text={"Requesting help"}/>
            <Box style={styles.wrapper}>
                <Box style={styles.topSection}>
                    <Text style={styles.topText}>
                        You are currently requesting help. Below is a list of users who agreed to help you. They have
                        constant access to your current location but, for privacy reasons, don't know your phone
                        number. Be sure to contact them to discuss the details, or click the cross button to let them
                        know you already expect help from someone else. DO NOT click cancel unless you are 100%
                        sure you will get the help you need.
                    </Text>
                    <Box style={styles.lineSeparatorPosition}>
                        <LineSeparator/>
                    </Box>
                </Box>
                <Box style={styles.middleSection}>
                    <ScrollView h={styles.middleSection.height-20}>
                        <RenderUsersWhoWantToHelp/>
                    </ScrollView>
                    <Box style={styles.lineSeparatorPosition}>
                        <LineSeparator/>
                    </Box>
                </Box>
                <Box style={styles.bottomSection}>
                    <Box style={styles.cardsSection}>
                        <Box style={styles.bottomCard}>
                            <MaterialIcons name="info" size={Dimensions.get('window').height * 32 / 568}
                                           color={COLORS["floral white"]}/>
                            <Text style={styles.bottomCardText}>Always prioritize your health!</Text>
                        </Box>
                        <Box style={styles.bottomCard}>
                            <MaterialIcons name="refresh" size={Dimensions.get('window').height * 32 / 568}
                                           color={COLORS["floral white"]}/>
                            <Text style={styles.bottomCardText}>Last refresh: 21:34:05</Text>
                        </Box>
                        <Box style={styles.bottomCard}>
                            <MaterialIcons name="location-pin" size={Dimensions.get('window').height * 32 / 568}
                                           color={COLORS["floral white"]}/>
                            <Text style={styles.bottomCardText}>41°24'12.2"N{"\n"}2°10'26.5"E</Text>
                        </Box>
                    </Box>
                    <Box style={styles.cancelButtonPosition}>
                        <CustomButton text="CANCEL" margin={0} clickHandler={() => {
                            throw new Error("Not implemented")
                        }}/>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default CallForHelp;