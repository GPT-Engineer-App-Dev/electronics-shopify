import { Box, Heading, SimpleGrid, Image, Text, VStack } from "@chakra-ui/react";

const sampleProducts = [
  {
    id: 1,
    name: "Smartphone",
    image: "/images/smartphone.jpg",
    description: "Latest model smartphone with all the modern features.",
  },
  {
    id: 2,
    name: "Laptop",
    image: "/images/laptop.jpg",
    description: "High performance laptop for all your computing needs.",
  },
  {
    id: 3,
    name: "Headphones",
    image: "/images/headphones.jpg",
    description: "Noise-cancelling headphones for an immersive experience.",
  },
];

const Products = () => (
  <Box p={4}>
    <Heading as="h1" mb={4}>Products</Heading>
    <SimpleGrid columns={[1, null, 3]} spacing="40px">
      {sampleProducts.map((product) => (
        <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Image src={product.image} alt={product.name} />
          <Box p="6">
            <VStack align="start">
              <Heading as="h2" size="md">{product.name}</Heading>
              <Text>{product.description}</Text>
            </VStack>
          </Box>
        </Box>
      ))}
    </SimpleGrid>
  </Box>
);

export default Products;