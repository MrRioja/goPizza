import React from "react";
import { Platform } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { Container, Header, Title, DeleteLabel } from "./styles";

export function Product() {
  return (
    <Container behavior={Platform.OS === "ios" ? "padding" : undefined}>
      <Header>
        <Title>Cadastrar</Title>

        <TouchableOpacity>
          <DeleteLabel>Deletar</DeleteLabel>
        </TouchableOpacity>
      </Header>
    </Container>
  );
}
