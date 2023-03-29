import { Provider } from "react-redux";
import store from "./redux/Store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import AddCard from "./pages/AddCard";
import EditCard from "./pages/EditCard";
import History from "./pages/History";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <div className="page-template">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create_card" element={<AddCard />} />
            <Route path="/edit_card/:cardId" element={<EditCard />} />
            <Route path="/history" element={<History />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
