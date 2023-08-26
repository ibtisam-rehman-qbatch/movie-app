import React, { Suspense } from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import Root from "./components/Root";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Loader from "./components/Loader";

const AllTvShows = React.lazy(() =>
  import(/* webpackChunkName: "allTvShows" */ "./pages/AllTvShows")
);
const AddTvShow = React.lazy(() =>
  import(/* webpackChunkName: "addTvShow " */ "./pages/AddTvShow")
);
const TvShowDetails = React.lazy(() =>
  import(/* webpackChunkName: "addTvShow " */ "./pages/TvShowDetails")
);

const Page404 = React.lazy(() =>
  import(/* webpackChunkName: "page404 " */ "./components/Page404")
);

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Root />}>
              <Route path="/add-tv-show" element={<AddTvShow />} />
              <Route path="/all-tv-shows" element={<AllTvShows />} />
              <Route path="/tv-show-details/:id" element={<TvShowDetails />} />
              <Route path="/*" element={<Page404 />} />
            </Route>
          </Routes>
        </Suspense>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
