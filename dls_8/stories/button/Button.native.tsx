import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import type { ButtonProps } from "./button.types";
import { Portal } from "@gorhom/portal";
import BottomSheet, { BottomSheetBackdrop } from "@gorhom/bottom-sheet";
import { useRef } from "react";

export const Button = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  style,
  onPress,
}: ButtonProps) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const modeStyle = primary ? styles.primary : styles.secondary;
  const textModeStyle = primary ? styles.primaryText : styles.secondaryText;
  const sizeStyle = styles[size];
  const textSizeStyle = textSizeStyles[size];

  return (
    <>
      <TouchableOpacity
        onPress={() => {
          bottomSheetRef.current?.expand();
        }}
      >
        <View
          style={[
            styles.button,
            modeStyle,
            sizeStyle,
            style,
            !!backgroundColor && { backgroundColor },
          ]}
        >
          <Text style={[textModeStyle, textSizeStyle]}>{label}</Text>
        </View>
      </TouchableOpacity>
      <Portal>
        <BottomSheet
          keyboardBlurBehavior="restore"
          handleIndicatorStyle={{ width: 100, backgroundColor: "#E3E3E3" }}
          backdropComponent={(dropProps) => (
            <BottomSheetBackdrop
              {...dropProps}
              appearsOnIndex={0}
              disappearsOnIndex={-1}
            />
          )}
          index={-1}
          containerStyle={{
            borderRadius: 0,
          }}
          ref={bottomSheetRef}
          snapPoints={[120]}
          enablePanDownToClose
        >
          <View style={{ flex: 1, alignItems: "center", paddingTop: 20 }}>
            <Text>Awesome 🎉</Text>
          </View>
        </BottomSheet>
      </Portal>
    </>
  );
};

const styles = StyleSheet.create({
  button: { borderRadius: 48 },
  primary: { backgroundColor: "#1ea7fd" },
  primaryText: { color: "white" },
  secondary: { backgroundColor: "transparent", borderWidth: 1 },
  secondaryText: { color: "#333" },
  small: { paddingVertical: 10, paddingHorizontal: 16 },
  smallText: { fontSize: 12 },
  medium: { paddingVertical: 11, paddingHorizontal: 20 },
  mediumText: { fontSize: 14 },
  large: { paddingVertical: 12, paddingHorizontal: 24 },
  largeText: { fontSize: 16 },
});
const textSizeStyles = {
  small: styles.smallText,
  medium: styles.mediumText,
  large: styles.largeText,
};
