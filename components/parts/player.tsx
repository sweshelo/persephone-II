import { Link } from "expo-router"
import { Image, Text, View } from "react-native"

export const Player = () => {
  return (
    <Link href={{
      pathname: '/player/[name]',
      params: { name: 'hoge' }
    }} className="bg-white rounded-lg flex items-center shadow-lg">
      <Image
        source={{
          uri: 'https://p.eagate.573.jp/game/chase2jokers/ccj/images/ranking/icon/ranking_icon_1.png'
        }}
        width={80}
        height={60}
        className="rounded-l-lg"
      />
      <View className="pl-3 flex">
        <View className="py-1">
          <Text className="text-sm text-gray-600">1位</Text>
          <Text className="text-3xl font-bold">ああああ</Text>
        </View>
      </View>
    </Link>
  )
}