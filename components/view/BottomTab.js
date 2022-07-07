import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import react from "react";
import { StyleSheet, Image } from "react-native";
import { ArticulosView } from "./ArticulosView";
import { CompraView } from "./CompraView";

import AntDesign from "react-native-vector-icons/AntDesign";
import { DetalleCompraView } from "./DetalleCompraView";
import { ProveedorView } from "./ProveedorView";
import MainView from "./MainView";


const Tab = createBottomTabNavigator();

const BottomTab = (props) => {

  return (

    <Tab.Navigator screenOptions={{
      //tabBarShowLabel:false,
      // tabBarShowLabel:false,
      tabBarStyle: { backgroundColor: "#536878" },
      tabBarInactiveTintColor: "#fff",
      tabBarActiveTintColor: "yellow",

    }}>
      <Tab.Screen name="MainView" component={MainView}
        options={{
          tabBarIcon: () => {
            return <AntDesign name="shoppingcart" size={25} color="white" />
          }
        }

        } />
      <Tab.Screen name="ArticulosView" component={ArticulosView}
        options={{
          tabBarIcon: () => {
            return <AntDesign name="edit" size={25} color="white" />
          }
        }

        } />
      <Tab.Screen name="ProveedorView" component={ProveedorView}
        options={{
          tabBarIcon: () => {
            return <AntDesign name="edit" size={25} color="white" />
          }
        }

        } />

    </Tab.Navigator>
  );
}
export { BottomTab };