import React from "react";
import { StyleSheet, Text, View, ActivityIndicator, TextInput, ScrollView, Button } from "react-native";
import Flatbutton from "../../button/button";
//Model
import { TblArticulos } from "../../Model/TblArticulos";
//Components
import { CardArticulo } from "../utility/CardArticulos";


class ArticulosView extends React.Component {
	constructor(props) {
		super();
		this.props = props
		this.state = {
			isLoading: false,
			Dataset: [],
			selecct: this.props.route.params ?? false
		};
		this.Articulos = new TblArticulos();
		this.CargarArticulos();
	}

	CargarArticulos = async (param = "") => {
		const Articulos = await this.Articulos.Get(param);
		this.setState({
			isloading: true,
			Dataset: Articulos,
		});
	};


	GuardarArticulo = async (key, Name) => {
		this.props.route.params.GuardarArticulo(key, Name);
		this.props.navigation.navigate("FrmDetalleCompra");
	}

	render() {

		return (
			// <View style={{ flex: 5 }}>
			<ScrollView style={styles.Container}>
				<Text style={{ color: "white", alignSelf: 'center', fontSize: 30, fontWeight: 'bold' }}>Lista de articulos</Text>
				<Flatbutton text='+Ingresar Nuevo Articulo' onPress={() =>
					this.props.navigation.navigate("FrmArticulo", {
						CargarArticulos: this.CargarArticulos
					})} />


				<TextInput
					style={styles.InputStyle}
					placeholder="Buscar"
					onChangeText={(val) => this.CargarArticulos(val)}
				></TextInput>
				{this.state.isLoading ?
					<ActivityIndicator />
					:
					this.state.Dataset.map(
						c => <CardArticulo key={c.idarticulo}
							data={c} GuardarArticulo={this.GuardarArticulo}
							selecct={this.state.selecct}
						/>
					)}


			</ScrollView>
		);
	}

}
export { ArticulosView };

const styles = StyleSheet.create({

	Title: {
		color: "#fff",
		fontSize: 26,
		backgroundColor: "#212529",
	},
	Container: {
		backgroundColor: "#536878",
	}, InputStyle: {
		color: "white",
		backgroundColor: "white",
		padding: 8,
		borderWidth: 2,
		borderRadius: 10,
		marginTop: 10
	}

}
);