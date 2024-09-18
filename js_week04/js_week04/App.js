import React from 'react';
import { SafeAreaView } from 'react-native';
import LoginForm from './components/Screen2_a';
import ProductReviewScreen from './components/Screen2_b';
import PasswordGeneratorScreen from './components/Screen2_c';
export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <PasswordGeneratorScreen />
    </SafeAreaView>
  );
}
