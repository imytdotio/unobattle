import Header from "../Components/Header";
import { useParams } from "react-router-dom";

const HistoryPage = () => {
  const { roomId } = useParams();
  return (
    <div>
      <Header text="History" />
      <div className="flex justify-between">
        <p>🚪 Room ID: {roomId}</p>
        <button>⚙️</button>
      </div>
    </div>
  );
};

export default HistoryPage;
