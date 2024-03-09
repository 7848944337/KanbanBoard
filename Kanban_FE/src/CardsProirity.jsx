import React from "react";
import { Text } from "@chakra-ui/react";
import { TriangleUpIcon, TriangleDownIcon } from "@chakra-ui/icons";
const IconSelector = ({ value }) => {
  const getIcon = (value) => {
    if (value === "Low") {
      return <Low />;
    } else if (value === "Medium") {
      return <Medium />;
    } else if (value === "High") {
      return <High />;
    }
  };

  return <div>{getIcon(value)}</div>;
};

// Example icons
const High = () => (
  <Text color="#434242" size="xs" fontSize="12px" textAlign="right">
    <TriangleUpIcon boxSize={3} color="red.500" />
    High
  </Text>
);
const Medium = () => (
  <Text color="#434242" size="xs" fontSize="12px" textAlign="right">
    <TriangleDownIcon boxSize={3} color="blue.500" /> Medium
  </Text>
);
const Low = () => (
  <Text color="#434242" size="xs" fontSize="12px" textAlign="right">
    <TriangleDownIcon boxSize={3} color="green.500" />
    Low
  </Text>
);

export default IconSelector;
