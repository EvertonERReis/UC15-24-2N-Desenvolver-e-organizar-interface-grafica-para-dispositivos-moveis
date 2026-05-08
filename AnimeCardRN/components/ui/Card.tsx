import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Tipagem das props do Card
type CardProps = {
  title: string;
  content: string;
};

// Componente reutilizável de cartão
export default function Card({ title, content }: CardProps) {
  return (
    <View style={styles.card}>
      {/* Título do card */}
      <Text style={styles.title}>{title}</Text>

      {/* Conteúdo do card */}
      <Text>{content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff', // fundo branco
    padding: 16,
    borderRadius: 10, // borda arredondada
    marginVertical: 8,
    elevation: 3, // sombra (Android)
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 8,
  },
});