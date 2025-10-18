import React, { useEffect, useRef } from "react";
import { View, Switch, Image, Text, ScrollView } from "react-native";
import { ThemeProvider, useTheme } from "./theme-context";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AnimatedCard from "./components/AnimatedCard"; 
import "./global.css";

function Main() {
  const { theme, toggleTheme } = useTheme();
  const isMounted = useRef(true);

  useEffect(() => {
    isMounted.current = true;
    return () => (isMounted.current = false);
  }, []);

  const safeToggleTheme = () => {
    if (isMounted.current) toggleTheme();
  };

  const bgColor = theme === "dark" ? "bg-gray-900" : "bg-gray-50";
  const textColor = theme === "dark" ? "text-white" : "text-black";

  return (
    <ScrollView className={`flex-1 ${bgColor} px-6 py-10`}>
      {/* Toggle */}
      <View className="absolute top-10 right-6 z-10">
        <Switch value={theme === "dark"} onValueChange={safeToggleTheme} />
      </View>

      {/* Profile Section */}
      <View className="items-center mb-8 mt-10">
        <Image
                    source={require("./assets/assets/passport2.png")}
          className="w-40 h-40 rounded-full mb-4 border-4 border-primary shadow-md"
        />
        <Text className={`text-3xl font-bold ${textColor}`}>Promise Duke</Text>
        <Text className={`text-lg ${textColor} mt-1`}>
          Mobile Developer | React Native | Expo
        </Text>
      </View>

      {/* Cards with subtle fade/slide animation */}
      <AnimatedCard delay={100}>
        <Header />
      </AnimatedCard>

      <AnimatedCard delay={300}>
        <About />
      </AnimatedCard>

      <AnimatedCard delay={500}>
        <Skills />
      </AnimatedCard>

      <AnimatedCard delay={700}>
        <Contact />
      </AnimatedCard>

      <AnimatedCard delay={900}>
        <Footer />
      </AnimatedCard>
    </ScrollView>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Main />
    </ThemeProvider>
  );
}
