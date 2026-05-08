// Importamos o React e o useState
// useState serve para criar estados que podem mudar a tela
import React, { useState} from 'react'
// Importamos os componentes do React Native
import{View, Text, Image, StyleSheet, Button, ImageSourcePropType} from 'react-native'

// Criamos um tipo chamado Props
// Ele define quais informações o componente vai receber
type Props = {
    // Nome do Anime -> texto
    nome: string
    //Imagem so anime
    // ImageSourcePropType é o tipo correto para imagens no React Native
    imagem: ImageSourcePropType
}
// Criamos o componente AnimeCard
// Elel recebe nome imagem através das props
export default function AnimeCard({nome, imagem}: Props){
    // Estado para mudar a cor do fundo do card
    // Começa com cinza claro
    const[corFundo, setCorFundo] = useState('#eeeeee')
    // Estado para mostrar a avaliação do anime
    // Começa com a mensagem inicial

    const[avaliacao, setAvaliacao] = useState('Avalie este anime!')
    // O return mostra o que aparece na tela (renderiza)
    return(
        // View principal do card
        // Estamos trabalhando com dois estilos:
        // styles.card -> estilos fixos
        // backgroundColor -> muda conforme o estado
        <View style={[styles.card, {backgroundColor: corFundo}]}>
            {/**Exibe a imagem do anime 
             * Como a imagem vem de require(..),
             * usamos source={imagem}
             */}
             <Image source={imagem}style={styles.image} />

             {/** Mostra o nome do anime  */}
             <Text style={styles.nome}>{nome}</Text>

             {/** Mostra a avaliação atual */}
             <Text>{avaliacao}</Text>

             {/** Botão RUIM
              * 
              * Quando clicar:
              * - muda a cor do fundo
              * - muda o texto da avaliação
              */}
              <Button title="Ruim" onPress={()=>{
                // Fundo vermelho claro
                setCorFundo('#ef9a9a')
                // Texto da avaliação
                setAvaliacao('👎 Ruim')
              }}
              />
              {/** Botão REGULAR */}
              <Button title= "Regular" onPress={() => {
                // Fundo amarelo claro
                setCorFundo('#fff59d')
                // Texto da avaliação
                setAvaliacao('🙂 Regular')

              }}
              />
              {/** Botão BOM */}
              <Button title="Bom" onPress={() => {
                // Fundo verde claro
                setCorFundo('#a5d6a7')
                // Texto da avaliação
                setAvaliacao('👍 Bom')
              }}
              />             

        </View>
    )

}
const styles = StyleSheet.create({
  card:{
  width:260,
  padding: 16,
  borderRadius: 12,
  alignItems: 'center',
  marginBottom: 20,
  },
  image:{
    width: 180,
    height: 180,
    borderRadius: 12
  },
  nome:{
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 10
  }
})