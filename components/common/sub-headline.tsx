import { Text, View } from "react-native"

interface SubHeadlineProps {
  title: string
}

export const SubHeadline = ({ title }: SubHeadlineProps) => {
  return (
    <View className="rounded-lg p-1 my-2 bg-gray-300 shadow-lg">
      <View className="rounded p-2 bg-gray-100">
        <Text className="text-center">{title}</Text>
      </View>
    </View>
  )
}