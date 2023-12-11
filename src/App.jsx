import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Show from "./pages/Show";
import Login from "./pages/Login";

const App = () => {
  return (
    <div>
      <nav className="bg-gray-800">
        <div className="container mx-auto p-2">
          <Link to="/">
            <h2 className="text-white text-2x1 font-bold">My Blog</h2>
          </Link>
        </div>
      </nav>
      <div className="container mx-auto p-2 h-full">
        <Routes>
          <Route index element={<Login />}></Route>
          <Route path="/posts" element={<Home />}></Route>
          <Route path="/create" element={<Create />}></Route>
          <Route path="/post/:slug" element={<Show />} />
        </Routes>
      </div>
    </div>
  );
};
export default App;
