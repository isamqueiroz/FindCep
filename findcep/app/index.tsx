import { Text, View, StyleSheet, Image,  ImageBackground, ScrollView,} from "react-native";
import { Input } from '../components/input/Input'
import { Botao } from '../components/botao/Botao'
import { Card } from '../components/card/Card'
export default function Index() {
  return (
<>
      {/* 1. Logo + imagem de fundo */}
      <ImageBackground source={ require('../assets/images/ImagemFundo.png')}
      style={styles.ImagemFundo}>
        <Image source={require('../assets/images/LogoFindCEP.png')} style={styles.logo}></Image>

      </ImageBackground>

    <ScrollView style={styles.containerScroll}>



      {/* 2. Campo de consulta */}
      <View style={styles.container}>

      {/* 2.1. Título */}
      <Text style={styles.titulo}>Consulte seu CEP</Text>

      {/* 2.2. Input */}
      <Input/>
      {/* 2.3. Botão */}
      <Botao tituloBotao='Consultar'/>
      {/* 2.3. Botão */}

    <Card/>

      </View>
    </ScrollView>


</>
  );
}

//Estilos dos meus componentes:
const styles = StyleSheet.create({
 ImagemFundo : {
  flex: 1,
 justifyContent: 'center',
 alignItems : 'center',
 width: '100%',
 height: '100%'
 },
 logo: {
  width: 100,
  height : 120
 },
 container: {
 alignItems: 'center',
gap: 40,
width: '100%',
minHeight: '100%',
 },
 titulo: {
 fontSize: 25,
 fontFamily: 'Poppins-Bold'

 },
 containerScroll: {
  flex: 1.5,
  paddingTop: 50,
  paddingBottom: 200,
 }
 
})