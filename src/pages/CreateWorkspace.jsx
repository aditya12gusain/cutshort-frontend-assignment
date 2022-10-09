import { useState } from "react";
// Chakra UI
import { Box, Flex, Text } from "@chakra-ui/react";
// Icon
// Components
import edenLogo from "../assets/edenLogo.png";
import StepStatus from "../components/StepStatus/StepStatus";
// Steps
import Step1 from "../components/Steps/Step1";
import Step2 from "../components/Steps/Step2";
import Step3 from "../components/Steps/Step3";
import Step4 from "../components/Steps/Step4";

const CreateWorkspace = () => {
  const [currentStep, setCurrentStep] = useState(0);

  /**
   * List of steps in a form.
   */
  const steps = [
    {
      label: "Step 1",
      content: (
        <Step1 setCurrentStep={setCurrentStep} currentStep={currentStep} />
      ),
    },
    {
      label: "Step 2",
      content: (
        <Step2 setCurrentStep={setCurrentStep} currentStep={currentStep} />
      ),
    },
    {
      label: "Step 3",
      content: (
        <Step3 setCurrentStep={setCurrentStep} currentStep={currentStep} />
      ),
    },
    {
      label: "Step 4",
      content: (
        <Step4 setCurrentStep={setCurrentStep} currentStep={currentStep} />
      ),
    },
  ];

  return (
    <Box marginY={"3rem"}>
      <Flex
        alignItems={"center"}
        justifyContent={"center"}
        marginBottom={"3rem"}
        gap={2}
      >
        <img src={edenLogo} alt="eden logo" width={30} />

        <Text fontSize={"3xl"} as="b">
          Eden
        </Text>
      </Flex>

      <StepStatus
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        steps={steps}
        maxW={{ base: "90%", md: "60%", lg: "40%" }}
        marginX={"auto"}
      />

      {/* Displaying the current step component */}
      {steps[currentStep].content}
    </Box>
  );
};

export default CreateWorkspace;
