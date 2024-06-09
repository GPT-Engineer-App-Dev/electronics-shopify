import { Container, SimpleGrid, Heading, Text, Box } from "@chakra-ui/react";
import ProductCard from "../components/ProductCard";

const sampleProducts = [
  {
    id: 1,
    name: "Smartphone",
    price: 699,
    image: "https://via.placeholder.com/150",
    description: "A high-end smartphone with a sleek design and powerful features.",
  },
  {
    id: 2,
    name: "Laptop",
    price: 999,
    image: "https://via.placeholder.com/150",
    description: "A lightweight laptop with excellent performance and battery life.",
  },
  {
    id: 3,
    name: "Smartwatch",
    price: 199,
    image: "https://via.placeholder.com/150",
    description: "A stylish smartwatch with multiple health tracking features.",
  },
  {
    id: 4,
    name: "Headphones",
    price: 149,
    image: "https://via.placeholder.com/150",
    description: "Noise-cancelling headphones with superior sound quality.",
  },
];

const Index = () => {
  return (
    <Container maxW="container.xl" py={8} bg="gray.50">
      <Heading as="h1" mb={4} textAlign="center">
        Welcome to Our Electronics Store
      </Heading>
      <Text fontSize="xl" mb={6} textAlign="center">
        Discover the latest and greatest in electronics.
      </Text>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 4 }} spacing={10}>
        {sampleProducts.map((product) => (
          <Box key={product.id} p={5} shadow="md" borderWidth="1px" borderRadius="md" bg="white">
            <ProductCard product={product} />
            <Text mt={4}>{product.description}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Index;