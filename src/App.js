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
            <Route path="/convin-march/" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/convin-march/create_card" element={<AddCard />} />
            <Route path="/convin-march/edit_card/:bucketId/:id" element={<EditCard />} />
            <Route path="/convin-march/history" element={<History />} />
            <Route path="*" element={<div>404</div>} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
