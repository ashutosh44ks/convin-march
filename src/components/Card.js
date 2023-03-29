import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteCard } from "../redux";
import { useState } from "react";

const Card = ({ card, selectedCards, setSelectedCards }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [video, setVideo] = useState(false);

  return (
    <>
      <div
        className={`card ${selectedCards.includes(card.cardId) && `selected`}`}
      >
        <h2
          onClick={() => {
            setVideo(true);
          }}
        >
          {card.name}
        </h2>
        <p>{card.bucketId}</p>
        <div className="flex justify-between">
          <button onClick={() => navigate(`/edit_card/${card.cardId}`)}>
            Edit
          </button>
          <button
            onClick={() => {
              dispatch(deleteCard(card.cardId));
              setSelectedCards(
                selectedCards.filter((id) => id !== card.cardId)
              );
            }}
          >
            Delete
          </button>
        </div>
        <div className="flex justify-between">
          <button
            onClick={() => {
              if (selectedCards.includes(card.cardId)) {
                setSelectedCards(
                  selectedCards.filter((id) => id !== card.cardId)
                );
              } else {
                setSelectedCards([...selectedCards, card.cardId]);
              }
            }}
          >
            Select
          </button>
        </div>
      </div>
      {video && (
        <>
          <div className="modal">
            <iframe
              width="560"
              height="315"
              src={card.link}
              title="YouTube video player"
              frameborder="0"
              allowfullscreen
            ></iframe>
            <button onClick={() => setVideo(false)}>Close</button>
          </div>
          <div className="modal-overlay"></div>
        </>
      )}
    </>
  );
};

export default Card;
