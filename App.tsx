import React from 'react';
import { YellowBox } from "react-native";
import Youvise from "./src";
import { Provider } from 'react-redux';
import { store } from './src/state/store';

YellowBox.ignoreWarnings(["VirtualizedLists should never be nested"]);
const App = () => {
    return (
        <Provider store={store}>
            <Youvise></Youvise>
        </Provider>
    )
}

export default App;
