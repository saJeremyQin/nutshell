import {
    StyleSheet,
    View,
    Image,
    Text,
    TextInput,
} from "react-native";

import { useContext,useState } from "react";
import { TableNumContex } from "../global/appContext";
import JereButton from "../components/JereButton";


export default function TableNumScreen({ navigation }) {

    const [isSubmitted, setIsSubmitted] = useState(false);

    const { tableNumData, setTableNumData } = useContext(TableNumContex);

    // control the status of JereButton
    const onPress = () => {
        setIsSubmitted(!isSubmitted);
    }

    return (
        <View style={styles.body}>
            <Image 
                style={styles.image}
                source={require("../assets/bg.png")} 
                resizeMode="center"
            />
            <TextInput
                placeholder='Please input table number!' 
                style={styles.input} 
                keyboardType='numeric'
                onChangeText={(value)=>{setTableNumData(value)}}           
            />
            {/* <View style={styles.buttonContainer}>
                <View style={styles.buttonView}>
                    <Button title='Set Table Number' onPress={onPress()} color="#5e0acc" />
                </View>
            </View>  */}
            <JereButton 
                onPress={onPress} 
                title={isSubmitted ? 'Clear' : 'Set Number'} 
                color={"#5e0acc"}
            />
            {
                isSubmitted ?
                (
                    <>
                        <Text style={[styles.text]}>
                            Current Table Number is {tableNumData}
                        </Text>
                        <Image style={styles.dimage}
                            source={require("../assets/done.png")}
                            resizeMode="stretch"
                        /> 
                    </>
                ) : (
                    <>
                    </>
                )
            }
        </View>
    );
}

const styles = StyleSheet.create({
    body:{
        flex:1,
        alignItems:"center"
    },
    input:{
        width:250,
        height:40,
        borderWidth:1,
        borderColor:"#555",
        borderRadius:5,
        textAlign:"center",
        fontSize: 20,
        marginTop:30,
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
    text:{
        fontSize:24,
        color:"black",
        margin:5,
        textAlign:"center"
    },   
    image: {
        width:300,
        height:300,
        padding:20
    },
    dimage:{
        width:80,
        height:80,
        marginTop:8
    }    
})