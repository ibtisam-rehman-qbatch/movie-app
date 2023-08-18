import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import FetchData from "./components/FetchData";
import AddTvShow from "./components/AddTvShow";
import AllTvShows from "./components/AllTvShows";
import SignUpPage from "./components/SignUpPage";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<FetchData />}>
            <Route path="/add-tv-show" element={<AddTvShow />} />
            <Route path="/all-tv-shows" element={<AllTvShows />} />
            <Route path="/iii" element={<SignUpPage />} />
            {/* <Route path="/hovercounter" element={<HoverCounter />} />
            <Route path="/get-data" element={<GetData />} />
            <Route path="/useref-example" element={<UseRefExample />} />
            <Route path="/usereducer" element={<UseReducer />} />
            <Route path="/todo-list" element={<TodoList />} /> */}
          </Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
