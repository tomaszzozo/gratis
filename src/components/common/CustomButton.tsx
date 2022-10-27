import { Text } from "react-native";
import { Button } from "native-base";

import styles from "./styles/CustomButton.styles";

type CustomButtonProps = {
  text: string;
  marginBottom?: string;
};

const CustomButton = ({ text, marginBottom = "0" }: CustomButtonProps) => {
  return (
    <Button size="customLg" variant="bloodyRound" mb={marginBottom}>
      <Text style={styles.text}>{text}</Text>
    </Button>
  );
};

export default CustomButton;
