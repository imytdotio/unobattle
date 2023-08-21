import { NavLink } from "react-router-dom";

type NavButtonProps = {
  to: string;
  text: string;
  icon: string;
};

const NavButton = ({ to, icon, text }: NavButtonProps) => {
  return (
    <NavLink to={to}>
      <button className="bg-transparent border-none text-white cursor-pointer text-lg outline-none">
        <div className="bg-white rounded-md w-24">{icon}</div>
        <p className="text-sm">{text}</p>
      </button>
    </NavLink>
  );
};

const BottomNav = () => {
  return (
    <div className="fixed bottom-2 left-0 right-0 h-12 bg-gray-800 flex justify-around items-center shadow-md">
      <NavButton to="/B1bd/live-score" text="Live Score" icon="🔥" />
      <NavButton to="/B1bd/update-score" text="Update" icon="✏️" />
      <NavButton to="/B1bd/history" text="History" icon="📜" />
    </div>
  );
};

export default BottomNav;
