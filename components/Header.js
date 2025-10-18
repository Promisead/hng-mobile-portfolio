import React from "react";
import { View, Text } from "react-native";
import { useTheme } from "../theme-context"; // import context hook

export default function Header() {
  const { theme } = useTheme();
  const textColor = theme === "dark" ? "text-white" : "text-black";
  const subTextColor = theme === "dark" ? "text-gray-300" : "text-gray-700";

  return (
    <View className="mb-6">
      <Text className={`text-2xl font-bold ${textColor} mb-2 transition-all duration-300`}>
        Welcome 👋
      </Text>
      <Text className={`leading-6 transition-all duration-300 ${subTextColor}`}>
        Explore my portfolio — built with React Native, powered by creativity and precision.
      </Text>
    </View>
  );
}
