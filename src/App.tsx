import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import { Provider } from "react-redux";
import store from "./store/store";
import Roadmap from "./pages/Roadmap/Roadmap";
import Add from "./pages/Add/Add";
import CommentsPage from "./pages/Comments/CommentsPage";
import Edit from "./pages/Edit/Edit";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

function App() {
  const persistor = persistStore(store);
  return (
    <main>
      <BrowserRouter>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/comments/:id" element={<CommentsPage />} />
              <Route path="/roadmap" element={<Roadmap />} />
              <Route path="/add" element={<Add />} />
              <Route path="/edit/:id" element={<Edit />} />
            </Routes>
          </PersistGate>
        </Provider>
      </BrowserRouter>
    </main>
  );
}

export default App;
