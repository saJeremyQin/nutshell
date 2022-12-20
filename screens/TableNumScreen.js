import {
    StyleSheet,
    View,
    Image,
    Text,
    TextInput,
    Button
} from "react-native";

import { useContext } from "react";

import { TableNumContex } from "../App";


export default function TableNumScreen({ navigation }) {

    const { tableNumData, setTableNumData } = useContext(TableNumContex);


    return (
        <View style={styles.container}>
            <Image 
                style={styles.image}
                source={require("../assets/bg.png")} 
                resizeMode="center"
            />

            <TextInput
                placeholder='Only number!' 
                style={styles.textInput} 
                keyboardType='number-pad'
                onChangeText={setTableNumData}
                value = {tableNumData}
            />
            <View style={styles.buttonContainer}>
                <View style={styles.buttonView}>
                    <Button title='Set Table Number' onPress={setTableNumData} color="#5e0acc" />
                </View>

            </View> 
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    image: {
        width:300,
        height:300,
        padding:20
    },
    text:{
        fontSize: 24,
        color:'red',
        marginBottom:10
    },
    textInput: {
        width:"90%",
        borderWidth:1,
        borderColor:"#e4d0ff",
        borderRadius:6,
        backgroundColor:"#e4d0ff",
        color:"#120438",
        padding:5
    },
    buttonContainer: {
        flexDirection:"row",
        padding:8,
    },
    buttonView:{
        width:"45%",
        marginHorizontal:8,
        borderWidth:2,
        borderRadius:8
    }
})