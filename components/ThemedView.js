import React from "react";
import { View } from "react-native";
import { useTheme } from "../theme-context";

export default function ThemedView({ className = "", children }) {
  const { theme } = useTheme();
  return (
    <View className={`${className} ${theme === "dark" ? "dark" : ""}`}>
      {children}
    </View>
  );
}
