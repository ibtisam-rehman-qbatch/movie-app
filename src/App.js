import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import AllShows from "./components/AllShows";

function App() {
  return (
    <Provider store={store}>
      <AllShows />
    </Provider>
  );
}

export default App;
