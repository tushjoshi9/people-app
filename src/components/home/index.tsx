import { RouteComponentProps } from "@reach/router";
import { useEffect, useRef, useState } from "react";
import { Box, Skeleton, SkeletonText, Badge, Image, Grid, Heading } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons"


const createArray = (n: number) => Array.from({ length: n }, (_, i) => i + 1)

const Home: RouteComponentProps & any = () => {
  const [list, setList] = useState(createArray(3));
  const [pageCount, setPageCount] = useState(1);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(element => element[0].isIntersecting ? setPageCount(pageCount => pageCount + 1) : null,
      { threshold: 1 });
    if (ref.current) {
      observer.observe(ref.current as any);
    }
  }, [])
  useEffect(() => {

    setTimeout(() =>
      setList(createArray(pageCount * 3)), 1000);
  }, [pageCount]);

  const property = {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Modern home in city center in the heart of historic Los Angeles",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 4,
  }

  return <div style={{
    padding: "20px"
  }}><Heading mb={10}>
      Welcome to People Dashboard!
    </Heading>
    <Grid templateColumns="repeat( auto-fit, minmax(300px, 1fr) )" gap={6} mb={6}>
      {list.map(item =>
        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" key={item}>
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
    <Grid templateColumns="repeat( auto-fit, minmax(300px, 1fr) )" gap={6}>
      {Array(3).fill("").map(_ =>
        <Box boxShadow="lg" bg="white" ref={ref} border="1px #eee solid" borderRadius="10px">
          <Skeleton height="180" />
          <SkeletonText padding="6" mt="4" noOfLines={3} spacing="4" />
        </Box>
      )}
    </Grid>

  </div>
}

export default Home;