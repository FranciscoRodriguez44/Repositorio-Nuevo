import React from 'react';

import { StyleSheet, Text, Button, View, ActivityIndicator, TextInput, ScrollView } from 'react-native';
import Flatbutton, { } from "../../button/button";

import Flatbutton2, { } from "../../button/button2";
import { TblArticulos } from '../../Model/TblArticulos';

class FrmArticulo extends React.Component {
    constructor(props) {
        super()
            this.props=props;
            this.articulo= new TblArticulos();
            this.state ={

            }
            //es para que reconzca el metodo de cargar articulos qe viene de articuloswiewddd ya hecho
            this.CargarArticulos=this.props.route.params.CargarArticulos;
        

    }
    //añadir un nuevoarticulo
     GuardarArticulo = async()=>{
        await this.articulo.Save("idarticulo");
        this.CargarArticulos();
    }
    render() { /*formulario de articulo donde se registra los parametros o datos que vienen del tblarticulos*/
        return (<ScrollView style={styles.container}>
            <Text style={{ color: "white", alignSelf: "center", fontSize: 25 }}>REGISTRAR ARTICULO COMPRADO</Text>
            <TextInput style={styles.InputStyle}
                placeholder="Nombre Articulo"
                onChangeText={(val)=>this.articulo.nombrearticulo=val} ></TextInput>
            <TextInput style={styles.InputStyle}
                placeholder="Descripcion Articulo"
                multiline
                numberOfLines={1}
                onChangeText={(val)=>this.articulo.descripcionarticulo=val}  ></TextInput>
            <TextInput style={styles.InputStyle}
                placeholder="Id Categoria"
                multiline
                numberOfLines={1}
                onChangeText={(val)=>this.articulo.idcategoria=val}  ></TextInput>
            <TextInput style={styles.InputStyle}
                placeholder="Id Marca"
                multiline
                numberOfLines={1}
                onChangeText={(val)=>this.articulo.idmarca=val}  ></TextInput>
  

            <Flatbutton2 text='Guardar Articulo'onPress={async() =>{
                await this.GuardarArticulo();
            this.props.navigation.navigate("ArticulosView");
            }
            }
                />

            <Flatbutton text='Cancelar y Regresar' onPress={() =>
                this.props.navigation.navigate("ArticulosView")} />

        </ScrollView>)
    }
}


export { FrmArticulo }
const styles = StyleSheet.create({
    InputStyle: {
        padding: 10,
        paddingLeft: 10,
        color: "black",

        backgroundColor: "white",
        margin: 10,
        borderWidth: 2,
        borderRadius: 10,
        marginLeft: 30
    }, container: {
        backgroundColor: "#536878",
    },
});