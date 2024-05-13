import { Container, VStack, Heading, Text, Button, Box, Image, Flex, SimpleGrid } from "@chakra-ui/react";
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
        <Box as="section" w="full" py={10} px={5} bg="gray.100">
          <Heading fontSize="3xl" textAlign="center" mb={5}>About Us</Heading>
          <Text fontSize="lg" textAlign="center" mb={10}>
            Our mission is to revolutionize the way businesses operate by providing cutting-edge technological solutions. We are a team dedicated to excellence and innovation.
          </Text>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <Flex direction="column" align="center">
              <Image borderRadius="full" boxSize="150px" src="https://via.placeholder.com/150" alt="Team Member 1" />
              <Text mt={4} fontSize="md" fontWeight="bold">John Doe</Text>
              <Text fontSize="sm">CEO</Text>
            </Flex>
            <Flex direction="column" align="center">
              <Image borderRadius="full" boxSize="150px" src="https://via.placeholder.com/150" alt="Team Member 2" />
              <Text mt={4} fontSize="md" fontWeight="bold">Jane Smith</Text>
              <Text fontSize="sm">CTO</Text>
            </Flex>
            <Flex direction="column" align="center">
              <Image borderRadius="full" boxSize="150px" src="https://via.placeholder.com/150" alt="Team Member 3" />
              <Text mt={4} fontSize="md" fontWeight="bold">Sam Wilson</Text>
              <Text fontSize="sm">CFO</Text>
            </Flex>
          </SimpleGrid>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;