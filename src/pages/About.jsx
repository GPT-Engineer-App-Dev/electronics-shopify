import { Box, Heading, Text } from "@chakra-ui/react";

const About = () => {
  return (
    <Box p={4}>
      <Heading as="h2" mb={4}>
        About Us
      </Heading>
      <Text fontSize="lg">
        Welcome to our Electronics Store. We offer the latest in electronic devices and accessories.
      </Text>
    </Box>
  );
};

export default About;