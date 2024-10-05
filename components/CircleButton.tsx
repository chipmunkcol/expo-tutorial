import AntDesign from "@expo/vector-icons/AntDesign";
import { Pressable, StyleSheet, View } from "react-native";

type Props = {
  onPress: () => void;
};

export default function CircleButton({ onPress }: Props) {
  return (
    <View>
      <Pressable onPress={onPress}>
        <View style={styles.buttonContainer}>
          <AntDesign name="pluscircleo" size={24} color="white" />
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    borderWidth: 4,
    borderColor: "#ffd33d",
    borderRadius: 42,
  },
});
