import { useState } from "react";

const ShortCircuitOverview = () => {

  const [valueOne, setValueOne] = useState("");
  const [valueTwo, setValueTwo] = useState("second");

  return (
    <div>
      <h2>short circuit overview</h2>
      { valueOne && <>hey</>  } {/* so basically if use && then if first element is false return false (otherwise return second) */}

      { valueTwo || <>hey2</> } {/* with this one if first is true then return it (otherwise if it is false then return second) */}

    </div>
  );
};
export default ShortCircuitOverview;
