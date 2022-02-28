import React from "react";
import { Platform } from "react-native";
import { BackButton } from "@src/components/BackButton";
import { TouchableOpacity } from "react-native-gesture-handler";

import { Container, Header, Title, DeleteLabel } from "./styles";

export function Product() {
  return (
    <Container behavior={Platform.OS === "ios" ? "padding" : undefined}>
      <Header>
        <BackButton />
        <Title>Cadastrar</Title>

        <TouchableOpacity>
          <DeleteLabel>Deletar</DeleteLabel>
        </TouchableOpacity>
      </Header>
    </Container>
  );
}
