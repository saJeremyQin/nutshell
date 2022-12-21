import {
    StyleSheet,
    View,
    Image,
    Text,
    TextInput,
    Button,
    ImageBackground
} from "react-native";

import { useContext,useState } from "react";
import { TableNumContex } from "../global/appContext";
import JereButton from "../components/JereButton";


export default function TableNumScreen({ navigation }) {

    const [isSubmitted, setIsSubmitted] = useState(false);

    const { tableNumData, setTableNumData } = useContext(TableNumContex);

    const onPress = () => {

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
                style={styles.textInput} 
                keyboardType='numeric'
                onChangeText={(value)=>{setTableNumData(value)}}           
            />
            <View style={styles.buttonContainer}>
                <View style={styles.buttonView}>
                    <Button title='Set Table Number' onPress={onPress()} color="#5e0acc" />
                </View>
            </View> 
        </View>
    );
}

const styles = StyleSheet.create({
  body:{
    flex:1,
    alignItems:"center"
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
image: {
    width:300,
    height:300,
    padding:20
},
buttonView:{
    width:"40%",
    marginHorizontal:8
}
    
})