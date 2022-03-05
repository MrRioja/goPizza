import React, { useEffect, useState } from "react";
import { useTheme } from "styled-components";
import { MaterialIcons } from "@expo/vector-icons";
import { Alert, FlatList, TouchableOpacity } from "react-native";
import firestore from "@react-native-firebase/firestore";

import happyEmoji from "@assets/happy.png";
import { Search } from "@src/components/Search";

import {
  Container,
  Header,
  Greeting,
  Title,
  GreetingEmoji,
  GreetingText,
  MenuHeader,
  MenuItemsNumber,
} from "./styles";
import { ProductCard, ProductProps } from "@src/components/ProductCard";

export function Home() {
  const [pizzas, setPizzas] = useState<ProductProps[]>([]);
  const [search, setSearch] = useState("");
  const { COLORS } = useTheme();

  async function fetchPizzas(value: string) {
    const formattedValue = value.toLocaleLowerCase().trim();

    firestore()
      .collection("pizzas")
      .orderBy("name_insensitive")
      .startAt(formattedValue)
      .endAt(`${formattedValue}\uf8ff`)
      .get()
      .then((response) => {
        const data = response.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        }) as ProductProps[];

        setPizzas(data);
      })
      .catch(() =>
        Alert.alert("Consulta", "Não foi possível realizar a consulta")
      );
  }

  async function handleSearch() {
    fetchPizzas(search);
  }

  async function handleSearchClear() {
    setSearch("");
    fetchPizzas("");
  }

  useEffect(() => {
    fetchPizzas("");
  }, []);

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

      <Search
        onChangeText={setSearch}
        value={search}
        onClear={handleSearchClear}
        onSearch={handleSearch}
      />

      <MenuHeader>
        <Title>Cardápio</Title>
        <MenuItemsNumber>10 pizzas</MenuItemsNumber>
      </MenuHeader>

      <FlatList
        data={pizzas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProductCard data={item} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: 20,
          paddingBottom: 125,
          marginHorizontal: 24,
        }}
      />
    </Container>
  );
}
