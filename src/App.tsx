import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import PageLayout from "./layouts/PageLayout";
import PlaylistDetails from "./pages/PlaylistDetails";
import Artists from "./pages/Artists";
import Song from "./pages/Song";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="/vi" element={<PageLayout />}>
            <Route path="home" element={<Home />} />
            {/* <Route path="home" element={<h1>Home</h1>} /> */}
            <Route path="explore" element={<Explore />} />
            <Route path="list" element={<PlaylistDetails />} />
            <Route path="artists" element={<Artists />} />
            <Route path="song" element={<Song />} />
            <Route path="lib" element={<h1>lib</h1>} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
