import { Pressable, StyleSheet, Text, View } from "react-native";

import { GlobalStyles } from "../../constants/styles";
import { getFormattedDate } from "../../util/date";
import { useNavigation } from "@react-navigation/native";

function ExpenseItem({ id, description, amount, date }) {
  const navigation = useNavigation();

  function expensePressHandler() {
    navigation.navigate("ManageExpenses", {
      expenseId: id,
    });
  }

  return (
    <Pressable
      onPress={expensePressHandler}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.expenseItem}>
        <View>
          <Text style={[styles.textBase, styles.description]}>
            {description}
          </Text>
          <Text style={styles.textBase}>{getFormattedDate(date)}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>{amount.toFixed(2)}/-</Text>
        </View>
      </View>
    </Pressable>
  );
}

export default ExpenseItem;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
  expenseItem: {
    padding: 6,
    marginVertical: 8,
    backgroundColor: GlobalStyles.colors.blue100,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 6,
    elevation: 3,
    shadowColor: GlobalStyles.colors.gray500,
    shadowRadius: 5,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
  },
  textBase: {
    color: GlobalStyles.colors.blue400,
  },
  description: {
    fontSize: 14,
    marginBottom: 4,
    fontWeight: "bold",
  },
  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    minWidth: 80,
  },
  amount: {
    color: GlobalStyles.colors.blue500,
    fontWeight: "bold",
  },
});
