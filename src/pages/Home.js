import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteCard } from "../redux";
import Card from "../components/Card";

const Home = () => {
  const dispatch = useDispatch();

  const cards = useSelector((state) => state.cards.cards);
  const navigate = useNavigate();

  const [selectedCards, setSelectedCards] = useState([]);
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-dark">Cards</h1>
      <div className="flex flex-wrap gap-4 my-4">
        {cards.length > 0 ? (
          cards.map((card) => (
            <Card
              key={card.cardId}
              card={card}
              setSelectedCards={setSelectedCards}
              selectedCards={selectedCards}
            />
          ))
        ) : (
          <div className="text-dark-2">No cards present </div>
        )}
      </div>
      <div className="footer flex gap-8">
        <button
          className="btn btn-secondary"
          onClick={() => {
            selectedCards.forEach((cardId) => {
              dispatch(deleteCard(cardId));
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
          onClick={() => navigate("/create_card")}
        >
          Create Card
        </button>
      </div>
    </div>
  );
};

export default Home;
