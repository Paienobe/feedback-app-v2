import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import { Provider } from "react-redux";
import store from "./store/store";
import Comments from "./pages/Comments/Comments";
import Roadmap from "./pages/Roadmap/Roadmap";
import Add from "./pages/Add/Add";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/comments/:id" element={<Comments />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/add" element={<Add />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </main>
  );
}

export default App;
