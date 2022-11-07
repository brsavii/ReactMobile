import { Button, Modal, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import Background from './assets/images.jpg'
import { ImageBackground } from 'react-native';
import React, { useState } from "react";

export default function App() {
  const [altura, setAltura] = useState(0);
  const [peso, setPeso] = useState(0);
  const [imc, setImc] = useState(0);

  const calcularIMC =() =>{
    setImc((peso/(altura*altura)).toFixed(2));
  };

  function verificarIMC(){
    if(imc < 18){
      return "Abaixo do Peso";
    }else if( imc < 25){
      return "Peso Normal";
    }else if( imc >= 25){
      return "Acima do Peso";
    }
  }

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.container} source={Background}></ImageBackground>
      <Modal animationType="slide" transparent={true}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>CALCULADORA DE IMC</Text>
            <TextInput style={styles.InputAltura} placeholder="altura:" onChangeText={setAltura} value={altura}></TextInput>
            <TextInput style={styles.InputAltura} placeholder="peso:" onChangeText={setPeso} value={peso}></TextInput>
            <Text style={styles.Message}>O seu IMC é: {imc} kg/mc = {verificarIMC()}</Text>
            <Button onPress={calcularIMC} title="CALCULAR" color="#f194ff"/>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    backgroundColor: "#FF1493",
    borderRadius: 20,
    padding: 50,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalText: {
    marginBottom: 30,
    textAlign: "center",
    fontSize: 25
  },
  InputAltura: {
    marginBottom: 40,
    backgroundColor: "#FF1493",
    width: 100,
    borderColor: "#f194ff",
    borderWidth: 1,
  },
  Message: {
    marginBottom: 60
  }
});
