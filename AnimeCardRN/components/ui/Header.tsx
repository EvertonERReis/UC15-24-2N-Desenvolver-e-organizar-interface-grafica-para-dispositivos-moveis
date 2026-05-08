// Importa o React (necessário para criar componentes)
import React from 'react';

// Importa componentes nativos do React Native
import { View, Text, StyleSheet } from 'react-native';

// Criamos um "tipo" para definir quais props o componente recebe
type HeaderProps = {
  title: string; // o título deve ser uma string obrigatória
};

// Criamos o componente Header
export default function Header({ title }: HeaderProps) {
  return (
    // View funciona como uma "div" no React web
    <View style={styles.container}>
      {/* Exibe o título recebido por props */}
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

// Criamos os estilos do componente
const styles = StyleSheet.create({
  container: {
    padding: 16, // espaço interno
    backgroundColor: '#4F46E5', // cor de fundo
  },
  title: {
    color: '#fff', // cor do texto
    fontSize: 20, // tamanho da fonte
    fontWeight: 'bold', // negrito
  },
});