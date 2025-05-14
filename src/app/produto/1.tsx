import { Image, Text, View } from "react-native";
import { style } from"./1style"

export default function Produto() {
    return (

        <View style={style.container}>

            <Image style={style.image} source={require("@/assets/images/banana.png")}></Image>

            <Text style={style.description}>Tapioca de Doce de Leite e Banana</Text>
            <Text style={style.price}>R$ 11.60</Text>

            <Text style={style.subtitle}>Sobre</Text>
            <Text style={style.paragrafo}>Uma fina camada de tapioca branquinha, sobre ela fatias de bananas, e
                não podemos deixar de colocar por cima doce de leite para deixar
                ela mais saborosa </Text>
            <Text style={style.subtitle}>Igredientes</Text>
            <Text style={style.paragrafo}>•Tapioca</Text>
            <Text style={style.paragrafo}>•Banana</Text>
            <Text style={style.paragrafo}>•Doce de Leite</Text>


        </View>
    )
}

/**<Image source= {require("@assents/images/banana")}></Image> */