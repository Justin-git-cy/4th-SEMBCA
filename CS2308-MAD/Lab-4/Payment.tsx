import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import {
  SafeAreaView,
  SafeAreaProvider,
} from "react-native-safe-area-context";
import Ionicons from "react-native-vector-icons/Ionicons";

const bankTransfers = [
  "Bank Mandiri",
  "Bank BCA",
  "Bank BNI",
  "Bank Mega",
];

const virtualAccounts = [
  "Virtual Account Mandiri",
  "Virtual Account BCA",
  "Virtual Account BNI",
  "Virtual Account Mega",
];

const installments = [
  "Kredivo",
  "Under 17 Years (Terms & Conditions Apply)",
];

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity>
            <Ionicons name="arrow-back" size={22} color="#fff" />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Payment</Text>

          <View style={{ width: 22 }} />
        </View>

        {/* White Card Container */}
        <View style={styles.card}>
          <Text style={styles.timerText}>
            Complete your order within{" "}
            <Text style={styles.timer}>00:60:00</Text>
          </Text>

          <ScrollView showsVerticalScrollIndicator={false}>
            <Section title="Bank Transfer" data={bankTransfers} />
            <Section title="Virtual Account" data={virtualAccounts} />
            <Section
              title="Installments Without Credit Card"
              data={installments}
            />
          </ScrollView>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const Section = ({
  title,
  data,
}: {
  title: string;
  data: string[];
}) => {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>

      {data.map((item, index) => (
        <TouchableOpacity key={index} style={styles.row}>
          <Text style={styles.rowText}>{item}</Text>

          <Ionicons
            name="chevron-forward-circle"
            size={24}
            color="#7B3FE4"
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7B3FE4",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 15,
  },

  headerTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },

  card: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 20,
  },

  timerText: {
    textAlign: "center",
    marginBottom: 20,
    fontSize: 14,
  },

  timer: {
    color: "red",
    fontWeight: "600",
  },

  section: {
    marginBottom: 25,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 10,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
  },

  rowText: {
    fontSize: 14,
  },
});
