import { useState } from "react";
import { View, Image, Text } from "react-native";
import { VStack, Center } from "native-base";
import { Feather, Foundation, Entypo } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/AppNavigation";

import CustomInput from "../../components/common/CustomInput";
import CustomButton from "../../components/common/CustomButton";
import styles from "./styles/AccountSettings.styles";
import COLORS from "../../constants/colors";
import { validateEmail, validatePassword } from "../../utils/validators";
import HomeAppBar from "../../components/common/HomeAppBar";

type AccountSettingsProp = NativeStackNavigationProp<RootStackParamList>;

export default function AccountSettings(props: any) {
	const [email, setEmail] = useState("");
	const [isEmailInvalid, setIsEmailInvalid] = useState(false);
	const [wasEmailFocused, setWasEmailFocused] = useState(false);
	const [phone, setPhone] = useState("");
	const [address, setAddress] = useState("");
	const [saveError, setSaveError] = useState(false);
	const [saveErrorMessage, setSaveErrorMessage] = useState("");

	const handleEmailChange = (text: string) => {
		setIsEmailInvalid(!validateEmail(text));
		setEmail(text);
	};

	const handleEmailOutsidePress = () => {
		setWasEmailFocused(true);
	};

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

	const saveUserData = () => {
		//   if (!isEmailInvalid) {
		//     signInWithEmailAndPassword(auth, email, password)
		//         .then(() => {
		//           setSaveError(false);
		//         })
		//         .catch((error : any) => {
		//           setSaveError(true);
		//           if (error.message.includes("user")) {
		//             setSaveErrorMessage("Incorrect email");
		//           }
		//         });
		//   }
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
						state={email}
						setState={handleEmailChange}
						placeholder="Email"
						icon={<Feather name="at-sign" color={COLORS.blood} />}
						isContentInvalid={isEmailInvalid && wasEmailFocused}
						errorMessage="Invalid email"
						outsideClick={handleEmailOutsidePress}
						margin={2}
					/>
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
					<CustomButton text="SAVE" clickHandler={saveUserData} />
				</Center>
				<Center marginTop="5%">
					<Text style={styles.headerText}>DANGER ZONE</Text>
				</Center>
				<Center marginTop="5%">
					<CustomButton
						text="CHANGE PASSWORD"
						clickHandler={handleChangePasswordPress}
						margin={0}
					/>
					<CustomButton
						text="DELETE ACCOUNT"
						clickHandler={handleDeleteAccountPress}
						margin={4}
					/>
				</Center>
			</VStack>
		</View>
	);
}
