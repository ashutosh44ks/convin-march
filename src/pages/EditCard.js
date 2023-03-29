import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editCard } from "../redux";

const EditCard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cardId } = useParams();

  const card = useSelector((state) =>
    state.cards.cards.find((card) => card.cardId === cardId)
  );
  const [inputBucketId, setInputBucketId] = useState("");

  return (
    <div className="mt-10">
      <h1 className="text-2xl font-bold">Edit Card</h1>
      <form
        className="mt-4"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(editCard(inputBucketId, cardId));
          navigate("/");
        }}
      >
        <div className="my-2">
          <label className="block text-sm font-medium text-gray-700">
            Current Bucket ID
          </label>
          <input
            className="border-gray-300"
            type="text"
            value={card.bucketId}
            readOnly
          />
        </div>
        <div className="my-2">
          <label className="block text-sm font-medium text-gray-700">
            New Bucket ID
          </label>
          <input
            className="border-gray-300"
            type="text"
            value={inputBucketId}
            onChange={(e) => setInputBucketId(e.target.value)}
            required
          />
        </div>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
          type="submit"
        >
          Update Bucket
        </button>
      </form>
    </div>
  );
};

export default EditCard;
