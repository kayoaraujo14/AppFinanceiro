import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const AddExpenseScreen = ({ onNavigateBack }) => {
  const [amount, setAmount] = useState('0,00');

  return (
    <ScrollView style={styles.container}>
      <Header onNavigateBack={onNavigateBack} />
      <AmountInput value={amount} onChange={setAmount} />
      <Form />
      <SaveButton />
    </ScrollView>
  );
};

const Header = ({ onNavigateBack }) => (
  <View style={styles.header}>
    <TouchableOpacity onPress={onNavigateBack} style={styles.backButton}>
      <Text style={styles.backButtonText}>{'< Back'}</Text>
    </TouchableOpacity>
    <Text style={styles.headerTitle}>Adicionar Despesa</Text>
  </View>
);

const AmountInput = ({ value, onChange }) => (
  <View style={styles.amountContainer}>
    <Text style={styles.currencySymbol}>R$</Text>
    <TextInput
      style={styles.amountInput}
      value={value}
      onChangeText={onChange}
      keyboardType="numeric"
      maxLength={10}
    />
  </View>
);

const Form = () => (
  <View style={styles.form}>
    <Text style={styles.label}>Categoria</Text>
    {/* Category picker will be implemented later */}
    <Text style={styles.label}>Data</Text>
    {/* Date picker will be implemented later */}
    <Text style={styles.label}>Descrição</Text>
    <TextInput
      style={styles.input}
      placeholder="Descrição (opcional)"
    />
  </View>
);

const SaveButton = () => (
  <TouchableOpacity style={styles.saveButton}>
    <Text style={styles.saveButtonText}>Salvar</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  header: {
    padding: 20,
    alignItems: 'center',
    flexDirection: 'row',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  backButton: {
    position: 'absolute',
    left: 20,
    zIndex: 1,
  },
  backButtonText: {
    color: '#007BFF',
    fontSize: 16,
  },
  amountContainer: {
    paddingVertical: 40,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  currencySymbol: {
    fontSize: 48,
    fontWeight: 'bold',
    marginRight: 10,
  },
  amountInput: {
    fontSize: 48,
    fontWeight: 'bold',
  },
  form: {
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 10,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  saveButton: {
    backgroundColor: '#007BFF',
    borderRadius: 10,
    padding: 20,
    margin: 20,
    alignItems: 'center',
  },
  saveButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AddExpenseScreen;
