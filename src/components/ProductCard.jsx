import { Box, Image, Badge, Text, Button } from "@chakra-ui/react";

const ProductCard = ({ product }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="5">
      <Image src={product.image} alt={product.name} />

      <Box p="6">
        <Box display="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            New
          </Badge>
        </Box>

        <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
          {product.name}
        </Box>

        <Box mt="2" color="gray.600" fontSize="sm">
          {product.description}
        </Box>

        <Box>
          ${product.price}
          <Box as="span" color="gray.600" fontSize="sm">
            / unit
          </Box>
        </Box>

        <Button mt="4" colorScheme="teal">
          Add to Cart
        </Button>
      </Box>
    </Box>
  );
};

export default ProductCard;