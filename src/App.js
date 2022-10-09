import { ChakraProvider, extendTheme } from "@chakra-ui/react";

// Components
import CreateWorkspace from "./pages/CreateWorkspace";

const theme = extendTheme({
  colors: {
    brand: {
      100: "#eae6fb",
      200: "#bfb5f4",
      300: "#9583ed",
      400: "#6a52e6",
      500: "#4021de",
      600: "#3219ad",
      700: "#23127c",
      800: "#150b4a",
      900: "#070419",
    },
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <CreateWorkspace />
    </ChakraProvider>
  );
}

export default App;
