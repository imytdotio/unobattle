import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartPage from "./Pages/StartPage";
import LiveScorePage from "./Pages/LiveScorePage";
import BottomNav from "./Components/BottomNav";
import UpdateScorePage from "./Pages/UpdateScorePage";
import HistoryPage from "./Pages/HistoryPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="p-4 pt-16">
          <h1 className="text-center text-6xl">Uno Battle</h1>
          <Routes>
            <Route path="/" element={<StartPage />} />
            <Route path="/:roomId/live-score" element={<LiveScorePage />} />
            <Route path="/:roomId/update-score" element={<UpdateScorePage />} />
            <Route path="/:roomId/history" element={<HistoryPage />} />
          </Routes>
          <BottomNav />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
