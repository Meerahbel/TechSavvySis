import { Route, Routes } from "react-router-dom";
import "./index.css";
import Homepage from "./pages/Homepage";
import Loader from "./components/Loader";
import { Suspense } from "react";

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
