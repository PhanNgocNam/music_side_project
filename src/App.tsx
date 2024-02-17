import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import PageLayout from "./layouts/PageLayout";
import PlaylistDetails from "./pages/PlaylistDetails";
import Artists from "./pages/Artists";
import Song from "./pages/Song";
import { history } from "./constant/history";

function App() {
  history.navigate = useNavigate();
  history.location = useLocation();
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route path="/" element={<PageLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="explore" element={<Explore />} />
          <Route path="list" element={<PlaylistDetails />} />
          <Route path="artists" element={<Artists />} />
          <Route path="song" element={<Song />} />
          <Route path="lib" element={<h1>lib</h1>} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
