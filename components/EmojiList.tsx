import { useState } from "react";
import { FlatList, Image, Platform, Pressable } from "react-native";

type Props = {
  onSelect: (emoji: string) => void;
  onCloseModal: () => void;
};
export default function EmojiList({ onSelect, onCloseModal }: Props) {
  const [emoji] = useState([
    require("../assets/images/emojis/icons8-18세-미만-이모티콘-없음-48.png"),
    require("../assets/images/emojis/icons8-똥-더미-48.png"),
    require("../assets/images/emojis/icons8-별-이모티콘-48.png"),
    require("../assets/images/emojis/icons8-별에-박힌-48.png"),
    require("../assets/images/emojis/icons8-붉은-심장-48.png"),
    require("../assets/images/emojis/icons8-유령-이모티콘-48.png"),
  ]);

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={Platform.OS === "web"}
      data={emoji}
      contentContainerStyle={{
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
      }}
      renderItem={({ item, index }) => (
        <Pressable
          onPress={() => {
            onSelect(item);
            onCloseModal();
          }}
        >
          <Image
            source={item}
            key={index}
            style={{ width: 100, height: 100, marginRight: 20 }}
          />
        </Pressable>
      )}
    />
  );
}
