import { Box, Badge, Image } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

function ProductDetail(props) {
  return (
    <>
      <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Image boxSize={200} src={props.image} alt={props.category} />

        <Box p="3">
          <Box display="flex" flexDirection="row" justifyContent="center">
            <Badge borderRadius="full" px="2" colorScheme="teal">
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
              {props.price} price
            </Box>
          </Box>

          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            noOfLines={1}
            justifyContent="center"
          >
            {props.title}
          </Box>

          {/* <Box>
            {property.formattedPrice}
            <Box as="span" color="gray.600" fontSize="sm">
              / wk
            </Box>
          </Box> */}

          <Box display="flex" mt="2" justifyContent="center">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <StarIcon
                  key={i}
                  color={i < props.rating.rate ? "teal.500" : "gray.300"}
                />
              ))}
            <Box as="span" ml="2" color="gray.600" fontSize="sm">
              {props.rating.count} reviews
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default ProductDetail;
