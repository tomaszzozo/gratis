import { useState } from "react";
import { View, Image, Text } from "react-native";
import { VStack, Center } from "native-base";
import { Feather, Foundation, Entypo } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/AppNavigation";

import CustomInput from "../../components/common/CustomInput";
import CustomButton from "../../components/common/CustomButton";
import AppBar from "../../components/common/AppBar";
import styles from "./styles/DeleteAccount.styles";
import COLORS from "../../constants/colors";
import { validateEmail, validatePassword } from "../../utils/validators";
import Logo from "../../../assets/logo/logoMockWhite.png";

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
		setDeleteSuccess(true);
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
			{!deleteSuccess ? (
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
			) : (
				<VStack>
					<Center marginTop="35%">
						<Image source={Logo} style={styles.logo} />
					</Center>
					<Center marginTop="5%" padding={7}>
						<Text style={styles.textBold}>Sad to see you go...</Text>
						<Text style={styles.text}>
							Sad to see you go... Thank you for using Off-road. We hope to see
							you again very soon. If you have any suggestions about fixing this
							app, don’t hesitate to write a review. Your feedback is one of the
							most important thing to us.
						</Text>
						<Text style={styles.text}>So long, partner!</Text>
					</Center>
					<Center marginTop="30%">
						<CustomButton
							text="SEE YOU SOON"
							clickHandler={handleBackPress}
							margin={4}
						/>
					</Center>
				</VStack>
			)}
		</View>
	);
}
