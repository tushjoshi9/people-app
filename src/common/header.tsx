import { Link as ReachLink } from "@reach/router";
import { Flex, Stack, Text, Box } from "@chakra-ui/layout";
import { useColorMode } from "@chakra-ui/color-mode";
import { Button } from "@chakra-ui/button";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Avatar, AvatarBadge } from "@chakra-ui/avatar";
import {
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
} from "@chakra-ui/popover";
import { useStorage } from "./storage";

export const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { setAPIStore } = useStorage();
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      p={0}
      pl={[5, 10]}
      pr={[5, 10]}
      bgColor={"purple.700"}
      color="white"
      top={0}
      zIndex={2}
      position="sticky"
    >
      <Flex align="center">
        <Box textAlign="center" mb="5px">
          <Text color={`mode.${colorMode}.white`} textTransform="uppercase" fontWeight="extrabold" fontSize="1.7em" fontStyle="italic" display="flex" alignItems="center" justifyContent="center">
            <ReachLink to="/home"><span style={{
              fontSize: "1.7em",
              top: "4px",
              right: "-4px",
              position: "relative"
            }}>P</span> eople
            </ReachLink>
          </Text>
        </Box>
      </Flex>
      <Stack direction="row" spacing={4} alignItems="center">
        <span data-testid="profile">
          <Popover placement="top">
            <PopoverTrigger>
              <Avatar size="sm">
                <AvatarBadge boxSize="1em" bg="green.500" />
              </Avatar>
            </PopoverTrigger>
            <PopoverContent w={250}>
              <PopoverArrow />
              <PopoverBody>
                <Text color={`mode.${colorMode}.text`} mb={5}>
                  Welcome, <strong>Debby Powers</strong>!
                </Text>
                <Button colorScheme="blue" size="sm" onClick={() => {
                  setAPIStore({ username: "" })
                }}>
                  Log out
                </Button>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </span>
        <Button
          aria-label="Light/Dark mode"
          onClick={toggleColorMode}
          bg="transparent"
        >
          {colorMode === "light" ? (
            <MoonIcon boxSize={6} data-testid="lighttheme" />
          ) : (
            <SunIcon boxSize={6} data-testid="darktheme" />
          )}
        </Button>
      </Stack>
    </Flex>
  );
};