import { useState } from "react";
import { FlatList, ScrollView, Text, View } from "react-native";
import { Ranking } from "../types/ranking";
import { Player } from "@/components/parts/player";
import { Headline } from "@/components/common/headline";
import { StatusBar } from "expo-status-bar";
import { Header } from "@/components/header";

export default function Index() {
  const players = [...Array(100)].map((_, i) => ({
    name: `${i}位のプレーヤー`,
    ranking: i,
    point: i * 1000,
    chara: Math.floor(Math.random() * 10)
  }))

  return (
    <View className="bg-cyan-50">
      <Header />
      <FlatList
        data={players}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Player />}
        contentContainerStyle={{
          padding: 20,
          gap: 10,
        }}
        ListHeaderComponent={<Headline title="月間ランキング" />}
      />
    </View>
  );
}

