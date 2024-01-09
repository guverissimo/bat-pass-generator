import React, { useState } from "react";
import { Button, Text, TouchableOpacity, View } from "react-native";
import * as Clipboard from "expo-clipboard";

import { styles } from "./styles";
import { BatTextInput } from "../BatTextInput";
import generatePass from "../../services/passwordService";

export function BatButton() {
  const [pass, setPass] = useState("");

  function handleGenerateButton() {
    let generateToken = generatePass();
    setPass(generateToken);
  }

  function handleCopyButton() {
    Clipboard.setStringAsync(pass)
  }

  return (
    <>
      <BatTextInput pass={pass} />
      <TouchableOpacity style={styles.button} onPress={handleGenerateButton}>
        <Text style={styles.text}>Generate Password</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleCopyButton}>
        <Text style={styles.text}>⚡ Copy</Text>
      </TouchableOpacity>
    </>
  );
}
