import React, { useContext } from "react";
// Chakra UI
import {
  Flex,
  Text,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react";
// Components
import PrimaryButton from "../common/PrimaryButton";
// Form Context
import { FormContext } from "../../context/Form.context";

const Step2 = ({ setCurrentStep, currentStep }) => {
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
          Let's set up a home for all your work
        </Text>

        <Text
          fontSize={"md"}
          textAlign={"center"}
          color={"gray.500"}
          maxW={"85%"}
        >
          You can always create another workspace later.
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
          <FormLabel>Workspace Name</FormLabel>

          <Input
            type="text"
            name={"workspaceName"}
            value={data.workspaceName}
            onChange={handleFormUpdate}
            placeholder={"Eden"}
          />
        </FormControl>

        <FormControl>
          <FormLabel display="flex" gap={"1"}>
            Workspace URL <Text color="gray.400">(optional)</Text>
          </FormLabel>

          <InputGroup>
            <InputLeftAddon color="gray.500" children="www.eden.com/" />

            <Input
              type="text"
              name={"workspaceUrl"}
              value={data.workspaceUrl}
              onChange={handleFormUpdate}
              placeholder={"Example"}
            />
          </InputGroup>
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

export default Step2;
