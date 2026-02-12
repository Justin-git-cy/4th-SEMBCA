import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  useColorScheme,
} from "react-native";
import {
  SafeAreaView,
  SafeAreaProvider,
} from "react-native-safe-area-context";

const App = () => {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";
  const theme = isDarkMode ? DarkTheme : LightTheme;

  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={[styles.container, { backgroundColor: theme.background }]}
      >
        {/* Title */}
        <Text style={[styles.heading, { color: theme.text }]}>
          Stories
        </Text>

        {/* Horizontal Scroll */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollContainer}
        >
          {/* Profile Card */}
          <View
            style={[
              styles.profileCard,
              { backgroundColor: theme.cardBackground },
            ]}
          >
            <Image
              source={{ uri: "https://i.pravatar.cc/150?img=3" }}
              style={styles.profileImage}
            />
            <Text style={[styles.name, { color: theme.text }]}>
              Justin
            </Text>
          </View>

          {/* Other Story Circles */}
          {Array.from({ length: 10 }).map((_, index) => (
            <View
              key={index}
              style={[
                styles.storyCircle,
                { backgroundColor: theme.cardBackground },
              ]}
            />
          ))}
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;

const LightTheme = {
  background: "#ffffff",
  cardBackground: "#f2f2f2",
  text: "#000000",
};

const DarkTheme = {
  background: "#121212",
  cardBackground: "#1e1e1e",
  text: "#ffffff",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },

  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 15,
  },

  scrollContainer: {
    alignItems: "center",
  },

  profileCard: {
    width: 90,
    height: 120,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
    elevation: 3,
  },

  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 8,
  },

  name: {
    fontSize: 14,
    fontWeight: "600",
  },

  storyCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 15,
  },
});
