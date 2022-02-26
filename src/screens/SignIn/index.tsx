import React, { useState } from "react";
import { KeyboardAvoidingView, Platform } from "react-native";
import { useAuth } from "@hooks/auth";

import { Input } from "@src/components/Input";
import { Button } from "@src/components/Button";
import {
  Brand,
  Container,
  Content,
  ForgotPasswordButton,
  ForgotPasswordLabel,
  Title,
} from "./styles";

import brandImg from "@assets/brand.png";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn, forgotPassword, isLogging } = useAuth();

  function handleSignIn() {
    signIn(email, password);
  }

  function handleForgotPassword() {
    forgotPassword(email);
  }

  return (
    <Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <Content>
          <Brand source={brandImg} />
          <Title>Login</Title>
          <Input
            placeholder="E-mail"
            type="secondary"
            autoCorrect={false}
            autoCapitalize={"none"}
            onChangeText={setEmail}
          />

          <Input
            placeholder="Senha"
            type="secondary"
            onChangeText={setPassword}
            secureTextEntry
          />

          <ForgotPasswordButton onPress={handleForgotPassword}>
            <ForgotPasswordLabel>Esqueci minha senha</ForgotPasswordLabel>
          </ForgotPasswordButton>

          <Button
            title="Entrar"
            type="secondary"
            isLoading={isLogging}
            onPress={handleSignIn}
          />
        </Content>
      </KeyboardAvoidingView>
    </Container>
  );
}
