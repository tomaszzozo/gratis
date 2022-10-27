import { Input, Icon, Box } from "native-base";

import COLORS from "../../constants/colors";

type CustomInputProps = {
  placeholder: string;
  icon: JSX.Element;
  marginTop?: string;
  type?: "text" | "password";
};

const CustomInput = ({
  placeholder,
  icon,
  marginTop = "0",
  type = "text",
}: CustomInputProps) => {
  return (
    <Input
      variant="customInput"
      placeholderTextColor={COLORS["floral white"]}
      placeholder={placeholder}
      size="customLg"
      color={COLORS["floral white"]}
      mt={marginTop}
      type={type}
      InputLeftElement={
        <Box
          bgColor={COLORS["floral white"]}
          size="customSm"
          variant="roundedBox"
        >
          <Icon as={icon} size={8} ml="1.5" mt="1.5" color={COLORS.blood} />
        </Box>
      }
    />
  );
};

export default CustomInput;
