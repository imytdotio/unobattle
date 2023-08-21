import Header from "../Components/Header";
import { useParams } from "react-router-dom";
import InfoRow from "../Components/InfoRow";
import { useReducer } from "react";

type InputRowProps = {
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

type State = {
  numberCard: number;
  functionCard: number;
  blackCard: number;
  sum: number;
};

type Action =
  | { type: "SET_NUMBER_CARD"; value: number }
  | { type: "SET_FUNCTION_CARD"; value: number }
  | { type: "SET_BLACK_CARD"; value: number };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_NUMBER_CARD":
      return {
        ...state,
        numberCard: action.value,
        sum: state.sum - state.numberCard + action.value,
      };
    case "SET_FUNCTION_CARD":
      return {
        ...state,
        functionCard: action.value,
        sum: state.sum - state.functionCard * 20 + action.value * 20,
      };
    case "SET_BLACK_CARD":
      return {
        ...state,
        blackCard: action.value,
        sum: state.sum - state.blackCard * 50 + action.value * 50,
      };
    default:
      return state;
  }
};

const InputRow = ({ label, onChange }: InputRowProps) => {
  return (
    <div className="flex items-center gap-8">
      <label className="">{label}</label>
      <input
        type="number"
        className="border-2 border-zinc-600 bg-transparent h-12 rounded-lg flex-1 box-border px-2"
        onChange={onChange}
      />
    </div>
  );
};

const UpdateScorePage = () => {
  const { roomId } = useParams();
  const [state, dispatch] = useReducer(reducer, {
    numberCard: 0,
    functionCard: 0,
    blackCard: 0,
    sum: 0,
  });

  return (
    <div>
      <Header text="Update your score." />
      <InfoRow roomId={roomId} />
      {/* Form with 3 row of text and input F*/}
      <form className="flex flex-col justify-between gap-2 px-4">
        <InputRow
          label="數字牌"
          onChange={(e) =>
            dispatch({
              type: "SET_NUMBER_CARD",
              value: parseInt(e.target.value) || 0,
            })
          }
        />
        <InputRow
          label="功能牌"
          onChange={(e) =>
            dispatch({
              type: "SET_FUNCTION_CARD",
              value: parseInt(e.target.value) || 0,
            })
          }
        />
        <InputRow
          label="黑色牌"
          onChange={(e) =>
            dispatch({
              type: "SET_BLACK_CARD",
              value: parseInt(e.target.value) || 0,
            })
          }
        />
        <p className="font-bold text-6xl text-center my-8">{state.sum}</p>
        <button className="m-auto rounded-md bg-zinc-100 text-zinc-800 px-12 py-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UpdateScorePage;
