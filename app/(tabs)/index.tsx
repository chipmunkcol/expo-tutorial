import Button from "@/components/Button";
import ImageViewer from "@/components/ImageViewer";
import { Image } from "expo-image";
import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import CircleButton from "@/components/CircleButton";
import IconButton from "@/components/IconButton";
import EmojiList from "@/components/EmojiList";
import EmojiModal from "@/components/EmojiModal";

const PlaceholderImage = require("../../assets/images/background.png");

export default function Index() {
  const [image, setImage] = useState<string | undefined>(undefined);
  const [isEmojiBtns, setIsEmojiBtns] = useState(false);
  const [isEmojiModal, setIsEmojiModal] = useState(false);
  const [pickedEmoji, setPickedEmoji] = useState<string | undefined>(undefined);

  const chooseImage = async () => {
    const res = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!res.canceled) {
      // console.log(res);
      setImage(res.assets[0].uri);
      setIsEmojiBtns(true);
    } else {
      alert("이미지를 선택하지 않았습니다!");
    }
  };

  const openEmojiBtns = () => {
    setIsEmojiBtns(true);
  };

  const closeEmojiBtns = () => {
    setIsEmojiBtns(false);
  };

  const openEmojiModal = () => {
    setIsEmojiModal(true);
  };

  const closeEmojiModal = () => {
    setIsEmojiModal(false);
  };

  const setterPickedEmoji = (emoji: string) => {
    setPickedEmoji(emoji);
  };

  return (
    <View style={styles.contaier}>
      <View style={{ flex: 1, position: "relative" }}>
        <ImageViewer imageSource={PlaceholderImage} selectedImage={image} />
        {pickedEmoji && (
          <View style={{ position: "absolute", top: 30, left: 10 }}>
            <Image
              source={pickedEmoji}
              style={{ width: 50, height: 50, overflow: "visible" }}
            />
          </View>
        )}
      </View>
      {isEmojiBtns ? (
        <View style={styles.flex}>
          <IconButton icon="clear" title="Reset" onPress={closeEmojiBtns} />
          <CircleButton onPress={openEmojiModal} />
          {/* <IconButton icon="save-alt" title="Save" /> */}
        </View>
      ) : (
        <View>
          <Button label="사진 찾아보기" theme="primary" onPress={chooseImage} />
          <Button label="이 사진 선택" onPress={openEmojiBtns} />
        </View>
      )}
      {isEmojiModal && (
        <EmojiModal isVisible={isEmojiModal} onPress={closeEmojiModal}>
          <EmojiList
            onSelect={setterPickedEmoji}
            onCloseModal={closeEmojiModal}
          />
        </EmojiModal>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  contaier: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#25292e",
  },
  text: {
    color: "white",
  },
  flex: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
    flex: 1 / 3,
    alignItems: "center",
  },
});
