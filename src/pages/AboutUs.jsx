import { Container, VStack, Heading, Text, Box, Image } from "@chakra-ui/react";
import { FaBuilding } from "@react-icons/fa";

const AboutUs = () => {
  return (
    <Container centerContent maxW="container.xl" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
          <Heading fontSize="4xl" textAlign="center">About Us</Heading>
          <Text mt={4} fontSize="md" textAlign="center">
            Learn more about our mission, vision, and the values that drive our team to deliver the best solutions.
          </Text>
        </Box>
        <Image
          borderRadius="full"
          boxSize="150px"
          src="https://via.placeholder.com/150"
          alt="Our Team"
        />
        <Text fontSize="lg" p={5}>
          Our company was founded with the goal of providing innovative and efficient solutions for businesses worldwide. We are committed to excellence and strive to exceed expectations.
        </Text>
      </VStack>
    </Container>
  );
};

export default AboutUs;