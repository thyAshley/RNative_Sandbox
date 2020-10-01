import React, { useState } from "react";
import { FlatList, View } from "react-native";

import Screen from "../components/SafeScreen";
import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

export default function MessagesScreen() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      title: "T1",
      description: "D1",
      image: require("../../assets/mosh.jpg"),
    },
    {
      id: 2,
      title: "T2",
      description: "D2",
      image: require("../../assets/mosh.jpg"),
    },
  ]);

  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    const newMessages = messages.filter((m) => m.id !== message.id);
    setMessages(newMessages);
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("tes", item.title)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={() => <ListItemSeparator />}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 1,
              title: "T1",
              description: "D1",
              image: require("../../assets/mosh.jpg"),
            },
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../../assets/mosh.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
}
