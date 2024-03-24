import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </main>
  );
}

export default App;
