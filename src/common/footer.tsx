import { useColorMode } from "@chakra-ui/color-mode";
import { Box, Text } from "@chakra-ui/layout";

export const Footer = () => {
	const { colorMode } = useColorMode();
	return (
		<Box
			as="footer"
			padding="1rem"
			bg={`mode.${colorMode}.box`}
			justifyContent="center"
			display="flex"
			borderTop={`1px ${colorMode === "light" ? "#dddddd" : "000000"} solid`}
		>
			<Text color={`mode.${colorMode}.text`}>
				Thank you for visiting!
			</Text>
		</Box>
	);
};