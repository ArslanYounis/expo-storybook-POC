import { Platform } from "react-native";
import { Button as ButtonNative } from "./Button.native";
import type { ButtonProps } from "./button.types"; // optional
import { Button as ButtonWeb } from "./Button.web";

export const Button = (props: ButtonProps) => {
  return Platform.OS === "web" ? (
    <ButtonWeb {...props} />
  ) : (
    <ButtonNative {...props} />
  );
};
