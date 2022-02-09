import React from "react";

import { Input } from "@src/components/Input";
import { Container } from "./styles";
import { Button } from "@src/components/Button";

export function SignIn() {
  return (
    <Container>
      <Input
        placeholder="E-mail"
        type="secondary"
        autoCorrect={false}
        autoCapitalize={"none"}
      />

      <Input placeholder="Senha" type="secondary" secureTextEntry />

      <Button title="Entrar" type="secondary" />
    </Container>
  );
}
