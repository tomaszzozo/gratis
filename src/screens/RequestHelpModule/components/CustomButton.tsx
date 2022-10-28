import {Dimensions, Text} from "react-native";
import {Button} from "native-base";

import COLORS from "../../../constants/colors";

type CustomButtonProps = {
    text: string;
    margin?: number;
    clickHandler: () => void;
};

const CustomButton = ({
                          text,
                          margin = 18,
                          clickHandler,
                      }: CustomButtonProps) => {
    return (
        <Button
            width={Dimensions.get('window').width * 252 / 320}
            height={Dimensions.get('window').height * 42 / 568}
            maxWidth={400}
            maxHeight={100}
            borderRadius={90}
            backgroundColor={COLORS.blood}
            shadow={5}
            marginTop={margin}
            marginBottom={margin}
            onPress={clickHandler}
        >
            <Text style={{
                fontSize: 12,
                fontFamily: "Lato-Bold",
                color: COLORS["floral white"]
            }}>
                {text}
            </Text>
        </Button>
    );
};

export default CustomButton;
