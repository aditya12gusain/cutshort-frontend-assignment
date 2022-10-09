import { Box, Button, Flex } from "@chakra-ui/react";
import React from "react";

const StepStatus = ({ currentStep, setCurrentStep, steps, ...rest }) => {
  return (
    <>
      <Flex {...rest} alignItems="center" justifyContent={"space-evenly"}>
        {steps.map((each, index) => (
          <Box
            position={"relative"}
            width="100%"
            display={"flex"}
            alignItems="center"
            justifyContent={"center"}
            key={index}
          >
            {index <= currentStep && (
              <Button
                borderRadius={"50%"}
                variant="solid"
                colorScheme={"brand"}
                key={index}
                height={"40px"}
                width={"40px"}
                zIndex={2}
                onClick={() => setCurrentStep(index)}
                style={{ transition: "all ease-in-out 500ms" }}
              >
                {index + 1}
              </Button>
            )}
            {index > currentStep && (
              <Button
                zIndex={2}
                borderRadius={"50%"}
                variant="outline"
                background={"white"}
                height={"40px"}
                width={"40px"}
                key={index}
                color={"gray.500"}
                onClick={() => setCurrentStep(index)}
                style={{ transition: "all ease-in-out 500ms" }}
              >
                {index + 1}
              </Button>
            )}

            <Box
              position={"absolute"}
              height={"2px"}
              width={
                index === 0
                  ? "50%"
                  : index === steps.length - 1
                  ? "50%"
                  : "100%"
              }
              left={index === 0 && "50%"}
              right={index === steps.length - 1 && "50%"}
              background={index <= currentStep ? "brand.600" : "gray.200"}
              zIndex={1}
              transition={"all 500ms cubic-bezier(0.73, 0.01, 1, 0.99) "}
            ></Box>
          </Box>
        ))}
      </Flex>
    </>
  );
};

export default StepStatus;
