
// APP CARDSANIME


import { ScrollView, StyleSheet, Text} from 'react-native'


// Importamos o componente AnimeCard
import AnimeCard from '@/components/ui/AnimeCard'
// Cria e exporta a tela 
export default function Index(){
  return(
    // ScrollView para a rolagem vertical da tela
    // contentContainerStyle estiliza o conteúdo interno
    <ScrollView contentContainerStyle={styles.container}>

      {/** título da tela */}
      <Text style={styles.title}>
        Classificador de Anime 
      </Text>

      {/** Card de anime que criamos */}
      <AnimeCard 

      // Nome que será mostrado
      nome="Aang"
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
    flexGrow: 1 // faz o conteúdo ocupar toda a tela
  },
  title:{
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom:20,
    color: '#111827'
  }
})