"use client";
import React from "react";
import { Switch, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function ToggelThem() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <div className="w-full bg-white flex justify-end items-center pr-[5%] py-2">
      <Text className="text-blue_primary" fontWeight="bold" fontSize="xl">
        Blue
      </Text>
      <div className="w-14 h-14 mx-2 flex justify-center items-center border-2 dark:border-blue_primary border-orange_primary rounded-full">
        <Switch
          onChange={() => setTheme(theme === "light" ? "dark" : "light")}
          colorScheme="orange"
          size="md"
        />
      </div>
      <Text className="text-orange_primary" fontWeight="bold" fontSize="xl">
        Orange
      </Text>
    </div>
  );
}
