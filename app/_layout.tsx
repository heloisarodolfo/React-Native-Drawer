//import { Drawer } from "expo-router";
import { Drawer } from "expo-router/drawer";


export default function AppLayout() {
  return (
    <Drawer>
      <Drawer.Screen
        name="index" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "Home",
          title: "Bem-vindo",
        }}
      />
      <Drawer.Screen
        name="telaA" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "tela A",
          title: "tela A",
        }}
      />
    </Drawer>
  );
}