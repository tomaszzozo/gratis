import { Text } from "react-native";
import { Button } from "native-base";

import styles from "./styles/CustomButton.styles";

type CustomButtonProps = {
  text: string;
  marginBottom?: string;
  clickHandler: () => void;
};

const CustomButton = ({
  text,
  marginBottom = "0",
  clickHandler,
}: CustomButtonProps) => {
  return (
    <Button
      size="customLg"
      variant="bloodyRound"
      mb={marginBottom}
      onPress={clickHandler}
    >
      <Text style={styles.text}>{text}</Text>
    </Button>
  );
};

export default CustomButton;
