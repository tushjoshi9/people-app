import { Header } from "./common/header";
import { Footer } from "./common/footer";
import Route from "./route"
import { Box, Flex } from '@chakra-ui/react';
import { useStorage } from "./common/storage";
import { navigate } from "@reach/router";

function App() {

  const { apiStore } = useStorage();
  const isUserLoggedIn = apiStore?.username ?? "";

  if (isUserLoggedIn) {
    navigate("/home")
  } else {
    navigate("/login")
  }


  return isUserLoggedIn ? <Box >
    <Header />
    <Route />
    <Footer />
  </Box> : <Flex><Route /></Flex>
}
export default App;
