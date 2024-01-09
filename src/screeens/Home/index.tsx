import React from "react";
import { Text, View } from "react-native";
import { BatLogo } from "../../components/BatLogo";

import styles from "./Style";
import { BatTextInput } from "../../components/BatTextInput";
import { BatButton } from "../../components/BatButton";

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <BatLogo />
      </View>
      <View style={styles.buttonContainer}>
        <BatButton />
      </View>
    </View>
  );
}
