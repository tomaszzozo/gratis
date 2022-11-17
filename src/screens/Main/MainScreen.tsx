import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/AppNavigation";
import { View } from "react-native";
import { Box, Button, Text, VStack, Image, Center } from "native-base";
import AppBar from "../../components/common/AppBar";
import ImageButton from "../../components/common/ImageButton";
import COLORS from "../../constants/colors";
import wheel from "../../../assets/wheel.png";
import styles from "./styles/MainScreen.styles";

type MainScreenProp = NativeStackNavigationProp<RootStackParamList>;

export default function MainScreen() {
	const navigation = useNavigation<MainScreenProp>();
	const handleRequestHelpPress = () => {
		navigation.navigate("CallForHelp");
	};
	return (
		<View style={styles.container}>
			<AppBar />
			<VStack space={10}>
				<Center marginTop="15%">
					<Text fontSize="32" fontWeight="bold" color={COLORS["floral white"]}>
						Hi User 👋
					</Text>
				</Center>
				<Center>
					<Button
						backgroundColor={COLORS.blood}
						size="lg"
						onPress={handleRequestHelpPress}
						style={styles.button}
					>
						🚨 Request help 🚨 To get you back on track
					</Button>
				</Center>
				<Center>
					<Text fontSize="24" fontWeight="bold" color={COLORS["floral white"]}>
						or
					</Text>
				</Center>
				<Center>
					<Button color={"COLORS.beigeWhite"} size="lg" style={styles.button}>
						🗺️ Take a look at the map 🗺️{""}To see who needs help nearby
					</Button>
				</Center>
				<Center>
					<Text fontSize="28" fontWeight="bold" color={COLORS["floral white"]}>
						Happy offroading!{" "}
						<Image source={wheel} size="xs" alt="Logo" marginLeft={5} />
					</Text>
				</Center>
			</VStack>
		</View>
	);
}
