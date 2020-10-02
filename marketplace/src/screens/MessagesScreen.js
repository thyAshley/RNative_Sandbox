import React, { useState } from "react";
import { FlatList, View } from "react-native";

import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

export default function MessagesScreen() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      title: "Mosh Hamedani",
      description: "Hey! is this item still available?",
      image: require("../../assets/mosh.jpg"),
    },
    {
      id: 2,
      title: "Mosh Hamedani",
      description:
        "I'm interested in getting this item. When will you be available to make the transaction for this",
      image: require("../../assets/mosh.jpg"),
    },
  ]);

  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    const newMessages = messages.filter((m) => {
      return m.id !== message.id;
    });
    setMessages(newMessages);
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setMessages([
      {
        id: 1,
        title: "Mosh Hamedani",
        description: "Hey! is this item still available?",
        image: require("../../assets/mosh.jpg"),
      },
      {
        id: 2,
        title: "Mosh Hamedani",
        description:
          "I'm interested in getting this item. When will you be available to make the transaction for this",
        image: require("../../assets/mosh.jpg"),
      },
    ]);
    setTimeout(() => setRefreshing(false), 2000);
  }, []);

  return (
    <View>
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
        onRefresh={onRefresh}
      />
    </View>
  );
}
