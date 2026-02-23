import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
} from "react-native";

import menuData from "./menu.json";

type FoodItem = {
  id: number;
  name: string;
  category: string;
  price: number;
  rating: number;
};

export default function App() {
  const getCardColor = (category: string) => {
    switch (category) {
      case "Veg":
        return "#d4edda"; // Light Green
      case "Non-Veg":
        return "#f8d7da"; // Light Red
      case "Beverage":
        return "#d1ecf1"; // Light Blue
      default:
        return "#ffffff";
    }
  };

  const renderItem = ({ item }: { item: FoodItem }) => (
    <View
      style={[
        styles.card,
        { backgroundColor: getCardColor(item.category) },
      ]}
    >
      <Text style={styles.name}>🍽 {item.name}</Text>
      <Text style={styles.text}>📂 {item.category}</Text>
      <Text style={styles.text}>💰 ₹{item.price}</Text>
      <Text style={styles.text}>⭐ {item.rating}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={menuData as FoodItem[]}
        horizontal
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        ListHeaderComponent={
          <Text style={styles.header}>Restaurant Menu</Text>
        }
        ListFooterComponent={
          <Text style={styles.footer}>Thank You for Visiting</Text>
        }
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        ListEmptyComponent={
          <Text style={styles.empty}>No Items Available</Text>
        }
        contentContainerStyle={{ padding: 10 }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
  },
  footer: {
    fontSize: 16,
    marginLeft: 15,
    alignSelf: "center",
  },
  card: {
    width: 220,
    padding: 15,
    borderRadius: 15,
    justifyContent: "center",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  text: {
    fontSize: 14,
    marginBottom: 4,
  },
  separator: {
    width: 15,
  },
  empty: {
    fontSize: 18,
    alignSelf: "center",
  },
});
