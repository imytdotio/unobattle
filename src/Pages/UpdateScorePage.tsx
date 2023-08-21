import Header from "../Components/Header";
import { useParams } from "react-router-dom";
import InfoRow from "../Components/InfoRow";

const UpdateScorePage = () => {
  const { roomId } = useParams();
  return (
    <div>
      <Header text="Update your score." />
      <InfoRow roomId={roomId} />
    </div>
  );
};

export default UpdateScorePage;
