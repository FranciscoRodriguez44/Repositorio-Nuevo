import { TabActions } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, ActivityIndicator, TextInput, ScrollView } from "react-native";
import Flatbutton from "../../button/button";
import { TblDetalleCompra } from "../../Model/TblDetalleCompra";
//Components
import { CardDetalleCompra } from "../utility/CardDetalleCompra";


class DetalleCompraView extends React.Component {
	constructor(props) {
		super();
		this.props = props;
		this.state = {
			DetalleComp: this.props.route.params.DetalleComp,
			Dataset: this.props.route.params.Dataset ?? []
		}
		// this.CargarArticulo(this.data);
	}

	render() {
		return (
			<ScrollView style={styles.Container}>
				<Text style={{ color: "white", alignSelf: 'center', fontSize: 30, fontWeight: 'bold' }}>Detalle de compras</Text>
				<Flatbutton style={styles.Button} text='<- Regresar' onPress={() =>
					this.props.navigation.navigate("CompraView")} />
				{
					this.state.Dataset.map(detalle => {
						return (
							<ScrollView style={styles.Container1} key={detalle.iddetallecompra}>
								<CardDetalleCompra
									data={detalle} />
							</ScrollView>)
					})
				}
			</ScrollView>
		);
	}

	// CargarArticulo = async (e = (new TblDetalleCompra())) => {
	// 	const list = await e.TblArticulos.get();
	// 	const result = list.filter(i => i.idarticulo == e.idarticulo);

	// 	this.setState({
	// 		Dataset: result
	// 	});
	// }
}
export { DetalleCompraView };

const styles = StyleSheet.create({

	Title: {
		color: "#fff",
		fontSize: 26,
		backgroundColor: "#212529",
	},
	Container: {
		backgroundColor: "#536878",
	},
	Container1: {
		backgroundColor: "#536878",
		marginTop: 40
	}

}
);