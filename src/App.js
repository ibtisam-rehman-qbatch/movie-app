import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import FetchData from "./components/FetchData";

function App() {
  return (
    <Provider store={store}>
      <FetchData />
    </Provider>
  );
}

export default App;
