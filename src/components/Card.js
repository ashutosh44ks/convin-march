import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteCard } from "../redux";
import { useState } from "react";
import { RiEditBoxLine, RiDeleteBin7Line, RiCloseFill } from "react-icons/ri";

const Card = ({ card, selectedCards, setSelectedCards }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [video, setVideo] = useState(false);

  return (
    <>
      <div
        className={`card ${selectedCards.includes(card.cardId) && `selected`}`}
        onClick={() => {
          if (selectedCards.includes(card.cardId)) {
            setSelectedCards(selectedCards.filter((id) => id !== card.cardId));
          } else {
            setSelectedCards([...selectedCards, card.cardId]);
          }
        }}
      >
        <div className="flex justify-between items-center">
          <h2>{card.name}</h2>
          {!selectedCards.includes(card.cardId) && (
            <div className="flex gap-2 items-center">
              <button
                className="p-2"
                onClick={() => navigate(`/edit_card/${card.cardId}`)}
              >
                <RiEditBoxLine />
              </button>
              <button
                className="p-2"
                onClick={() => {
                  dispatch(deleteCard(card.cardId));
                  setSelectedCards(
                    selectedCards.filter((id) => id !== card.cardId)
                  );
                }}
              >
                <RiDeleteBin7Line />
              </button>
            </div>
          )}
        </div>
        <div>Bucket: {card.bucketId}</div>
        <small
          onClick={() => {
            setVideo(true);
          }}
          className="text-dark-2 cursor-pointer"
        >
          Click here to open link
        </small>
      </div>
      {video && (
        <>
          <div className="modal">
            <div className="flex justify-end">
              <button onClick={() => setVideo(false)} className="p-2">
                <RiCloseFill />
              </button>
            </div>
            <iframe
              width="560"
              height="315"
              src={card.link}
              title="YouTube video player"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
          <div className="modal-overlay" onClick={() => setVideo(false)}></div>
        </>
      )}
    </>
  );
};

export default Card;
