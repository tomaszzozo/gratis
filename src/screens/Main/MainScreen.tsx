import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/AppNavigation";
import { View } from "react-native";
import { Text, VStack, Image, Center } from "native-base";
import AppBar from "../../components/common/AppBar";
import ImageButton from "../../components/common/ImageButton";
import COLORS from "../../constants/colors";
import styles from "./styles/MainScreen.styles";
import { getAuth } from "firebase/auth";

type MainScreenProp = NativeStackNavigationProp<RootStackParamList>;

export default function MainScreen() {
	const wheel = require("../../../assets/wheel.png");
	const map = require("../../../assets/map.jpg");
	const truck = require("../../../assets/stepTruckIsStuck.jpeg");
	const navigation = useNavigation<MainScreenProp>();
	const handleRequestHelpPress = () => {
		navigation.navigate("CallForHelpAreYouSure");
	};
	const handleMapPress = () => {
		navigation.navigate("MapMode");
	};
	const auth = getAuth();
	const user = auth.currentUser;
	return (
		<View style={styles.container}>
			<AppBar />
			<VStack space={5}>
				<Center marginTop="15%">
					<Text fontSize="38" fontWeight="bold" color={COLORS["floral white"]}>
						Hi {user?.displayName} 👋
					</Text>
				</Center>
				<Center marginTop="10%">
					<ImageButton
						backgroundColor={COLORS.blood}
						image={truck}
						text="🚨 Request help 🚨"
						lowerText="To get you back on track"
						handlePress={handleRequestHelpPress}
					/>
				</Center>
				<Center>
					<Text fontSize="28" fontWeight="bold" color={COLORS["floral white"]}>
						or
					</Text>
				</Center>
				<Center>
					<ImageButton
						backgroundColor={COLORS["floral white"]}
						image={map}
						text="🗺️ Take a look at the map 🗺️"
						textColor={COLORS["gamboge orange"]}
						lowerText="To see who needs help nearby"
						handlePress={handleMapPress}
					/>
				</Center>
				<Center marginTop="15%">
					<Text fontSize="28" fontWeight="bold" color={COLORS["floral white"]}>
						Happy offroading!{" "}
						<Image source={wheel} size="xs" alt="Logo" marginLeft={5} />
					</Text>
				</Center>
			</VStack>
		</View>
	);
}
