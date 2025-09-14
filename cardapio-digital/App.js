
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import ProductsScreen from './src/screens/ProductsScreen';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <ProductsScreen />
    </SafeAreaView>
  );
}
