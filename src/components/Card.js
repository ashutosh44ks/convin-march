import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteCard, addItem } from "../redux";
import { useState } from "react";
import { RiEditBoxLine, RiDeleteBin7Line, RiCloseFill } from "react-icons/ri";

const Card = ({ card, selectedCards, setSelectedCards }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [video, setVideo] = useState(false);
  return (
    <>
      <div
        className={`card ${selectedCards.includes(card.id) && `selected`}`}
        onClick={() => {
          if (selectedCards.includes(card.id)) {
            setSelectedCards(selectedCards.filter((id) => id !== card.id));
          } else {
            setSelectedCards([...selectedCards, card.id]);
          }
        }}
      >
        <div className="flex justify-between items-center">
          <h2>{card.name}</h2>
          {!selectedCards.includes(card.id) && (
            <div className="flex gap-2 items-center">
              <button
                className="p-2"
                onClick={() => navigate(`/edit_card/${card.id}`)}
              >
                <RiEditBoxLine />
              </button>
              <button
                className="p-2"
                onClick={() => {
                  dispatch(deleteCard(card.id));
                  setSelectedCards(
                    selectedCards.filter((id) => id !== card.id)
                  );
                }}
              >
                <RiDeleteBin7Line />
              </button>
            </div>
          )}
        </div>
        <div
          onClick={() => {
            dispatch(addItem(card.name, card.link));
            setVideo(true);
          }}
          className="text-dark-2 text-sm cursor-pointer"
        >
          Click here to open link
        </div>
        <div className="mt-2">
          <span className="tab">{card.bucketId}</span>
        </div>
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
