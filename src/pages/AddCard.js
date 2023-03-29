import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createCard } from "../redux";

const AddCard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [bucketId, setBucketId] = useState("");
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-dark">Add Card</h1>
      <form
        className="mt-4"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            createCard(
              bucketId,
              name,
              link,
              Math.random().toString(36).substr(2, 9)
            )
          );
          navigate("/");
        }}
      >
        <div className="my-3">
          <label className="text-dark-2">Bucket ID</label>
          <input
            className="w-full"
            type="text"
            value={bucketId}
            onChange={(e) => setBucketId(e.target.value)}
            required
          />
        </div>
        <div className="my-3">
          <label className="text-dark-2">Name</label>
          <input
            className="w-full"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="my-3">
          <label className="text-dark-2">Link</label>
          <input
            className="w-full"
            type="text"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            required
          />
        </div>
        <button className="btn btn-primary mt-4" type="submit">
          Create Card
        </button>
      </form>
    </div>
  );
};

export default AddCard;
