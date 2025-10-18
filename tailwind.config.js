/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./Main.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
  ],

  // Use class-based dark mode (works perfectly with your ThemeContext)
  darkMode: "class",

  theme: {
    extend: {
      // 🎨 Brand Colors
      colors: {
        primary: {
          DEFAULT: "#3B82F6", // Tailwind’s blue-500 (customize as brand color)
          light: "#60A5FA",
          dark: "#1D4ED8",
        },
        secondary: {
          DEFAULT: "#9333EA",
          light: "#C084FC",
          dark: "#6B21A8",
        },
        accent: {
          DEFAULT: "#F59E0B", // warm yellow accent
          light: "#FCD34D",
          dark: "#B45309",
        },
        success: "#10B981",
        danger: "#EF4444",
        warning: "#F59E0B",
        info: "#3B82F6",

        // Backgrounds for light/dark
        surface: {
          light: "#FFFFFF",
          dark: "#1F2937", // gray-800
        },
        background: {
          light: "#F9FAFB",
          dark: "#111827", // gray-900
        },
      },

      // 🌤️ Semantic Text Colors
      textColor: {
        base: {
          light: "#1F2937", // gray-800
          dark: "#E5E7EB", // gray-200
        },
        muted: {
          light: "#6B7280",
          dark: "#9CA3AF",
        },
        inverted: {
          light: "#FFFFFF",
          dark: "#111827",
        },
      },

      // 🧊 Rounded and Shadow Presets for Cards
      borderRadius: {
        card: "1.25rem",
        button: "0.75rem",
      },

      boxShadow: {
        soft: "0 4px 12px rgba(0,0,0,0.08)",
        medium: "0 6px 16px rgba(0,0,0,0.12)",
        glow: "0 0 20px rgba(59,130,246,0.4)",
      },

      // 🪄 Transitions and Animations
      transitionDuration: {
        DEFAULT: "300ms",
        fast: "150ms",
        slow: "500ms",
      },

      keyframes: {
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.8 },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },

      animation: {
        fadeInUp: "fadeInUp 0.5s ease-out",
        pulseSoft: "pulseSoft 2s infinite",
        wiggle: "wiggle 0.5s ease-in-out infinite",
      },

      // 🧍 Font setup
      fontFamily: {
        sans: ["System", "ui-sans-serif", "Arial"],
        display: ["Poppins", "ui-sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular"],
      },
    },
  },

  // ⚙️ Add plugins for utilities (no external installs required)
  plugins: [],
};
