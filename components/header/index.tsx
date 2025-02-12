import { StatusBar } from "expo-status-bar"
import { Text, View } from "react-native"
import packageInfo from "../../package.json";

export const Header = () => {
  return (
    <>
      <StatusBar style="light" backgroundColor="rgb(30 58 138)" />
      <View className="bg-blue-900 p-3">
        <View className="pl-4 flex-row gap-4">
          <Text className="font-bold text-white text-4xl">閻魔帳</Text>
          <View className="pb-[5px] self-end">
            <Text className="text-slate-400 text-xs">persephone-II Ver.{packageInfo.version}</Text>
          </View>
        </View>
      </View>
    </>
  )
}