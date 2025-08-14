import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  ScrollView,
} from "react-native";
import { Input } from "../components/input/Input";
import { Botao } from "../components/botao/Botao";
import { Card } from "../components/card/Card";
import axios from "axios";
import { useState } from "react";

export default function Index() {
  const [cep, setCep] = useState("");
  const [jsonCep, setJsonCep] = useState({});
  const [exibirCard, setExibirCard] = useState(false);

  async function consultarCep(e) {
    e.preventDefault();
    try {
      if (cep != "" && cep.length === 8) {
        const resposta = await axios.get(
          `https://viacep.com.br/ws/${cep}/json/`
        );
        // console.log(resposta);
        setJsonCep(resposta.data);
        setExibirCard(true);
        // console.log(jsonCep);
      }
    } catch (error) {
      alert("O cep está incorreto. Digite com 8 numeros.");
    }
  }

  return (
    <>
      {/* 1. Logo + imagem de fundo */}
      <ImageBackground
        source={require("../assets/images/ImagemFundo.png")}
        style={styles.ImagemFundo}
      >
        <Image
          source={require("../assets/images/LogoFindCEP.png")}
          style={styles.logo}
        ></Image>
      </ImageBackground>

      <ScrollView style={styles.containerScroll}>
        {/* 2. Campo de consulta */}
        <View style={styles.container}>
          {/* 2.1. Título */}
          <Text style={styles.titulo}>Consulte seu CEP</Text>

          {/* 2.2. Input */}
          <Input
            valorCep={cep}
            onChangeValorCep={e => {
              setCep(e);
              console.log(e);
            }}
          />
          {/* 2.3. Botão */}
          <Botao tituloBotao="Consultar" onPress={consultarCep} />
          {/* 2.3. Botão */}


        { exibirCard && ( 
          <Card
            cep={jsonCep.cep}
            logradouro={jsonCep.logradouro}
            bairro={jsonCep.bairro}
            uf={jsonCep.uf}
            estado={jsonCep.estado}
            regiao={jsonCep.regiao}
          />
          )}
        </View>
      </ScrollView>
    </>
  );
}

//Estilos dos meus componentes:
const styles = StyleSheet.create({
  ImagemFundo: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  logo: {
    width: 100,
    height: 120,
  },
  container: {
    alignItems: "center",
    gap: 40,
    width: "100%",
    minHeight: "100%",
  },
  titulo: {
    fontSize: 25,
    fontFamily: "Poppins-Bold",
  },
  containerScroll: {
    flex: 1.5,
    paddingTop: 50,
    paddingBottom: 200,
  },
});
