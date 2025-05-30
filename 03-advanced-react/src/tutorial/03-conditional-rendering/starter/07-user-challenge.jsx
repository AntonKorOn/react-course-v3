import { useState } from "react";

const UserChallenge = () => {
  const [user, setUser] = useState(null);

  const login = () => {
    setUser({ name: "john" });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <div>
      <h1>user challenge</h1>
      {user ? (
        <div>
          <h4>hello there, {user.name}</h4>
          <button className="btn" onClick={logout}>logout</button>
        </div>
      ) : (
        <div>
          <h4>please login</h4>
          <button className="btn" onClick={login}>login</button>
        </div>
      )}
    </div>
  );
};

export default UserChallenge;
