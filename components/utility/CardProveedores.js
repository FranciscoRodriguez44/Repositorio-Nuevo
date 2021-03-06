import { StyleSheet, Text, View, Button } from "react-native";
import { TouchableOpacity } from "react-native";



const CardProveedores = (props) => {
	return (
		//manda los datosa mostrar
		<View style={styles.CardStyle}>
			<Text style={styles.Title}>PROVEEDORES</Text>
			<Text style={styles.Atribute}>Nombre: {props.data.nombreproveedor} </Text>
			<Text style={styles.Atribute}>Telefono: {props.data.telefonoproveedor} </Text>
			<Text style={styles.Atribute}>Direccion: {props.data.direccionproveedor} </Text>

			<TouchableOpacity
				title="Add"
				color="#168aad"
				onPress={() => {
					props.selecct ? props.SeleccionProveedor(props.data.idproveedor, props.data.nombreproveedor) : false
				}}

				style={styles.Button} >
				{
					props.selecct ? <Text style={styles.ButtonText}>ADD</Text> : <Text style={styles.ButtonText}>Ver Detalle</Text>
				}
			</TouchableOpacity>
		</View>
	);
};

export { CardProveedores };

const styles = StyleSheet.create({
	CardStyle: {
		backgroundColor: "#212529",
		padding: 20,
		margin: 10,
		borderRadius: 10
	},
	Title: {
		color: "#f8f9fa",
		fontSize: 25,
	},
	Atribute: {
		color: "#e9ecef",
		fontSize: 18,
	}, Button: {
		marginTop: 10,
		paddingTop: 10,
		paddingBottom: 10,
		backgroundColor: 'black',
		borderRadius: 8,
		borderWidth: 1,
		borderColor: 'white'
	},
	ButtonText: {
		color: 'white',
		textAlign: 'center',
		fontSize: 17
	}
});