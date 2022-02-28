import React from "react";
import { useTheme } from "styled-components";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacityProps } from "react-native";

import { Container } from "./styles";

export function BackButton({ ...rest }: TouchableOpacityProps) {
  const { COLORS } = useTheme();

  return (
    <Container {...rest}>
      <MaterialIcons name="chevron-left" size={18} color={COLORS.TITLE} />
    </Container>
  );
}
