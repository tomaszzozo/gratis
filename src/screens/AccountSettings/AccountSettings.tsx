import { useState } from "react";
import { View, Image, Text } from "react-native";
import { VStack, Center } from "native-base";
import { Feather, Foundation, Entypo } from "@expo/vector-icons";

import { getAuth, updateEmail } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/AppNavigation";

import CustomInput from "../../components/common/CustomInput";
import CustomButton from "../../components/common/CustomButton";
import styles from "./styles/AccountSettings.styles";
import COLORS from "../../constants/colors";
import { validateEmail, validatePassword } from "../../utils/validators";
import HomeAppBar from "../../components/common/HomeAppBar";
import { addUserData } from "../../utils/firestore";

type AccountSettingsProp = NativeStackNavigationProp<RootStackParamList>;

export default function AccountSettings(props: any) {
	const [phone, setPhone] = useState("");
	const [address, setAddress] = useState("");
	const [saveSuccess, setSaveSuccess] = useState(false);
	const [saveError, setSaveError] = useState(false);
	const [saveErrorMessage, setSaveErrorMessage] = useState("");

	const handlePhoneChange = (text: string) => {
		setPhone(text);
	};

	const handleAddressChange = (text: string) => {
		setAddress(text);
	};

	const navigation = useNavigation<AccountSettingsProp>();
	const handleChangePasswordPress = () => {
		navigation.navigate("ChangePassword");
	};
	const handleDeleteAccountPress = () => {
		navigation.navigate("DeleteAccount");
	};

	const handleChangeEmailPress = () => {
		navigation.navigate("ChangeEmail");
	};

	const handleSaveInfo = () => {
		const auth = getAuth();
		setSaveSuccess(false);
		setSaveError(false);
		if (auth.currentUser && auth.currentUser.email) {
			addUserData(auth.currentUser.email, address, phone)
				.then((res) => {
					setSaveSuccess(true);
				})
				.catch((error) => {
					console.log(error);
					setSaveError(true);
					setSaveErrorMessage(error.message);
				});
		}
	};

	return (
		<View style={styles.container}>
			<VStack>
				<HomeAppBar text="Profile" />
				<Center marginTop="5%">
					<Text style={styles.headerText}>CONTACT INFO</Text>
				</Center>
				<Center marginTop="5%">
					<CustomInput
						state={phone}
						setState={handlePhoneChange}
						placeholder="Phone"
						icon={<Entypo name="phone" color={COLORS.blood} />}
						isContentInvalid={false}
						margin={2}
					/>
					<CustomInput
						state={address}
						setState={handleAddressChange}
						placeholder="Address"
						icon={<Entypo name="home" color={COLORS.blood} />}
						isContentInvalid={false}
						margin={2}
					/>
				</Center>
				<Center>
					{saveError && <Text style={styles.textBold}>{saveErrorMessage}</Text>}
					{saveSuccess && <Text style={styles.textBold}>Saved user info</Text>}
				</Center>
				<Center>
					<CustomButton text="SAVE" clickHandler={handleSaveInfo} />
				</Center>
				<Center marginTop="5%">
					<Text style={styles.headerText}>DANGER ZONE</Text>
				</Center>
				<Center marginTop="3%">
					<CustomButton
						text="CHANGE E-MAIL"
						clickHandler={handleChangeEmailPress}
						margin={3}
					/>
					<CustomButton
						text="CHANGE PASSWORD"
						clickHandler={handleChangePasswordPress}
						margin={3}
					/>
					<CustomButton
						text="DELETE ACCOUNT"
						clickHandler={handleDeleteAccountPress}
						margin={3}
					/>
				</Center>
			</VStack>
		</View>
	);
}
