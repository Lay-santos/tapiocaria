import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { styles } from"./style"
import { Link } from 'expo-router'

export default function Index() {
    const MENU = [
    {
        id: 1,
        name: "Tapioca de Doce de Leite e banana",
        description: "Massa de Tapioca com banana em rodela e doce de leite em cima da banana",
        price:111.60,
        image:require("@/assets/images/banana.png")
    },
    {
        id: 2,
        name: "Tapioca de Carne Moida",
        description: "Massa de Tapioca com muita carne moida",
        price:111.60,
        image:require("@/assets/images/carnemoida.png")
    },
    {
        id: 3,
        name: "Tapioca de Frango a Catupiry",
        description: "Massa de Tapioca com frango desfiado e muito catupity em cima",
        price:111.60,
        image:require("@/assets/images/frango.png")
    }
]

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.headerImage} source={require("@/assets/images/tapiocaria.jpg")}></Image>
                <Text style={styles.restaurantName}>Tapiocaria</Text>
            <Text style={styles.subtitle}>A melhor tapioca da região</Text>
        
            </View>
           

        <View style={styles.tabs}>
            {["Combos", "Tapioca Doce", "Tapioca Salgada", "Promoção"] .map((tab) => (
            <TouchableOpacity>
                <Text style ={styles.tabText}> {tab}</Text>
            </TouchableOpacity>
           
       
    ))}
     </View>



<ScrollView style = {styles.menuList}>
    {
        MENU.map((item) => (
            <Link href={"/produto/1"} asChild>
            <TouchableOpacity style = {styles.menuItem}>
            <View style={styles.menuContent}>
                <Text style ={styles.itemName}>{item.name}</Text>
                <Text>{item.description}</Text>
                <Text style ={styles.itemPrice}>{item.price}</Text>
            </View>
            <Image style ={styles.itemImage} source={item.image}/> 
            </TouchableOpacity>
            </Link>
        ))
    }
    </ScrollView>
     </View>
    )
}
