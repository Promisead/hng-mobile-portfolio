// components/AnimatedCard.js
import React, { useEffect, useRef } from "react";
import { Animated, View } from "react-native";

export default function AnimatedCard({ children, delay = 0 }) {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(20)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        delay,
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: 0,
        duration: 500,
        delay,
        useNativeDriver: true,
      }),
    ]).start();
  }, [fadeAnim, translateY, delay]);

  return (
    <Animated.View
      style={{
        opacity: fadeAnim,
        transform: [{ translateY }],
      }}
      className="
        bg-white/90 dark:bg-gray-800/90
        rounded-3xl
        shadow-lg
        border border-gray-200 dark:border-gray-700
        p-6 mb-6
        transition-all duration-300
      "
    >
      {children}
    </Animated.View>
  );
}
