import React from 'react';

import { StyleSheet, Text, Button, View, ActivityIndicator, TextInput, ScrollView } from 'react-native';
import Flatbutton, { } from "../../button/button";

import Flatbutton2, { } from "../../button/button2";
import { TblProveedor } from '../../Model/TblProveedor';

class FrmProveedor extends React.Component {
    constructor(props) {
        super()
        this.props = props;
        this.proveedor = new TblProveedor();
        this.state = {

        }
        //es para que reconzca el metodo y mande de cargar articulos qe viene de articulos view 
        this.CargarProveedores = this.props.route.params.CargarProveedores;

    }
    //añadir un nuevo proveedor a la vista
    GuardarProveedor = async () => {
        await this.proveedor.Save("idproveedor");
        this.CargarProveedores();
    }
    render() { /*formulario de articulo donde se registra los parametros o datos que vienen del tblProveedor*/
        return (<ScrollView style={styles.container}>
            <Text style={{ color: "white", alignSelf: "center", fontSize: 25 }}>REGISTRAR ARTICULO COMPRADO</Text>
            <TextInput style={styles.InputStyle}
                placeholder="Nombre Proveedor"
                onChangeText={(val) => this.proveedor.nombreproveedor = val} ></TextInput>
            <TextInput style={styles.InputStyle}
                placeholder="Telefono"
                multiline
                numberOfLines={1}
                onChangeText={(val) => this.proveedor.telefonoproveedor = val}  ></TextInput>
            <TextInput style={styles.InputStyle}
                placeholder="Direccion"
                multiline
                numberOfLines={1}
                onChangeText={(val) => this.proveedor.direccionproveedor = val}  ></TextInput>


            <Flatbutton2 text='Guardar Proveedor' onPress={async () => {
                await this.GuardarProveedor();
                this.props.navigation.navigate("ProveedorView");
            }
            }
            />
            <Flatbutton text='Cancelar y Regresar' onPress={() =>
                this.props.navigation.navigate("ProveedorView")} />

        </ScrollView>)
    }
}


export { FrmProveedor }
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