import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import { View, StyleSheet } from 'react-native';

import Dashboard from './src/views/Dashboard';
import { store } from './src/redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Dashboard />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
