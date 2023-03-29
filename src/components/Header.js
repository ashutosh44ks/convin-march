import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between header">
      <div className="cursor-pointer font-medium" onClick={() => navigate("/")}>
        Card Manager
      </div>
      <div
        className="bg-blue cursor-pointer text-white"
        onClick={() => navigate("/history")}
      >
        History
      </div>
    </div>
  );
};

export default Header;
