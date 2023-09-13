import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./components/Home";
import TvShows from "./components/TvShows";
import NotFound from "./components/NotFound";
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/TvShows" element={<TvShows />} />
          <Route path="/MovieDetails/:movieId" element={<MovieDetails />} />
          <Route
            path="*"
            element={<NotFound spacings="mt-5" mainText="404 — Pagina non trovata" btnVariant="danger" />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
