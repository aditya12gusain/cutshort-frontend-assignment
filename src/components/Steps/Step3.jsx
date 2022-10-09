import React, { useContext } from "react";
// Chakra UI
import { Flex, Text, Box, Icon } from "@chakra-ui/react";
// Components
import PrimaryButton from "../common/PrimaryButton";
// React icons
import { HiUserGroup } from "react-icons/hi";
import { RiUser3Fill } from "react-icons/ri";
// Form Context
import { FormContext } from "../../context/Form.context";

const Step3 = ({ setCurrentStep, currentStep }) => {
  const { data, handleWorkspaceType } = useContext(FormContext);

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
          How are you planning to use Eden?
        </Text>

        <Text
          fontSize={"md"}
          textAlign={"center"}
          color={"gray.500"}
          maxW={"85%"}
        >
          We'll streamline your setup experience accordingly.
        </Text>
      </Flex>

      <Flex
        width={"100%"}
        maxW={{ base: "80%", md: "50%", lg: "40%" }}
        marginBottom={"1rem"}
        gap={"1rem"}
      >
        <Box
          width="50%"
          border="1px"
          padding={"25px 18px"}
          borderRadius="5px"
          borderColor={
            data.workspaceType === "myself" ? "brand.500" : "gray.200"
          }
          _hover={{
            borderColor:
              data.workspaceType === "myself" ? "brand.500" : "gray.500",
          }}
          transition="all ease-in-out 300ms"
          cursor="pointer"
          display={"flex"}
          flexDir={"column"}
          gap={2}
          onClick={() => handleWorkspaceType("myself")}
        >
          <Icon
            as={RiUser3Fill}
            color={data.workspaceType === "myself" ? "brand.500" : "gray.700"}
            w={6}
            h={6}
          />

          <Text fontSize={"md"} as={"b"}>
            For myself
          </Text>

          <Text fontSize={"sm"} color="gray.500">
            Write better. Think more clearly. Stay organized.
          </Text>
        </Box>

        <Box
          width="50%"
          border="1px"
          padding={"25px 18px"}
          borderRadius="5px"
          borderColor={
            data.workspaceType === "myteam" ? "brand.500" : "gray.200"
          }
          _hover={{
            borderColor:
              data.workspaceType === "myteam" ? "brand.500" : "gray.500",
          }}
          transition="all ease-in-out 300ms"
          cursor="pointer"
          display={"flex"}
          flexDir={"column"}
          gap={2}
          onClick={() => handleWorkspaceType("myteam")}
        >
          <Icon
            as={HiUserGroup}
            color={data.workspaceType === "myteam" ? "brand.500" : "gray.700"}
            w={6}
            h={6}
          />

          <Text fontSize={"md"} as={"b"}>
            With my team
          </Text>

          <Text fontSize={"sm"} color="gray.500">
            Wikis, docs, tasks & projects, all in one place.
          </Text>
        </Box>
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

export default Step3;
