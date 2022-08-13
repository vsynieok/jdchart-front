import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ContentSpace from "./components/ContentSpace/ContentSpace";
import About from "./components/Pages/About/About";
import AllCharts from "./components/Pages/AllCharts/AllCharts";
import Home from "./components/Pages/Home/Home";
import NotFound from "./components/Pages/NotFound/NotFound";
import SideMenu from "./components/SideMenu/SideMenu";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SideMenu />
        <Routes>
          <Route path="/" element={<ContentSpace />}>
            <Route index element={<Home />} />
            <Route path="charts" element={<AllCharts />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
