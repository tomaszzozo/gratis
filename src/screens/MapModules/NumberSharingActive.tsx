import { Box, ScrollView, View } from "native-base";
import styles from "./styles/NumberSharingActive.styles";
import Ribbon from "./components/Ribbon";
import React, { useEffect, useState } from "react";
import { Dimensions, Text, Image } from "react-native";
import LineSeparator from "../../components/common/LineSeparator";
import CustomButton from "./components/CustomButton";
import { MaterialIcons } from "@expo/vector-icons";
import COLORS from "../../constants/colors";
import HelpCard from "./components/HelpCard";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/AppNavigation";
import { useNavigation } from "@react-navigation/native";
import * as Location from "expo-location";
import MapView from "react-native-maps";

const InfoCard = () => {
  return (
    <Box style={styles.cardsSection}>
      <HelpCard
        username={"gigachad1337"}
        backIconClickHandler={() => {
          throw new Error("Not implemented");
        }}
        mapIconClickHandler={() => {
          throw new Error("Not implemented");
        }}
      />
    </Box>
  );
};

const MapMode = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <>
      <Ribbon text={"Map Mode"} />
      <Box style={styles.wrapper}>
        <Box style={styles.topSection}>MAPA</Box>
        <Box style={styles.middleSection}>
          <ScrollView h={styles.middleSection.height - 20}>
            <InfoCard />
          </ScrollView>
        </Box>
        <Box style={styles.bottomSection}>
          <Box style={styles.cardsSection}>
            <Box style={styles.bottomCard}>
              <MaterialIcons
                name="info"
                size={(Dimensions.get("window").height * 32) / 568}
                color={COLORS["floral white"]}
              />
              <Text style={styles.bottomCardText}>
                Number sharing is active. The user is informed that you are
                willing to help. Excpect a call or try to find him on your own
                using his map location. You will be notified if the user cancels
                the rescue operation.
              </Text>
            </Box>
            <Box style={styles.bottomCard}>
              <Text style={styles.bottomCardText2}>
                Remember to always call the emergency number if the situation
                gets really messy. Always prioritize your health!
              </Text>
            </Box>
          </Box>
          <Box style={styles.shareButtonPosition}>
            <CustomButton
              text="CANCEL NUMBER SHARING"
              margin={0}
              clickHandler={() => {
                navigation.navigate("ExchangeInfo");
              }}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default MapMode;
