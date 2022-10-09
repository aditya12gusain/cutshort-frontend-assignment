import { Button } from "@chakra-ui/react";
import React from "react";

const PrimaryButton = (props) => {
  return <Button {...props}>{props.title}</Button>;
};

export default PrimaryButton;
