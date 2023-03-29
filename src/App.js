import { Provider } from "react-redux";
import store from "./redux/Store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import AddCard from "./pages/AddCard";
import EditCard from "./pages/EditCard";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create_card" element={<AddCard />} />
          <Route path="/edit_card/:cardId" element={<EditCard />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
