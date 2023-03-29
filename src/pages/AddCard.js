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
    <div className="mt-10">
      <h1 className="text-2xl font-bold">Add Card</h1>
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
        <div className="my-2">
          <label className="block text-sm font-medium text-gray-700">
            Bucket ID
          </label>
          <input
            className="border-gray-300"
            type="text"
            value={bucketId}
            onChange={(e) => setBucketId(e.target.value)}
            required
          />
        </div>
        <div className="my-2">
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            className="border-gray-300"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="my-2">
          <label className="block text-sm font-medium text-gray-700">
            Link
          </label>
          <input
            className="border-gray-300"
            type="text"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            required
          />
        </div>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
          type="submit"
        >
          Create Card
        </button>
      </form>
    </div>
  );
};

export default AddCard;
