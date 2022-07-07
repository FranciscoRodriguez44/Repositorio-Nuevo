import { StyleSheet, Button, Text, View } from "react-native";



const CardDetalleCompra = (props) => {
	return (
		<View style={styles.CardStyle}>
			<Text style={styles.Title}>Detalle de la compra</Text>
			<Text style={styles.Atribute}>Id Compra: {props.data.idcompra} </Text>
			<Text style={styles.Atribute}>Id Articulo: {props.data.idarticulo} </Text>
			<Text style={styles.Atribute}>Precio Compra: {props.data.preciocompra} </Text>
			<Text style={styles.Atribute}>Cantidad Compra: {props.data.cantidadcompra} </Text>

		</View>
	);
};

export { CardDetalleCompra };

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

});
