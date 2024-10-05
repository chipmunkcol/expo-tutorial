import { StyleSheet, Text, View } from "react-native";

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text>About page!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "teal",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
