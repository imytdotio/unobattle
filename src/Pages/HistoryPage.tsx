import Header from "../Components/Header";
import { useParams } from "react-router-dom";
import InfoRow from "../Components/InfoRow";

const HistoryPage = () => {
  const { roomId } = useParams();
  return (
    <div>
      <Header text="History" />
      <InfoRow roomId={roomId}/>
    </div>
  );
};

export default HistoryPage;
