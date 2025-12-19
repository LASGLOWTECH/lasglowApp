import { Text, View } from "react-native";

// 1. This tells NativeWind to inject Tailwind styles into these components
// cssInterop(View, { className: "style" });
// cssInterop(Text, { className: "style" });

export default function Index() {
  return (
    // If this works, the screen will be almost black
    <View className="flex-1 bg-secondary items-center justify-center p-6">
      <View className="bg-light p-8 rounded-3xl shadow-xl">
        <Text className="text-secondary place-self-center text-2xl font-bold">
          Lasglow Tech Connect
        </Text>
        <Text className="text-primary text-center text-lg  mt-2">
          Branding is now active!
        </Text>
      </View>
    </View>
  );
}