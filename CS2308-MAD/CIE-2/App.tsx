import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context';

const Stack = createStackNavigator();

function HomeScreen({ navigation }: any) {
  const [destination, setDestination] = useState('');

  const handleExplore = () => {
    if (destination.trim() === '') {
      Alert.alert('Error', 'Please enter a destination');
      return;
    }
    navigation.navigate('Destination', { destination });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.content}>
          <Text style={styles.title}>Travel Explorer</Text>
          <Text style={styles.heading}>Explore Your Destination</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter destination name (e.g., Paris, Tokyo, NewYork, London, Sydney, Dubai)"
            placeholderTextColor="#999"
            value={destination}
            onChangeText={setDestination}
          />
          <TouchableOpacity style={styles.button} onPress={handleExplore}>
            <Text style={styles.buttonText}>Explore</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function DestinationScreen({ route, navigation }: any) {
  const { destination } = route.params;

  const getImageUri = (dest: string) => {
    const images: { [key: string]: string } = {
      Paris: 'https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=500&h=350&fit=crop',
      Tokyo: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=500&h=350&fit=crop',
      NewYork: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=500&h=350&fit=crop',
      London: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=500&h=350&fit=crop',
      Sydney: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=350&fit=crop',
      Dubai: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=500&h=350&fit=crop',
    };
    return images[dest] || 'https://via.placeholder.com/500x350?text=Destination+Not+Found';
  };

  const getDescription = (dest: string) => {
    const descriptions: { [key: string]: string } = {
      Paris: 'The City of Light! Famous for the Eiffel Tower, world-class museums, and romantic atmosphere. A must-visit destination in Europe.',
      Tokyo: 'A vibrant metropolis blending tradition with modernity. Enjoy temples, cutting-edge technology, and amazing cuisine.',
      NewYork: 'The city that never sleeps! Home to iconic landmarks, Broadway, world-class restaurants, and endless entertainment.',
      London: 'Historic capital with Big Ben, Buckingham Palace, and the Thames River. Rich in culture and heritage.',
      Sydney: 'Beautiful coastal city featuring the iconic Opera House, Harbour Bridge, and stunning beaches.',
      Dubai: 'Modern desert oasis with the Burj Khalifa, luxury shopping, and futuristic architecture. Truly spectacular!',
    };
    return descriptions[dest] || 'Welcome to this beautiful destination! Enjoy exploring its unique attractions and culture.';
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.content}>
          <Text style={styles.heading}>Travel Destination</Text>
          <Text style={styles.destinationText}>{destination}</Text>

          <Image
            source={{ uri: getImageUri(destination) }}
            style={styles.image}
          />

          <Text style={styles.description}>{getDescription(destination)}</Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.buttonText}>Go Back</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
          headerStyle: {
            backgroundColor: '#007bff',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 18,
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Travel Explorer' }}
        />
        <Stack.Screen
          name="Destination"
          component={DestinationScreen}
          options={{ title: 'Destination Details' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContent: {
    flexGrow: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#007bff',
    marginBottom: 15,
    textAlign: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: '600',
    color: '#333',
    marginBottom: 25,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 55,
    borderColor: '#007bff',
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: '#fff',
    marginBottom: 25,
    color: '#333',
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  destinationText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#007bff',
    marginBottom: 20,
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 15,
    marginBottom: 20,
    backgroundColor: '#e0e0e0',
  },
  description: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 25,
    lineHeight: 24,
  },
});
