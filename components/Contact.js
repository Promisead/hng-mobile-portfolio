import React from "react";
import { View, Text, TouchableOpacity, Linking } from "react-native";
import { useTheme } from "../theme-context";
import { FontAwesome, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

export default function Contact() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const bgColor = isDark ? "bg-gray-800" : "bg-gray-100";
  const textColor = isDark ? "text-white" : "text-black";
  const subText = isDark ? "text-gray-300" : "text-gray-700";
  const iconColor = isDark ? "#93C5FD" : "#2563EB";
  const primaryColor = "#2563EB";

  const contacts = [
    {
      label: "Email",
      display: "promiseduke@gmail.com",
      icon: <MaterialCommunityIcons name="email-outline" size={22} color={iconColor} />,
      onPress: () => Linking.openURL("mailto:promiseduke@gmail.com"),
    },
    {
      label: "LinkedIn",
      display: "@promise-champion",
      icon: <FontAwesome name="linkedin-square" size={22} color={iconColor} />,
      onPress: () =>
        Linking.openURL("https://www.linkedin.com/in/promise-champion-a0020656/"),
    },
    {
      label: "Portfolio",
      display: "ai-promise.vercel.app",
      icon: <Ionicons name="globe-outline" size={22} color={iconColor} />,
      onPress: () => Linking.openURL("https://ai-promise.vercel.app"),
    },
    {
  label: "X (Twitter)",
  display: "@PromiseChampion",
  icon: <FontAwesome name="twitter" size={22} color={iconColor} />,
  onPress: () => Linking.openURL("https://x.com/Promisedukeac"),
},

  ];

  return (
    <View className={`p-5 rounded-card shadow-soft mb-6 ${bgColor}`}>
      <Text className={`text-xl font-semibold mb-4 ${textColor}`}>Contact</Text>

      {contacts.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={item.onPress}
          activeOpacity={0.8}
          className="flex-row items-center mb-3"
        >
          <View className="w-8 items-center">{item.icon}</View>
          <View>
            <Text className={`text-sm font-semibold ${textColor}`}>{item.label}</Text>
            <Text
              className={`text-sm ${subText}`}
              style={{
                textDecorationLine: "underline",
                color: primaryColor,
              }}
            >
              {item.display}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}
