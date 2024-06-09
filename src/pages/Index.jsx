import { Container, Text, VStack, Heading, Button } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to ElectroShop</Heading>
        <Text fontSize="lg">Your one-stop shop for all electronic gadgets.</Text>
        <NavLink to="/products">
          <Button colorScheme="teal" size="lg">Shop Now</Button>
        </NavLink>
      </VStack>
    </Container>
  );
};

export default Index;