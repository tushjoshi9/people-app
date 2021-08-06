import { Header } from "./common/header";
import { Footer } from "./common/footer";
import Route from "./route"
import { Box, Flex } from '@chakra-ui/react';
import { useStorage } from "./common/storage";
import { navigate } from "@reach/router";

function App() {

  const { apiStore } = useStorage();

  console.log(apiStore, "apis")

  if (apiStore?.username) {
    navigate("/home")
  } else {
    navigate("/login")
  }

  const isUserLoggedIn = Object.keys(apiStore).length !== 0

  return isUserLoggedIn ? <Box >
    <Header />
    <Route />
    <Footer />
  </Box> : <Flex><Route /></Flex>
}
export default App;
