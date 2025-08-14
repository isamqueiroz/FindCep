import { View, StyleSheet, Text} from "react-native"
import { ScrollView } from "react-native"

export const Card = () => {
    return(
        <View style={styles.card} >
           <View>
             <Text style={styles.tituloValor}>CEP:</Text>
             <Text style={styles.valor}>Dado 1</Text>
           </View>
           <View>
             <Text style={styles.tituloValor}>Logradouro:</Text>
             <Text style={styles.valor}>Dado 2</Text>
           </View>
           <View>
             <Text style={styles.tituloValor}>Bairro:</Text>
             <Text style={styles.valor}>Dado 3</Text>
           </View>
           <View>
             <Text style={styles.tituloValor}>UF:</Text>
             <Text style={styles.valor}>Dado 4</Text>
           </View>
           <View>
             <Text style={styles.tituloValor}>Estado:</Text>
             <Text style={styles.valor}>Dado 5</Text>
           </View>
           <View>
             <Text style={styles.tituloValor}>Região</Text>
             <Text style={styles.valor}>Dado 6</Text>
           </View>
        </View>

   )
}


const styles = StyleSheet.create({
    card:{
        width: '70%',
        // minHeight: '100%',
        padding: 20,
    //     shadowColor: '#b2b2b2ff',
    //    shadowOffset: {width: 0, height: 2},
    //     shadowOpacity: 0.5,
    //     shadowRadius: 2,
    //     elevation: 2,
  boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px',
  borderRadius: 7,
  gap: 20,
    },
    tituloValor:{
      fontWeight: 600,
    }
})