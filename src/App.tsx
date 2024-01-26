import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import PageLayout from "./layouts/PageLayout";
import PlaylistDetails from "./pages/PlaylistDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="/Nam" element={<PageLayout />}>
            <Route path="home" element={<Home />} />
            <Route path="explore" element={<Explore />} />
            <Route path="list" element={<PlaylistDetails />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
