import { useRef } from "react";
import { NativeBaseProvider } from "native-base";

import AppNavigation from "./src/navigation/AppNavigation";

import customTheme from "./src/customTheme";

const App = () => {
  const navigationRef = useRef(null);

  return (
    <NativeBaseProvider theme={customTheme}>
      <AppNavigation navigationRef={navigationRef} />
    </NativeBaseProvider>
  );
};

export default App;
