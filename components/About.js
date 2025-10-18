import React from "react";
import { View, Text } from "react-native";
import { useTheme } from "../theme-context";

export default function About() {
  const { theme } = useTheme();
  const textColor = theme === "dark" ? "text-white" : "text-black";
  const subTextColor = theme === "dark" ? "text-gray-300" : "text-gray-700";
  const cardBg = theme === "dark" ? "bg-gray-800" : "bg-gray-100";

  return (
    <View className={`p-5 rounded-card shadow-soft mb-6 ${cardBg}`}>
      <Text className={`text-xl font-semibold ${textColor} mb-3`}>
        About Me
      </Text>
      <Text className={`leading-6 ${subTextColor}`}>
        I'm <Text className="font-semibold text-primary">Promise Duke</Text>, a
        passionate Mobile Developer focused on building scalable, performant,
        and beautiful apps with React Native and Expo. I enjoy blending
        creativity and logic to deliver engaging mobile experiences.
      </Text>
    </View>
  );
}
