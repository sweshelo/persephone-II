import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { Ranking } from "../types/ranking";

export default function Index() {
  const [ranking, setRanking] = useState<Ranking[]>([]);
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <View>
        <Text className="text-center text-lg">Hello</Text>
        <Text>{JSON.stringify(ranking)}</Text>
      </View>
    </View>
  );
}

