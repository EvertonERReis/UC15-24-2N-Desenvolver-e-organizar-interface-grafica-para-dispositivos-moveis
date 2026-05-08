import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Alert } from 'react-native';

// Importando todos os componentes criados
import Header from '@/components/ui/Header';
import Card from '@/components/ui/Card';
import ButtonPrimary from '@/components/ui/ButtonPrimary';
import InputField from '@/components/ui/InputField';
import Footer from '@/components/ui/Footer';

export default function Index() {
  // useState cria um estado para armazenar o nome digitado
  const [name, setName] = useState<string>('');

  // Função chamada ao clicar no botão
  const handlePress = () => {
    Alert.alert('Mensagem', `Olá, ${name}`);
  };

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <Header title="Home 2026" />

      {/* Scroll permite rolar a tela */}
      <ScrollView contentContainerStyle={styles.content}>
        {/* Campo de input */}
        <InputField
          placeholder="Digite seu nome"
          value={name}
          onChangeText={setName}
        />

        {/* Botão */}
        <ButtonPrimary
          title="Enviar"
          onPress={handlePress}
        />

        {/* Cards de exemplo */}
        <Card
          title="Bem-vindo"
          content="Este é um exemplo moderno de React Native."
        />

        <Card
          title="UC12"
          content="Front-end muito daora"
        />

        <Card
          title="UC13"
          content="back-end triii ate"
        />

        <Card
          title="UC3"
          content="banco de dados muito divertido com o sor lucas"
        />

        <Card
          title="UC7"
          content="muito chato ingles"
        />



      </ScrollView>

      {/* Rodapé */}
      <Footer />
    </View>
  );
}

// Estilos da tela principal
const styles = StyleSheet.create({
  container: {
    flex: 1, // ocupa toda a tela
    backgroundColor: '#f9cbef',
  },
  content: {
    padding: 16,
  },
});