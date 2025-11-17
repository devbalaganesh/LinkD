import { Tabs } from "expo-router";
import { Image, View } from "react-native";
import { ImageSourcePropType } from "react-native";
import icons from "@assets/images/constants/icons";
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
        tintColor={ focused ? "#FFFFFF" : "#8E8E8E"}
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
          backgroundColor: "black",
          borderTopColor: "#E5E5E5",
          borderTopWidth: 1,
          minHeight: 50,
        },
      }}
    >
         <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} image={icons.home} />
          ),
        }}
      />
         <Tabs.Screen
        name="standouts"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} image={icons.star} />
          ),
        }}
      />
      <Tabs.Screen
        name="likes"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} image={icons.Likes} />
          ),
        }}
      />
   
      <Tabs.Screen
        name="matches"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} image={icons.Matches} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} image={icons.Profile} />
          ),
        }}
      />
    </Tabs>
  );
}
