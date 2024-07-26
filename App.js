import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import StackNavigator from "./navigators/StackNavigator";
import ExpensesContextProvider from "./store/expenses-context";

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <ExpensesContextProvider>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </ExpensesContextProvider>
    </>
  );
}
