import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

import { HapticTab } from "@/src/components/HapticTab";
import { IconSymbol } from "@/src/components/ui/IconSymbol";
import TabBarBackground from "@/src/components/ui/TabBarBackground";
import { Colors } from "@/src/constants/Colors";
import { useColorScheme } from "@/src/hooks/useColorScheme";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
          headerShown: false,
          tabBarButton: HapticTab,
          tabBarBackground: TabBarBackground,
          tabBarStyle: Platform.select({
            ios: {
              // Use a transparent background on iOS to show the blur effect
              position: "absolute",
            },
            default: {},
          }),
        }}
      >
        <Tabs.Screen
          name="UserHome"
          options={{
            title: "Home",
            tabBarIcon: ({ color }) => (
              <IconSymbol size={28} name="house.fill" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="UserPT"
          options={{
            title: "PT",
            tabBarIcon: ({ color }) => (
              <Ionicons name="chatbubbles" size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="UserSchedule"
          options={{
            title: "schedule",
            tabBarIcon: ({ color }) => (
              <Ionicons name="chatbubbles" size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="UserChat"
          options={{
            title: "chat",
            tabBarIcon: ({ color }) => (
              <Ionicons name="chatbubbles" size={24} color={color} />
            ),
          }}
        />
      </Tabs>
    </>
  );
}
