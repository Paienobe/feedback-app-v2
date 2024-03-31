import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import { Provider } from "react-redux";
import store from "./store/store";
import Roadmap from "./pages/Roadmap/Roadmap";
import Add from "./pages/Add/Add";
import CommentsPage from "./pages/Comments/CommentsPage";
import Edit from "./pages/Edit/Edit";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/comments/:id" element={<CommentsPage />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/add" element={<Add />} />
            <Route path="/edit/:id" element={<Edit />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </main>
  );
}

export default App;
