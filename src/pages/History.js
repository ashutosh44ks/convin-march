import { useSelector } from "react-redux";

const History = () => {
  const history = useSelector((state) => state.history.history);
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-dark">History</h1>
      <div className="my-5">
        {history.length > 0 ? (
          history.map((item) => (
            <div key={item.name + item.link + item.time}>
              <ul className="text-dark-2">
                <li>{item.name}</li>
                <li>{item.link}</li>
                <li>{item.time}</li>
              </ul>
              <div className="separator"></div>
            </div>
          ))
        ) : (
          <div className="text-dark-2">No history</div>
        )}
      </div>
    </div>
  );
};

export default History;
