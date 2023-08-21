import Header from "../Components/Header";
import { useParams } from "react-router-dom";
import PlayerBlock from "../Components/PlayerBlock";
import InfoRow from "../Components/InfoRow";

const LiveScorePage = () => {
  const { roomId } = useParams();
  return (
    <>
      <Header text="Live-score" />
      <InfoRow roomId={roomId} />
      <div className="grid grid-cols-2 border-collapse overflow-scroll">
        <PlayerBlock name="SamuelLofuchai" score="277" isKing={false} />
        <PlayerBlock name="OppaDoctor" score="92" isKing={true} />
        <PlayerBlock name="jkin_cheung" score="632" isKing={false} />
        <PlayerBlock name="Alexanderlalalau" score="448" isKing={false} />
        <PlayerBlock
          name="Laapjai.officialFansPage"
          score="92"
          isKing={false}
        />
        <PlayerBlock name="SamuelKaiserng" score="847" isKing={false} />
        <PlayerBlock name="tobylai_bibi" score="382" isKing={false} />
        <PlayerBlock name="dc.wchch" score="562" isKing={false} />
      </div>
    </>
  );
};

export default LiveScorePage;
