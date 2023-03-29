import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteCard, getCards } from "../redux";
import Card from "../components/Card";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCards());
  }, []);
  const { loading, cards, error } = useSelector((state) => state.cards);
  const navigate = useNavigate();

  const [selectedCards, setSelectedCards] = useState([]);
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-dark">Cards</h1>
      {loading ? (
        <div className="text-dark-2">Loading...</div>
      ) : error ? (
        <div className="text-dark-2">{error}</div>
      ) : (
        <div className="flex flex-wrap gap-4 mt-4 mb-20">
          {cards.length > 0 ? (
            cards.map((card) => (
              <Card
                key={card.id}
                card={card}
                setSelectedCards={setSelectedCards}
                selectedCards={selectedCards}
              />
            ))
          ) : (
            <div className="text-dark-2">No cards present </div>
          )}
        </div>
      )}
      <div className="footer flex gap-8">
        <button
          className="btn btn-secondary"
          onClick={() => {
            selectedCards.forEach((id) => {
              dispatch(deleteCard(id));
            });
            setSelectedCards([]);
          }}
          disabled={selectedCards.length === 0}
          title={
            selectedCards.length === 0
              ? "Select cards to delete"
              : "Delete selected cards"
          }
        >
          Delete Selected Cards
        </button>
        <button
          className="btn btn-primary"
          onClick={() => navigate("/convin-march/create_card")}
        >
          Create Card
        </button>
      </div>
    </div>
  );
};

export default Home;
