import Work1 from "./Work1";
import Work2 from "./Work2";
import Work3 from "./Work3";

const Workcard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-5">
      <Work1 />
      <Work2 />
      <Work3 />
    </div>
  );
};

export default Workcard;
