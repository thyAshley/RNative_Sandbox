import React from "react";
import { View, Text, StyleSheet, Button, SafeAreaView } from "react-native";

const TrackCreateScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Create Track Screen</Text>
      <SafeAreaView>
        <Button
          title="Toggle Drawer"
          onPress={() => navigation.toggleDrawer()}
        />
        <Button
          title="to tabs"
          onPress={() => navigation.navigate("TrackList")}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
