// navigators/StackNavigator.js
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ExpensesOverview from "./BottomTabNavigator";
import ManageExpenses from "../screens/ManageExpenses";
import { GlobalStyles } from "../constants/styles";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: GlobalStyles.colors.blue150 },
        headerTintColor: "white",
      }}
    >
      <Stack.Screen
        name="ExpensesOverview"
        component={ExpensesOverview}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ManageExpenses"
        component={ManageExpenses}
        options={{
          presentation: "modal",
        }}
      />
    </Stack.Navigator>
  );
}
