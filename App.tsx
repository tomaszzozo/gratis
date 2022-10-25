import { useRef } from "react";
import { NativeBaseProvider } from "native-base";

import AppNavigation from "./src/navigation/AppNavigation";

const App = () => {
  const navigationRef = useRef(null);

  return (
    <NativeBaseProvider>
      <AppNavigation navigationRef={navigationRef} />
    </NativeBaseProvider>
  );
};

export default App;
