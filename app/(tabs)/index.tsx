import Button from "@/components/Button";
import ImageViewer from "@/components/ImageViewer";
import { Image } from "expo-image";
import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";

const PlaceholderImage = require("../../assets/images/background.png");

export default function Index() {
  const [image, setImage] = useState<string | undefined>(undefined);
  const pickImage = async () => {
    const res = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!res.canceled) {
      // console.log(res);
      setImage(res.assets[0].uri);
    } else {
      alert("이미지를 선택하지 않았습니다!");
    }
  };
  return (
    <View style={styles.contaier}>
      <View style={{ flex: 1 }}>
        <ImageViewer imageSource={PlaceholderImage} selectedImage={image} />
      </View>
      <View style={styles.flex}>
        <Button label="사진 고르기" theme="primary" onPress={pickImage} />
        <Button label="이 사진 선택" />
      </View>
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
    flex: 1 / 3,
    alignItems: "center",
  },
});
