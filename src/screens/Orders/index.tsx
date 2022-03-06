import React, { useEffect, useState } from "react";
import { Alert, FlatList } from "react-native";
import { useAuth } from "@src/hooks/auth";
import firestore from "@react-native-firebase/firestore";

import { OrderCard, OrderProps } from "@src/components/OrderCard";

import { Container, Header, Title } from "./styles";
import { ItemSeparator } from "@src/components/ItemSeparator";

export function Orders() {
  const [orders, setOrders] = useState<OrderProps[]>([]);

  const { user } = useAuth();

  function handlePizzaDelivered(id: string) {
    Alert.alert("Pedido", "Confirmar que a pizza foi entregue?", [
      { text: "Não", style: "cancel" },
      {
        text: "Sim",
        onPress: () => {
          firestore()
            .collection("orders")
            .doc(id)
            .update({ status: "Entregue" });
        },
      },
    ]);
  }

  useEffect(() => {
    const subscribe = firestore()
      .collection("orders")
      .where("waiter_id", "==", user?.id)
      .onSnapshot((querySnapShot) => {
        const data = querySnapShot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        }) as OrderProps[];
        setOrders(data);
      });

    return () => subscribe();
  }, []);

  return (
    <Container>
      <Header>
        <Title>Pedidos feitos</Title>
      </Header>

      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <OrderCard
            index={index}
            data={item}
            disabled={item.status === "Entregue"}
            onPress={() => handlePizzaDelivered(item.id)}
          />
        )}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 125, paddingHorizontal: 24 }}
        ItemSeparatorComponent={() => <ItemSeparator />}
      />
    </Container>
  );
}
