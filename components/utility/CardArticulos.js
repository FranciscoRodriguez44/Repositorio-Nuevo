import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import Flatbutton2 from "../../button/button2";



const CardArticulo = (props) => {
	return (
		<View style={styles.CardStyle}>
			<Text style={styles.Title}>ARTICULOS</Text>
			<Text style={styles.Atribute}>Nombre: {props.data.nombrearticulo} </Text>
			<Text style={styles.Atribute}>Descripcion: {props.data.descripcionarticulo} </Text>
			<Text style={styles.Atribute}>ID Categoria: {props.data.idcategoria} </Text>
			<Text style={styles.Atribute}>ID Marca: {props.data.idmarca} </Text>

			<TouchableOpacity
				title="Add"
				color="#168aad"
				onPress={() => {
					props.selecct ? props.GuardarArticulo(props.data.idarticulo, props.data.nombrearticulo) : false
				}}

				style={styles.Button} >
				{
					props.selecct ? <Text style={styles.ButtonText}>ADD</Text> : <Text style={styles.ButtonText}>Ver Detalle</Text>
				}
			</TouchableOpacity>



		</View>
	);
};

export { CardArticulo };

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
	},
	Button: {
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
