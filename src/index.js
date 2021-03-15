import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import Slider from '@react-native-community/slider';
import Clipboard from '@react-native-clipboard/clipboard';

let charSet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*'; 

export default function App() {  
    const [password, setPassword] = useState('');
    const [size, setSize] = useState(10);

    function generatePass(){
        //alert(size);
        let pass = '';

        for(let i = 0, n = charSet.length; i < size; i++){
            pass += charSet.charAt(Math.floor(Math.random() * n))
        }

        setPassword(pass);
    }

    function copyPass(){
        Clipboard.setString(password);
        alert('Senha copiado com sucesso!');
    }


    return (                                                // tag jsx
        <View style={styles.container}>  
            <Image 
                source={require('../src/assets/logo.png')}
                style={styles.logo}
            />  

            <Text style={styles.title}>{size} Caracteres</Text>

            <View style={styles.area}>
                <Slider 
                style={{ height: 50 }}
                minimumValue={5}
                maximumValue={15}
                minimumTrackTintColor="#FF0000"
                maximumTrackTintColor="#000"
                value={size}                   
                onValueChange={ (valor) => setSize(parseFloat(valor.toFixed(0))) }
                />
            </View>
            <TouchableOpacity style={styles.button} onPress={generatePass}>
                <Text style={styles.buttonText}>Gerar Senha</Text>
            </TouchableOpacity>

            {password !== '' && (
                <View style={styles.area}>
                    <Text style={styles.password} onLongPress={copyPass} >{password}</Text>
                </View>
            )}

            {password !== '' && (
                <Text style={styles.clique}>Clique para copiar</Text>    
            )}

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F3F3FF'
    },
    logo:{
        marginBottom: 60
    },
    title:{
        fontSize: 30,
        fontWeight: 'bold'
    },
    area:{
        marginTop: 15,
        marginBottom: 15,
        backgroundColor: '#FFF',
        width: '80%',
        borderRadius: 7
    },
    button:{
        backgroundColor: '#FFA200',
        width: '80%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 25,
        borderRadius: 7
    },
    buttonText:{
        fontSize: 20,
        color: '#FFF',
        fontWeight: 'bold'   
    },
    password:{
        padding: 10,
        textAlign: 'center',
        fontSize: 20
    },
    clique:{
        textAlign: 'center',
        fontWeight: 'bold', 
        color: '#FFA200'
    }
});
