import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

// Tipagem das props do input
type InputFieldProps = {
  placeholder?: string; // opcional
  value: string; // valor atual do input
  onChangeText: (text: string) => void; // função ao digitar
};

export default function InputField({
  placeholder,
  value,
  onChangeText,
}: InputFieldProps) {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor:'#b55454',
    borderWidth: 1,
    borderColor: '#5f0202',
    padding: 12,
    borderRadius: 8,
    marginVertical: 8,
  },
});