import React from "react";
import { useTheme } from "styled-components";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

import happyEmoji from "@assets/happy.png";

import {
  Container,
  Header,
  Greeting,
  GreetingEmoji,
  GreetingText,
} from "./styles";

export function Home() {
  const { COLORS } = useTheme();

  return (
    <Container>
      <Header>
        <Greeting>
          <GreetingEmoji source={happyEmoji} />
          <GreetingText>Olá, Admin</GreetingText>
        </Greeting>

        <TouchableOpacity>
          <MaterialIcons name="logout" color={COLORS.TITLE} size={24} />
        </TouchableOpacity>
      </Header>
    </Container>
  );
}
