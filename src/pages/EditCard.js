import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { editCard } from "../redux";

const EditCard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const card = useSelector((state) =>
    state.cards.cards.find((card) => card.id === id)
  );
  const [inputBucketId, setInputBucketId] = useState("");

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-dark">Edit Card</h1>
      <form
        className="mt-4"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(editCard(inputBucketId, id));
          navigate("/");
        }}
      >
        <div className="my-3">
          <label className="text-dark-2">
            Current Bucket ID
          </label>
          <input
            className="w-full"
            type="text"
            value={card.bucketId}
            readOnly
          />
        </div>
        <div className="my-3">
          <label className="text-dark-2">
            New Bucket ID
          </label>
          <input
            className="w-full"
            type="text"
            value={inputBucketId}
            onChange={(e) => setInputBucketId(e.target.value)}
            required
          />
        </div>
        <button
          className="btn btn-primary mt-4"
          type="submit"
        >
          Update Bucket
        </button>
      </form>
    </div>
  );
};

export default EditCard;
