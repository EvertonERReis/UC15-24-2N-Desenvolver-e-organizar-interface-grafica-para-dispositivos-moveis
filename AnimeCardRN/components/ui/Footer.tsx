import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Componente simples de rodapé
export default function Footer() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>© 2026 Meu App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    alignItems: 'center',
  },
  text: {
    color: '#888',
  },
});