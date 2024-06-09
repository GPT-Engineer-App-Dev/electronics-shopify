import { Box, Flex, Link, Heading } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="teal.500" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Heading as="h1" size="lg" color="white">
          <RouterLink to="/">Electronics Store</RouterLink>
        </Heading>
        <Flex alignItems="center">
          <Link as={RouterLink} to="/" color="white" px={2}>
            Home
          </Link>
          <Link as={RouterLink} to="/about" color="white" px={2}>
            About
          </Link>
          <Link as={RouterLink} to="/contact" color="white" px={2}>
            Contact
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;