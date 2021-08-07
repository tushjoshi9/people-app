import { RouteComponentProps } from "@reach/router";
import { useEffect, useRef, useState } from "react";
import { Box, Skeleton, SkeletonText, Badge, Image, Grid, Heading } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons"
import { useWindowDimensions } from "../getDimensions";
import VacayImage from "../../assets/img/vacay.jpg"

const createArray = (n: number): any => Array.from({ length: n }, (_, i) => i + 1);

const Home: RouteComponentProps & any = () => {
  const { width, noOfItems } = useWindowDimensions();
  const [list, setList] = useState(createArray(noOfItems));
  const [pageCount, setPageCount] = useState(1);
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(element => element[0].isIntersecting ? setPageCount(pageCount => pageCount + 1) : null,
    );
    if (ref.current) {
      observer.observe(ref.current as any);
    }
  }, [])
  useEffect(() => {
    setTimeout(() =>
      setList(createArray(pageCount * (noOfItems * 2))), 500);
  }, [pageCount, noOfItems]);

  const property = {
    imageUrl: VacayImage,
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Modern home in city center in the heart of historic Los Angeles",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 4,
  }

  return <Box
    pl={[5, 10]}
    pr={[5, 10]}
    mt={10}><Heading mb={6} fontSize="1.8em">Welcome to People's Dashboard!</Heading>
    <Grid templateColumns="repeat( auto-fit, minmax(280px, 1fr) )" gap={6} mb={6}>
      {list.map((item: any) =>
        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" key={item} className="animated-card">
          <Image src={property.imageUrl} alt={property.imageAlt} />
          <Box p="6">
            <Box d="flex" alignItems="baseline">
              <Badge borderRadius="full" px="2" colorScheme="purple">
                New
              </Badge>
              <Box
                color="gray.500"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="xs"
                textTransform="uppercase"
                ml="2"
              >
                {property.beds} beds &bull; {property.baths} baths
              </Box>
            </Box>

            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              {property.title}
            </Box>
            <Box>
              {property.formattedPrice}
              <Box as="span" color="gray.600" fontSize="sm">
                / wk
              </Box>
            </Box>
            <Box d="flex" mt="2" alignItems="center">
              {Array(5)
                .fill("")
                .map((_, i) => (
                  <StarIcon
                    key={i}
                    color={i < property.rating ? "purple.500" : "gray.300"}
                  />
                ))}
              <Box as="span" ml="2" color="gray.600" fontSize="sm">
                {property.reviewCount} reviews
              </Box>
            </Box>
          </Box>
        </Box>)}
    </Grid>
    <Grid templateColumns="repeat(auto-fit, minmax(280px, 1fr))" gap={6} mb={6}>
      {Array(width < 600 ? 1 : noOfItems).fill("").map(_ =>
        <Box boxShadow="lg" bg="white" ref={ref} border="1px #eee solid" borderRadius="10px">
          <Skeleton height="180" />
          <SkeletonText padding="6" mt="4" noOfLines={3} spacing="4" />
        </Box>
      )}
    </Grid>
  </Box>
}

export default Home;