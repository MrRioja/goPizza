import { BackButton } from "@src/components/BackButton";
import { RadioButton } from "@src/components/RadioButton";
import { PIZZA_TYPES } from "@src/utils/pizzaTypes";
import React, { useState } from "react";
import { Platform } from "react-native";

import { Container, Header, Photo, Sizes } from "./styles";

export function Order() {
  const [size, setSize] = useState("");

  return (
    <Container behavior={Platform.OS === "ios" ? "padding" : undefined}>
      <Header>
        <BackButton onPress={() => {}} style={{ marginBottom: 108 }} />
      </Header>

      <Photo source={{ uri: "https://github.com/mrrioja.png" }} />

      <Sizes>
        {PIZZA_TYPES.map((item) => (
          <RadioButton
            key={item.id}
            title={item.name}
            onPress={() => setSize(item.id)}
            selected={size === item.id}
          />
        ))}
      </Sizes>
    </Container>
  );
}
