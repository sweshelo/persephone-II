import { PointsGraph } from "@/components/charts/line";
import { SubHeadline } from "@/components/common/sub-headline";
import { Header } from "@/components/header";
import { AchievementView } from "@/components/parts/achievement";
import { HistoryTable } from "@/components/parts/history-table";
import { Player } from "@/components/parts/player";
import { useLocalSearchParams } from "expo-router"
import { ScrollView, Text, View } from "react-native";

const GridCard = () => {
  return (
    <View className="rounded-lg bg-white shadow px-3 py-3 flex-1">
      <Text className="text-xs">最高ランキング</Text>
      <Text className="text-xl text-right">1位</Text>
    </View>
  )
}

export default function Page() {
  const { name } = useLocalSearchParams();
  const histories = [
    {
      id: 0,
      date: '2024/11/30',
      points: 100,
      diff: 100,
      karma: -10,
    },
    {
      id: 1,
      date: '2024/11/30',
      points: 220,
      diff: 100,
      karma: -9,
    },
    {
      id: 0,
      date: '2024/11/30',
      points: 470,
      diff: 150,
      karma: -2,
    },
    {
      id: 0,
      date: '2024/11/30',
      points: 700,
      diff: 230,
      karma: 5,
    },
  ]

  return (
    <View className="bg-cyan-50 flex-1">
      <Header />
      <ScrollView className="p-5" contentContainerStyle={{ paddingBottom: 40 }}>
        <AchievementView name="新人チェイサー" />
        <Player />
        <View className="my-2 flex gap-2">
          <View className="flex-row gap-2 flex-1">
            <GridCard />
            <GridCard />
            <GridCard />
          </View>
          <View className="flex-row gap-2 flex-1">
            <GridCard />
            <GridCard />
            <GridCard />
          </View>
        </View>
        <SubHeadline title="貢献度の推移" />
        <PointsGraph />
        <HistoryTable histories={histories} />
      </ScrollView>
    </View>
  )
}