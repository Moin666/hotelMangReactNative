import React from 'react';
import { Text, View } from 'react-native';
import AppRouting from './confiq/routing/approuting';
import { Provider } from "react-redux";

import { store } from './confiq/store/configurestore';
const App = () => {
  return (
<Provider store={store}>
  <AppRouting/>
</Provider>
  )
}
export default App;