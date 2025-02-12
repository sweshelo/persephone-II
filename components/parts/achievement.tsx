import { LinearGradient } from "expo-linear-gradient"
import { Text, View } from "react-native"

interface AchievementViewProps {
  name: string
}

export const AchievementView = ({ name }: AchievementViewProps) => {
  return (
    <LinearGradient
      colors={["#999", "#eee", "#999"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      className="p-2 my-2"
    >
      <Text className="text-x text-center">{name}</Text>
    </LinearGradient >
  )
}