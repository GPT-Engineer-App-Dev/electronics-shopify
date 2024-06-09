import { Box, Flex, Link, Spacer, Heading } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="teal.500" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box>
          <Heading size="md" color="white">ElectroShop</Heading>
        </Box>
        <Spacer />
        <Flex alignItems="center">
          <NavLink to="/" exact>
            <Link px={2} py={1} rounded="md" _hover={{ textDecoration: "none", bg: "teal.600" }} color="white">
              Home
            </Link>
          </NavLink>
          <NavLink to="/products">
            <Link px={2} py={1} rounded="md" _hover={{ textDecoration: "none", bg: "teal.600" }} color="white">
              Products
            </Link>
          </NavLink>
          <NavLink to="/about">
            <Link px={2} py={1} rounded="md" _hover={{ textDecoration: "none", bg: "teal.600" }} color="white">
              About
            </Link>
          </NavLink>
          <NavLink to="/contact">
            <Link px={2} py={1} rounded="md" _hover={{ textDecoration: "none", bg: "teal.600" }} color="white">
              Contact
            </Link>
          </NavLink>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;