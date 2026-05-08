
/*
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
      {/* Cabeçalho // }
      <Header title="Home 2026" />

      {/* Scroll permite rolar a tela // }
      <ScrollView contentContainerStyle={styles.content}>
        {/* Campo de input // }
        <InputField
          placeholder="Digite seu nome"
          value={name}
          onChangeText={setName}
        />

        {/* Botão // }
        <ButtonPrimary
          title="Enviar"
          onPress={handlePress}
        />

        {/* Cards de exemplo // }
        <Card
          title="UC3"
          content="Aprendemos a mexer com Banco de dados com o sor Lucas foi muito trii."
        />

        <Card
          title="UC4"
          content="Aprendemos Orientação Objetos e fizemos trabalho de harry potter."
        />
          <Card
          title="UC12 que gostei muito."
          content="Front-end foi muito legal fiz um site sobre mim com minhas descrições."
        />

        <Card
          title="UC1 que não gostei."
          content="Tivemos que fazer umas planilha muito chato."
        />

      </ScrollView>

      {/* Rodapé // }
      <Footer />
    </View>
  );
}

// Estilos da tela principal
const styles = StyleSheet.create({
  container: {
    flex: 1, // ocupa toda a tela
    backgroundColor: '#E8B4B8',
  },
  content: {
    padding: 16,
  },
});

*/

// APP CARDSANIME

 import { ScrollView, StyleSheet, Text } from "react-native";

 // importamos o compponente AnimeCard
 import AnimeCard from "@/components/ui/AnimeCard";
 // Cria e exporta a tela
 export default function Index(){
  return(
    // SCrollView paara a rolagem vertical da tela
    // ContentContainerStyle estiliza o conteudo interno
    <ScrollView contentContainerStyle={styles.container}>

      {/** titulo da tela */}
      <Text style={styles.title}>
        Classificador de Anime
      </Text>

      {/** Card de anime que craimos */}
      <AnimeCard

      // Nome que sera mostrado
      nome="Ang"
      // Caminho da imagem local
      imagem={require('../../assets/images/Aang.jpg')}
    />
      </ScrollView>

  )
 }

 const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    flexGrow: 1 // faz o conteudo ocupar toda a tela
  },
  title:{
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#111827'
  }
})