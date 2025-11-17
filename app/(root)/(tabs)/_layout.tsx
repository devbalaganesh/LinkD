import { Tabs } from "expo-router";
import { Image, View } from "react-native";
import { ImageSourcePropType } from "react-native";
import images from "@assets/images/constants/image"; // adjust if needed

const TabIcon = ({
  focused,
  image,
}: {
  focused: boolean;
  image: ImageSourcePropType;
}) => {
  return (
    <View className="flex flex-row mt-3 items-center">
      <Image
        source={image}
        resizeMode="contain"
        tintColor={focused ? "#0061FF" : "#999999"}
        className="size-5"
      />
    </View>
  );
};

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "white",
          borderTopColor: "#E5E5E5",
          borderTopWidth: 1,
          minHeight: 70,
        },
      }}
    >
         <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} image={images.hingeLogo} />
          ),
        }}
      />
         <Tabs.Screen
        name="standouts"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} image={images.hingeLogo} />
          ),
        }}
      />
      <Tabs.Screen
        name="likes"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} image={images.hingeLogo} />
          ),
        }}
      />
   
      <Tabs.Screen
        name="matches"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} image={images.hingeLogo} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} image={images.hingeLogo} />
          ),
        }}
      />
    </Tabs>
  );
}
