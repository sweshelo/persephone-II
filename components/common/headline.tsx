import { LinearGradient } from "expo-linear-gradient"
import { Text, View } from "react-native"

interface HeadlineProps {
  title: string
}

export const Headline = ({ title }: HeadlineProps) => {
  return (
    <View className="p-[3px] bg-white">
      <LinearGradient
        colors={["#fad", "#ffa", "#afa", "#aaf", "#caf"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        className="p-2"
      >
        <Text className="text-xl font-bold text-center">{title}</Text>
      </LinearGradient >
    </View>
  )
}