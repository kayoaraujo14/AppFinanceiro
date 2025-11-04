import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  StatusBar,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { RECENT_TRANSACTIONS } from '../data/mockData';

const DashboardScreen = ({ onNavigate }) => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <Header />
        <BalanceCard />
        <MonthlySummary />
        <RecentTransactions data={RECENT_TRANSACTIONS} />
      </ScrollView>
      <TouchableOpacity style={styles.fab} onPress={onNavigate}>
        <Text style={styles.fabIcon}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const Header = () => (
  <View style={styles.header}>
    <Text style={styles.headerTitle}>Olá, Bruno</Text>
  </View>
);

const BalanceCard = () => (
  <View style={styles.card}>
    <Text style={styles.cardTitle}>Saldo Atual</Text>
    <Text style={styles.balance}>R$ 1.850,75</Text>
    <View style={styles.incomeExpenseContainer}>
      <View style={styles.incomeExpenseBox}>
        <Text style={styles.incomeExpenseLabel}>Receitas</Text>
        <Text style={styles.income}>R$ 5.200,00</Text>
      </View>
      <View style={styles.incomeExpenseBox}>
        <Text style={styles.incomeExpenseLabel}>Despesas</Text>
        <Text style={styles.expense}>R$ 3.349,25</Text>
      </View>
    </View>
  </View>
);

const MonthlySummary = () => (
  <View style={styles.card}>
    <Text style={styles.sectionTitle}>Resumo do Mês</Text>
    {/* Donut chart will be implemented later */}
  </View>
);

const RecentTransactions = ({ data }) => (
  <View style={styles.card}>
    <Text style={styles.sectionTitle}>Transações Recentes</Text>
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <View style={styles.transactionItem}>
          <View style={styles.transactionIcon}>
            <Text>{item.icon === 'restaurant' ? '🍽️' : item.icon === 'paid' ? '💰' : '🚌'}</Text>
          </View>
          <View style={styles.transactionDetails}>
            <Text style={styles.transactionName}>{item.name}</Text>
            <Text style={styles.transactionDate}>{item.date}</Text>
          </View>
          <Text style={[styles.transactionAmount, { color: item.amount.startsWith('+') ? 'green' : 'red' }]}>{item.amount}</Text>
        </View>
      )}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f6f8',
  },
  header: {
    padding: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    marginHorizontal: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 16,
    color: '#666',
  },
  balance: {
    fontSize: 36,
    fontWeight: 'bold',
    marginTop: 10,
  },
  incomeExpenseContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  incomeExpenseBox: {
    alignItems: 'center',
  },
  incomeExpenseLabel: {
    fontSize: 14,
    color: '#666',
  },
  income: {
    fontSize: 18,
    fontWeight: '600',
    color: 'green',
  },
  expense: {
    fontSize: 18,
    fontWeight: '600',
    color: 'red',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  transactionIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#eee',
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  transactionDetails: {
    flex: 1,
  },
  transactionName: {
    fontSize: 16,
    fontWeight: '500',
  },
  transactionDate: {
    fontSize: 14,
    color: '#666',
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: '600',
  },
  fab: {
    position: 'absolute',
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#607AFB',
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
    elevation: 8,
  },
  fabIcon: {
    fontSize: 30,
    color: 'white',
  },
});

export default DashboardScreen;
