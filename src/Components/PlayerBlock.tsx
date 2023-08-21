type PlayerBlockProps = {
  name: string;
  score: string;
  isKing: Boolean;
};
const PlayerBlock = ({ name, score, isKing }: PlayerBlockProps) => {
  return (
    <div className="w-full border border-zinc-700 h-24 p-2">
      <p
        className={`${
          isKing ? "font-bold text-yellow-400" : "text-zinc-500"
        } truncate ...`}
      >
        {isKing ? "👑 " : ""}
        {name}
      </p>
      <p className="font-bold text-6xl">{score}</p>
    </div>
  );
};

export default PlayerBlock;
