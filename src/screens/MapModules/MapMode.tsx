import { Box, ScrollView, View } from "native-base";
import styles from "./styles/MapMode.styles";
import Ribbon from "./components/Ribbon";
import React, { useEffect, useState } from "react";
import { Dimensions, Text, Image } from "react-native";
import LineSeparator from "../../components/common/LineSeparator";
import CustomButton from "./components/CustomButton";
import { MaterialIcons } from "@expo/vector-icons";
import COLORS from "../../constants/colors";
import HelpingUserCard from "./components/HelpingUserCard";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/AppNavigation";
import { useNavigation } from "@react-navigation/native";
import * as Location from "expo-location";
import MapView from "react-native-maps";

const RenderUsersWhoWantToHelp = () => {
  return (
    <Box style={styles.cardsSection}>
      <HelpingUserCard
        username={"gigachad1337"}
        phoneIconClickHandler={() => {
          throw new Error("Not implemented");
        }}
        cancelIconClickHandler={() => {
          throw new Error("Not implemented");
        }}
      />
      <HelpingUserCard
        username={"bogdanBoner"}
        phoneIconClickHandler={() => {
          throw new Error("Not implemented");
        }}
        cancelIconClickHandler={() => {
          throw new Error("Not implemented");
        }}
      />
    </Box>
  );
};

const MapMode = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [coords, setCoords] = useState<{ latitude: string; longitude: string }>(
    { latitude: "", longitude: "" }
  );
  const [lastRefresh, setLastRefresh] = useState(
    new Date().toString().substring(16, 24)
  );

  const getLocation = async () => {
    let location = await Location.getCurrentPositionAsync({});
    setCoords({
      latitude: location.coords.latitude.toString().substring(0, 9),
      longitude: location.coords.longitude.toString().substring(0, 9),
    });
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        // TODO: navigate to main screen
        setCoords({
          latitude: "NO_PERMISSION",
          longitude: "NO_PERMISSION",
        });
        throw new Error("Not implemented");
      } else {
        await getLocation();
      }
    })();
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setLastRefresh(new Date().toString().substring(16, 24));
      getLocation();
    }, 5 * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Ribbon text={"Map Mode"} />
      <Box style={styles.wrapper}>
        <Box style={styles.topSection}>
          <View /*>
            <MapView
              initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            />
            */
          ></View>
          <Image
            source={require("./map.jpg")}
            style={{
              height: (Dimensions.get("window").height * 286) / 568,
              width: (Dimensions.get("window").height * 260) / 568,
            }}
          />
          <Box style={styles.lineSeparatorPosition}>
            <LineSeparator />
          </Box>
        </Box>
        <Box style={styles.middleSection}>
          <ScrollView h={styles.middleSection.height - 20}>
            <RenderUsersWhoWantToHelp />
          </ScrollView>
          <Box style={styles.lineSeparatorPosition}></Box>
        </Box>
      </Box>
    </>
  );
};

export default MapMode;
