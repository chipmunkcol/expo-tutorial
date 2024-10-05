import { Pressable, StyleSheet, Text, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

type Props = {
  icon: "clear" | "save-alt";
  title: "Reset" | "Save";
  onPress?: () => void;
};
export default function IconButton({ icon, title, onPress }: Props) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <MaterialIcons name={icon} size={24} color="white" />
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    // display:'flex'
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
  },
});
