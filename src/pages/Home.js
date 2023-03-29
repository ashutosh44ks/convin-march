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
  console.log(selectedCards);
  return (
    <div className="m-10">
      <h1 className="text-2xl font-bold">Cards</h1>
      <div className="flex flex-wrap gap-4">
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
          <div>No cards present </div>
        )}
      </div>
      {selectedCards.length > 0 && (
        <div className="flex justify-center mt-4">
          <button
            onClick={() => {
              selectedCards.forEach((cardId) => {
                dispatch(deleteCard(cardId));
              });
              setSelectedCards([]);
            }}
          >
            Delete Selected Cards
          </button>
        </div>
      )}
      <div className="flex justify-center mt-10">
        <button onClick={() => navigate("/create_card")}>Create Card</button>
      </div>
    </div>
  );
};

export default Home;
