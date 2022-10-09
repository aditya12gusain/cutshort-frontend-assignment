import React, { useContext } from "react";
// Chakra UI
import { Flex, FormControl, FormLabel, Input, Text } from "@chakra-ui/react";
// Components
import PrimaryButton from "../common/PrimaryButton";
// Form Context
import { FormContext } from "../../context/Form.context";

const Step1 = ({ setCurrentStep, currentStep }) => {
  const { data, handleFormUpdate } = useContext(FormContext);

  return (
    <Flex flexDir={"column"} gap={2} alignItems={"center"}>
      <Flex
        flexDir={"column"}
        width={"100%"}
        alignItems={"center"}
        marginY={"2rem"}
        gap={1}
      >
        <Text
          fontSize={{ base: "xl", md: "3xl" }}
          as="b"
          textAlign={"center"}
          maxW={"85%"}
        >
          Welcome! First things first...
        </Text>

        <Text
          fontSize={"md"}
          textAlign={"center"}
          color={"gray.500"}
          maxW={"85%"}
        >
          You can always change them later.
        </Text>
      </Flex>

      <Flex
        width={"100%"}
        maxW={{ base: "80%", md: "50%", lg: "40%" }}
        marginBottom={"1rem"}
        flexDir={"column"}
        gap={"1rem"}
      >
        <FormControl>
          <FormLabel>Full Name</FormLabel>

          <Input
            type="text"
            name={"fullName"}
            value={data.fullName}
            onChange={handleFormUpdate}
            placeholder={"Steve Jobs"}
          />
        </FormControl>

        <FormControl>
          <FormLabel>Display Name</FormLabel>

          <Input
            type="text"
            name={"displayName"}
            value={data.displayName}
            onChange={handleFormUpdate}
            placeholder={"Steve"}
          />
        </FormControl>
      </Flex>

      <PrimaryButton
        width={"100%"}
        colorScheme={"brand"}
        paddingY={"1.5rem"}
        onClick={() => setCurrentStep(currentStep + 1)}
        maxW={{ base: "80%", md: "50%", lg: "40%" }}
        title="Create Workspace"
      />
    </Flex>
  );
};

export default Step1;
