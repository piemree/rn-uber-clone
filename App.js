import * as React from "react";
import { store } from "./store";
import { Provider } from "react-redux";
import Stackavigator from "./components/StackNavigator";
import { SafeAreaProvider } from "react-native-safe-area-context";

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Stackavigator />
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
