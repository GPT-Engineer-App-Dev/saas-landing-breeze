import { Container, VStack, Heading, Text, Button, Box, Image } from "@chakra-ui/react";
import { FaRocket } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.xl" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
          <Heading fontSize="4xl" textAlign="center">Welcome to Your SaaS Startup</Heading>
          <Text mt={4} fontSize="md" textAlign="center">
            Revolutionizing the way you do business with state-of-the-art solutions.
          </Text>
        </Box>
        <Image
          borderRadius="full"
          boxSize="150px"
          src="https://via.placeholder.com/150"
          alt="SaaS Product"
        />
        <Button rightIcon={<FaRocket />} colorScheme="blue" variant="solid">
          Get Started
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;