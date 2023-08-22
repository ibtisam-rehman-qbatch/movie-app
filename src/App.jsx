import React, { Suspense } from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import Root from "./components/Root";
import { Route, Routes, BrowserRouter } from "react-router-dom";

const AllTvShows = React.lazy(() =>
  import(/* webpackChunkName: "allTvShows" */ "./pages/AllTvShows")
);
const AddTvShow = React.lazy(() =>
  import(/* webpackChunkName: "addTvShow " */ "./pages/AddTvShow")
);
const TvShowDetails = React.lazy(() =>
  import(/* webpackChunkName: "addTvShow " */ "./pages/TvShowDetails")
);

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Root />}>
              <Route path="/add-tv-show" element={<AddTvShow />} />
              <Route path="/all-tv-shows" element={<AllTvShows />} />
              <Route path="/tv-show-details/:id" element={<TvShowDetails />} />
            </Route>
          </Routes>
        </Suspense>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
