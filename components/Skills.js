import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useTheme } from "../theme-context";
import {
  FontAwesome5,
  MaterialIcons,
  MaterialCommunityIcons,
  Ionicons,
  AntDesign,
} from "@expo/vector-icons";

export default function Skills() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Colors – replace these with your brand if needed
  const primaryColor = "#2563EB"; // Tailwind blue-600
  const primaryLight = "#93C5FD"; // Tailwind blue-300

  // General theme-based styles
  const textColor = isDark ? "text-white" : "text-black";
  const bgColor = isDark ? "bg-gray-800" : "bg-gray-100";

  const [activeCategory, setActiveCategory] = useState("frontend");
  const [activeSkill, setActiveSkill] = useState(null);

  const categories = [
    { key: "frontend", label: "Frontend" },
    { key: "mobile", label: "Mobile" },
    { key: "backend", label: "Backend" },
    { key: "ai", label: "AI & Data" },
    { key: "tools", label: "Tools" },
  ];

  const skills = {
    frontend: [
      { name: "React", icon: <FontAwesome5 name="react" size={18} color="#61DBFB" /> },
      { name: "Next.js", icon: <MaterialCommunityIcons name="react" size={18} color="#000" /> },
      { name: "Tailwind CSS", icon: <MaterialCommunityIcons name="tailwind" size={18} color="#38BDF8" /> },
      { name: "TypeScript", icon: <MaterialCommunityIcons name="language-typescript" size={18} color="#3178C6" /> },
    ],
    mobile: [
      { name: "React Native", icon: <FontAwesome5 name="mobile-alt" size={18} color="#61DBFB" /> },
      { name: "Expo", icon: <MaterialCommunityIcons name="cellphone" size={18} color="#A855F7" /> },
      { name: "NativeWind", icon: <Ionicons name="color-palette" size={18} color="#06B6D4" /> },
    ],
    backend: [
      { name: "Node.js", icon: <FontAwesome5 name="node-js" size={18} color="#3C873A" /> },
      { name: "Express", icon: <MaterialCommunityIcons name="server" size={18} color="#999" /> },
      { name: "MongoDB", icon: <MaterialCommunityIcons name="leaf" size={18} color="#4DB33D" /> },
      { name: "Firebase", icon: <MaterialIcons name="local-fire-department" size={18} color="#FFCA28" /> },
    ],
    ai: [
      { name: "Python", icon: <FontAwesome5 name="python" size={18} color="#FFD43B" /> },
      { name: "Pandas", icon: <MaterialCommunityIcons name="alpha-p-circle" size={18} color="#2563EB" /> },
      { name: "TensorFlow", icon: <MaterialCommunityIcons name="brain" size={18} color="#F97316" /> },
    ],
    tools: [
      { name: "GitHub", icon: <AntDesign name="github" size={18} color={isDark ? "#fff" : "#000"} /> },
      { name: "Docker", icon: <FontAwesome5 name="docker" size={18} color="#0db7ed" /> },
      { name: "Figma", icon: <FontAwesome5 name="figma" size={18} color="#A259FF" /> },
      { name: "VS Code", icon: <MaterialCommunityIcons name="microsoft-visual-studio-code" size={18} color="#0078D7" /> },
    ],
  };

  return (
    <View className={`p-5 rounded-card shadow-soft mb-6 ${bgColor}`}>
      <Text className={`text-xl font-semibold ${textColor} mb-4`}>Skills</Text>

      {/* Category Tabs */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-5">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.key;

          const activeBg = { backgroundColor: isDark ? primaryLight : primaryColor };
          const inactiveBg = { backgroundColor: isDark ? "#374151" : "#D1D5DB" }; // gray-700 / gray-300

          const activeTextColor = { color: isDark ? "#111" : "#fff" };
          const inactiveTextColor = { color: isDark ? "#E5E7EB" : "#111" };

          return (
            <TouchableOpacity
              key={cat.key}
              onPress={() => setActiveCategory(cat.key)}
              style={[
                {
                  paddingHorizontal: 16,
                  paddingVertical: 8,
                  borderRadius: 999,
                  marginRight: 8,
                  transitionDuration: "300ms",
                },
                isActive ? activeBg : inactiveBg,
              ]}
            >
              <Text style={[{ fontSize: 14, fontWeight: "600" }, isActive ? activeTextColor : inactiveTextColor]}>
                {cat.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      {/* Skills List */}
      <View className="flex-row flex-wrap">
        {skills[activeCategory].map((skill, index) => {
          const isSkillActive = activeSkill === skill.name;

          const activeSkillBg = { backgroundColor: isDark ? "#fff" : "#1F2937" }; // white or gray-800
          const inactiveSkillBg = { backgroundColor: isDark ? "rgba(255,255,255,0.1)" : "rgba(37,99,235,0.1)" }; // faint

          const activeSkillText = { color: isDark ? "#000" : "#fff" };
          const inactiveSkillText = { color: isDark ? "#fff" : primaryColor };

          return (
            <TouchableOpacity
              key={index}
              onPress={() => setActiveSkill(isSkillActive ? null : skill.name)}
              style={[
                {
                  flexDirection: "row",
                  alignItems: "center",
                  paddingHorizontal: 12,
                  paddingVertical: 6,
                  borderRadius: 999,
                  margin: 4,
                  transitionDuration: "300ms",
                },
                isSkillActive ? activeSkillBg : inactiveSkillBg,
              ]}
            >
              {skill.icon}
              <Text style={[{ marginLeft: 8, fontSize: 13, fontWeight: "500" }, isSkillActive ? activeSkillText : inactiveSkillText]}>
                {skill.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
