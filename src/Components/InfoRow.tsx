type InfoRowProps = {
  roomId: string | undefined;
};

const InfoRow = ({ roomId }: InfoRowProps) => {
  return (
    <div className="flex justify-between mb-4 px-4">
      <p>🚪 Room ID: {roomId}</p>
      <button>⚙️</button>
    </div>
  );
};

export default InfoRow;
