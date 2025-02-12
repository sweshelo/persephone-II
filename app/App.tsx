import "@/global.css";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Ranking from "@/app/index";
import { StatusBar } from "expo-status-bar";
import { Header } from "@/components/header";

const Stack = createStackNavigator();

export default function Layout() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          header: () => <Header />
        }}
      >
        <Stack.Screen name="ランキング" component={Ranking} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
