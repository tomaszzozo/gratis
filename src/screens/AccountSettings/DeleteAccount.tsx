import { useState } from "react";
import { View, Image, Text } from "react-native";
import { VStack, Center } from "native-base";
import { Feather, Foundation, Entypo } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";
import { getAuth, deleteUser } from "firebase/auth";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/AppNavigation";

import CustomInput from "../../components/common/CustomInput";
import CustomButton from "../../components/common/CustomButton";
import AppBar from "../../components/common/AppBar";
import styles from "./styles/DeleteAccount.styles";
import COLORS from "../../constants/colors";
import { validateEmail, validatePassword } from "../../utils/validators";

type DeleteAccountProp = NativeStackNavigationProp<RootStackParamList>;

export default function DeleteAccount(props: any) {
	const [email, setEmail] = useState("");
	const [isEmailInvalid, setIsEmailInvalid] = useState(false);
	const [wasEmailFocused, setWasEmailFocused] = useState(false);
	const [deleteError, setDeleteError] = useState(false);
	const [deleteErrorMessage, setDeleteErrorMessage] = useState("");
	const [deleteSuccess, setDeleteSuccess] = useState(false);

	const handleEmailChange = (text: string) => {
		setIsEmailInvalid(!validateEmail(text));
		setEmail(text);
	};

	const handleEmailOutsidePress = () => {
		setWasEmailFocused(true);
	};

	const navigation = useNavigation<DeleteAccountProp>();
	const handleBackPress = () => {
		navigation.navigate("AccountSettings");
	};
	const handleDeleteAccountPress = () => {
		const auth = getAuth();
		const user = auth.currentUser;

		if (user) {
			if (user.email !== email) {
				setDeleteError(true);
				setDeleteErrorMessage("Wrong email!");
			} else
				deleteUser(user)
					.then(() => {
						navigation.navigate("AccountDeleted");
					})
					.catch((error) => {
						setDeleteError(true);
						setDeleteErrorMessage(error.message);
					});
		} else throw new Error("User not found!");
	};

	return (
		<View style={styles.container}>
			<VStack>
				<Center marginTop="15%">
					<Entypo name="warning" size={120} color={COLORS.blood} />
				</Center>
				<Center marginTop="5%" paddingX={10}>
					<Text style={styles.textBold}>Warning</Text>
					<Text style={styles.text}>
						You are about to delete your account. All data associated with it
						will be gone forever (very long time).
					</Text>
					<Text style={styles.text}>
						Type your email to confim this action.
					</Text>
				</Center>
				<Center marginTop="15%">
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
				</Center>
				<Center>
					{deleteError && (
						<Text style={styles.textBold}>{deleteErrorMessage}</Text>
					)}
				</Center>
				<Center marginTop="15%">
					<CustomButton
						text="DELETE ACCOUNT"
						clickHandler={handleDeleteAccountPress}
						disabled={isEmailInvalid || email.length <= 0}
						margin={0}
					/>
					<CustomButton
						text="GO BACK"
						clickHandler={handleBackPress}
						margin={4}
					/>
				</Center>
			</VStack>
		</View>
	);
}
