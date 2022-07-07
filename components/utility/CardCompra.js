import { StyleSheet, Button, Text, View } from "react-native";
import { TouchableOpacity } from "react-native";



const CardCompra = (props) => {
	return (
		<View style={styles.CardStyle}>
			<Text style={styles.Title}>Compras</Text>
			<Text style={styles.Atribute}>Fecha compra: {props.data.fechacompra} </Text>
			<Text style={styles.Atribute}>Id Usuario: {props.data.idusuario} </Text>
			<Text style={styles.Atribute}>Id Proveedor: {props.data.idproveedor} </Text>
			<Text style={styles.Atribute}>Total compra: {props.data.totalcompra} </Text>
			<TouchableOpacity
				color="#168aad"
				onPress={() => {
					props.CargarDetalle(props.data);
				}} style={styles.Button}
			>
				<Text style={styles.ButtonText}>Detalle de compra</Text>
			</TouchableOpacity>



		</View>
	);
};

export { CardCompra };

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
		fontSize: 16,
	},
	Resumen: {
		color: "#e9ecef",
		fontSize: 12,
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
