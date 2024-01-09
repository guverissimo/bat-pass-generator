import React from "react";
import { TextInput } from "react-native";

import { styles } from "./styles";

interface BatTextInputsProps {
  pass: string;
}

export function BatTextInput(props: BatTextInputsProps) {
  return (
    <TextInput
      style={styles.inputer}
      placeholder="Password"
      multiline={true}
      value={props.pass}
    />
  );
}
