import React from "react";
import { View, Text } from "react-native";
import { useTheme } from "../theme-context";

export default function Footer() {
  const { theme } = useTheme();
  const textColor = theme === "dark" ? "text-gray-400" : "text-gray-600";
  const borderColor = theme === "dark" ? "border-gray-700" : "border-gray-300";
  const bgColor = theme === "dark" ? "bg-gray-900" : "bg-gray-50";

  return (
    <View className={`mt-10 items-center border-t ${borderColor} pt-4 pb-6 ${bgColor}`}>
      <Text className={`text-sm ${textColor}`}>
        © {new Date().getFullYear()} Promise Duke. All rights reserved.
      </Text>
    </View>
  );
}
