import Header from "../Components/Header";
import { useParams } from "react-router-dom";

const UpdateScorePage = () => {
  const { roomId } = useParams();
  return (
    <div>
      <Header text="Update your score." />
      <div className="flex justify-between">
        <p>🚪 Room ID: {roomId}</p>
        <button>⚙️</button>
      </div>
    </div>
  );
};

export default UpdateScorePage;
