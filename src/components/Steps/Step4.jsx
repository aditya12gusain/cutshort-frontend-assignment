import React, { useContext } from "react";
// Chakra UI
import { Flex, Text, Icon, Box } from "@chakra-ui/react";
// Components
import PrimaryButton from "../common/PrimaryButton";
// React icons
import { BsCheckLg } from "react-icons/bs";
// Form Context
import { FormContext } from "../../context/Form.context";

const Step4 = () => {
  const { data } = useContext(FormContext);

  return (
    <Flex flexDir={"column"} gap={2} alignItems={"center"}>
      <Box
        width={"14"}
        height={"14"}
        background={"brand.500"}
        color="white"
        borderRadius={"50%"}
        display="flex"
        alignItems={"center"}
        justifyContent="center"
        marginTop={"3rem"}
      >
        <Icon as={BsCheckLg} />
      </Box>

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
          Congratulations, {data.fullName}
        </Text>

        <Text
          fontSize={"md"}
          textAlign={"center"}
          color={"gray.500"}
          maxW={"85%"}
        >
          You have completed onboarding, You can start using the Eden!
        </Text>
      </Flex>

      <PrimaryButton
        width={"100%"}
        colorScheme={"brand"}
        paddingY={"1.5rem"}
        // onClick={() => setCurrentStep(currentStep + 1)}
        maxW={{ base: "80%", md: "50%", lg: "40%" }}
        title="Launch Eden"
      />
    </Flex>
  );
};

export default Step4;
