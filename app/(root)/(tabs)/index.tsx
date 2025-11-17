import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { Link } from "expo-router";
import { auth } from "@/firebase/firebaseConfig";

export default function App() {
  useEffect(() => {
    console.log("Firebase Auth initialized:", auth.app.name);
  }, []);

  return (
    <View>
      <Text>Firebase & Expo setup complete 🎉</Text>

      <Link href="/signin">
        <Text>Go to Signin</Text>
        
      </Link>
     
        <Link href={"/profile"}>
        <Text>go to profile</Text>
        </Link>
    </View>
  );
}
