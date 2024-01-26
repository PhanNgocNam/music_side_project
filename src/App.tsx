import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import PageLayout from "./layouts/PageLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="/vi" element={<PageLayout />}>
            <Route path="home" element={<Home />} />
            <Route path="explore" element={<Explore />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
