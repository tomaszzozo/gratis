import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/AppNavigation";
import {
	StatusBar,
	Box,
	HStack,
	Image,
	Text,
	Icon,
	IconButton,
} from "native-base";
import { Entypo } from "@expo/vector-icons";
import logo from "../../../assets/logo/logoMockWhite.png";
import COLORS from "../../constants/colors";

type HomeAppBarProp = NativeStackNavigationProp<RootStackParamList>;

type CustomHomeAppBarProps = {
	text: string;
};

export default function HomeAppBar({
	text = "Off-road",
}: CustomHomeAppBarProps) {
	const navigation = useNavigation<HomeAppBarProp>();
	const handleHomePress = () => {
		navigation.navigate("MainScreen");
	};
	return (
		<>
			<StatusBar barStyle="light-content" />
			<Box safeAreaTop bg="violet.600" />
			<HStack
				bg={COLORS.blood}
				px="1"
				py="3"
				justifyContent="space-between"
				alignItems="center"
				w="100%"
			>
				<HStack alignItems="center">
					<Image source={logo} size="xs" alt="Logo" marginLeft={2} />
					<Text color="white" fontSize="24" fontWeight="bold" marginLeft={4}>
						{text}
					</Text>
				</HStack>
				<HStack>
					<IconButton
						icon={<Icon as={Entypo} name="home" size="xl" color="white" />}
						onPress={handleHomePress}
					/>
				</HStack>
			</HStack>
		</>
	);
}
