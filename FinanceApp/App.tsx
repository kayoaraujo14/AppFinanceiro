import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import DashboardScreen from './src/screens/DashboardScreen';
import AddExpenseScreen from './src/screens/AddExpenseScreen';

function App(): React.JSX.Element {
  const [currentScreen, setCurrentScreen] = useState('Dashboard');

  const navigateToAddExpense = () => {
    setCurrentScreen('AddExpense');
  };

  const navigateToDashboard = () => {
    setCurrentScreen('Dashboard');
  };

  return (
    <SafeAreaView style={styles.container}>
      {currentScreen === 'Dashboard' ? (
        <DashboardScreen onNavigate={navigateToAddExpense} />
      ) : (
        <AddExpenseScreen onNavigateBack={navigateToDashboard} />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
