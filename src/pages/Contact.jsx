import { Box, Heading, Text } from "@chakra-ui/react";

const Contact = () => {
  return (
    <Box p={4}>
      <Heading as="h2" mb={4}>
        Contact Us
      </Heading>
      <Text fontSize="lg">
        If you have any questions, feel free to reach out to us at contact@electronicsstore.com.
      </Text>
    </Box>
  );
};

export default Contact;