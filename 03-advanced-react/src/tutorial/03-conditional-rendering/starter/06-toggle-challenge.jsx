import { useState } from "react";

const ToggleChallenge = () => {
  const [IsToggled, SetIsToggled] = useState(false);

  return (
    <div>
      <button onClick={() => {SetIsToggled(!IsToggled)}}>toggle</button>
      {IsToggled ? <TrueComponent /> : <FalseComponent />}
    </div>
  );
};

const TrueComponent = () => {
 return <h1>True is Here!</h1>
};

const FalseComponent = () => {
 return <h1>False is Here!</h1>
};

export default ToggleChallenge;
