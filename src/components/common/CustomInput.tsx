import React from "react";
import {Text} from "react-native";
import {Box, FormControl, Icon, Input, WarningOutlineIcon} from "native-base";

import COLORS from "../../constants/colors";

type CustomInputProps = {
    state: string;
    setState: (text: string) => void;
    placeholder: string;
    icon: JSX.Element;
    marginTop?: string;
    type?: "text" | "password";
};

const CustomInput = ({
                         state,
                         setState,
                         placeholder,
                         icon,
                         marginTop = "0",
                         type = "text",
                     }: CustomInputProps) => {
    return (
        <Box>
            <FormControl isInvalid={true} color={COLORS.blood}>
                <Box bgColor="red.500" width="80%" borderRadius={20} shadow={5}>
                    <Input
                        variant="customInput"
                        placeholderTextColor={COLORS["floral white"]}
                        placeholder={placeholder}
                        size="customLg"
                        color={COLORS["floral white"]}
                        mt={marginTop}
                        type={type}
                        value={state}
                        onChangeText={(text: string) => setState(text)}
                        InputLeftElement={
                            <Box
                                bgColor={COLORS["floral white"]}
                                size="customSm"
                                variant="roundedBox"
                            >
                                <Icon
                                    as={icon}
                                    size={8}
                                    ml="1.5"
                                    mt="1.5"
                                    color={COLORS.blood}
                                />
                            </Box>
                        }
                    />
                </Box>
                <FormControl.ErrorMessage
                    leftIcon={<WarningOutlineIcon size="xs" color={COLORS.blood}/>}
                >
                    <Text style={{color: COLORS.blood}}>Incorrect password</Text>
                </FormControl.ErrorMessage>
            </FormControl>
        </Box>
    );
};

export default CustomInput;
