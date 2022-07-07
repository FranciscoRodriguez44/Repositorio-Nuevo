import { createNativeStackNavigator } from "@react-navigation/native-stack";


const Stack = createNativeStackNavigator();
//views
import { CompraView } from "./CompraView";
import { DetalleCompraView } from "./DetalleCompraView";
import { FrmArticulo } from "./FrmArticulo";
import { FrmCompra } from "./FrmCompra";
import { FrmDetalleCompra } from "./FrmDetalleCompra";
import { FrmProveedor } from "./FrmProveedor";
import { ProveedorView } from "./ProveedorView";
import { ArticulosView } from "./ArticulosView";


export default function MainView() {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="CompraView" component={CompraView} />
			<Stack.Screen name="DetalleCompraView" component={DetalleCompraView} />
			<Stack.Screen name="ArticulosView" component={ArticulosView} />
			<Stack.Screen name="FrmArticulo" component={FrmArticulo} />
			<Stack.Screen name="ProveedorView" component={ProveedorView} />
			<Stack.Screen name="FrmProveedor" component={FrmProveedor} />
			<Stack.Screen name="FrmCompra" component={FrmCompra} />
			<Stack.Screen name="FrmDetalleCompra" component={FrmDetalleCompra} />


		
		</Stack.Navigator>
	);
}

