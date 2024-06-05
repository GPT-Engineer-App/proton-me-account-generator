import { useState } from "react";
import { Container, VStack, Input, Button, Text, Box, useToast, HStack } from "@chakra-ui/react";
import { FaCopy } from "react-icons/fa";

const Index = () => {
  const [email, setEmail] = useState("");
  const [generatedEmail, setGeneratedEmail] = useState("");
  const toast = useToast();

  const generateEmail = () => {
    const randomString = Math.random().toString(36).substring(2, 10);
    const newEmail = `${randomString}@proton.me`;
    setGeneratedEmail(newEmail);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedEmail);
    toast({
      title: "Copied to clipboard",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Proton.me Email Generator</Text>
        <Button colorScheme="teal" onClick={generateEmail}>
          Generate Email
        </Button>
        {generatedEmail && (
          <Box>
            <HStack>
              <Input value={generatedEmail} isReadOnly />
              <Button onClick={copyToClipboard} leftIcon={<FaCopy />}>
                Copy
              </Button>
            </HStack>
          </Box>
        )}
      </VStack>
    </Container>
  );
};

export default Index;
