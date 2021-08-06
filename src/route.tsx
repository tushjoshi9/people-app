import { Flex } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";
import { Router } from "@reach/router";
import React, { Suspense } from "react";
const Login = React.lazy(() => import("./components/login"));
const Home = React.lazy(() => import("./components/home"));

export default function Route() {

	return (
		<Box minH={`calc(100vh - 144px)`} w="100%">
			<Suspense
				fallback={
					<Flex
						width="100%"
						minHeight="calc(100vh - 170px)"
						alignItems="center"
						justifyContent="center"
					>
						<Spinner
							thickness="4px"
							speed="0.65s"
							emptyColor="gray.200"
							color="teal.500"
							size="xl"
						/>
					</Flex>
				}
			>
				<Router>
					<Login path="/login" />
					<Home path="/" />
				</Router>
			</Suspense>
		</Box>
	);
}