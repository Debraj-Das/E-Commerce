import { ChakraProvider } from "@chakra-ui/react";
import ProductScreen from "./screens/ProductsScreens.jsx";

function App() {
  return (
    <ChakraProvider>
      <ProductScreen />
    </ChakraProvider>
  );
}

export default App;
