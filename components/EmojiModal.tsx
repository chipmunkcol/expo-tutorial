import { Modal, Pressable, StyleSheet, View } from "react-native";

type Props = {
  isVisible: boolean;
  children: React.ReactNode;
  onPress: () => void;
};
export default function EmojiModal({ isVisible, children, onPress }: Props) {
  return (
    <Modal visible={isVisible} transparent={true} animationType="slide">
      <View style={styles.container}>
        <Pressable onPress={onPress}>
          <View style={styles.header}>x</View>
        </Pressable>
        {children}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "25%",
    width: "100%",
    backgroundColor: "#25292e",
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    position: "absolute",
    bottom: 0,
  },
  header: {
    height: 26,
    paddingHorizontal: 10,
    backgroundColor: "#504747",
    alignItems: "flex-end",
    color: "white",
    justifyContent: "center",
    borderTopEndRadius: 10,
    borderTopLeftRadius: 10,
  },
});
