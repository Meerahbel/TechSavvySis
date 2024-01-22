import Work1 from "./Work1";
import Work2 from "./Work2";
import Work3 from "./Work3";
import { useState } from "react";

const Workcard = () => {
  const [boxHover, setBoxhover] = useState(null);

  const handleOver = (param) => {
    setBoxhover(param);
  };

  const handleMouseout = () => {
    setBoxhover(null);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-5">
      <Work1
        boxHover={boxHover}
        handleOver={handleOver}
        handleMouseout={handleMouseout}
      />
      <Work2
        boxHover={boxHover}
        handleOver={handleOver}
        handleMouseout={handleMouseout}
      />
      <Work3
        boxHover={boxHover}
        handleOver={handleOver}
        handleMouseout={handleMouseout}
      />
    </div>
  );
};

export default Workcard;
